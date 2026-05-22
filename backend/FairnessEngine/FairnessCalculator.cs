using LebaApi.Models;

namespace LebaApi.FairnessEngine
{
    public class FairnessCalculator
    {
        public static List<AuditResult> RunAudit(string datasetId, string protectedAttribute, List<LoanApplication> applications)
        {
            var results = new List<AuditResult>();

            if (applications == null || !applications.Any()) return results;

            // Group by the protected attribute dynamically using reflection
            var propertyInfo = typeof(LoanApplication).GetProperty(protectedAttribute);
            if (propertyInfo == null) return results;

            var grouped = applications.GroupBy(a => propertyInfo.GetValue(a)?.ToString() ?? "Unknown").ToList();

            // Calculate overall approval rate
            double overallApprovalRate = (double)applications.Count(a => a.ApprovalStatus == "Approved") / applications.Count;

            // Find reference group (the group with the highest approval rate, usually the privileged group)
            var groupRates = grouped.Select(g => new
            {
                GroupName = g.Key,
                Total = g.Count(),
                Approved = g.Count(a => a.ApprovalStatus == "Approved"),
                ApprovalRate = g.Count() > 0 ? (double)g.Count(a => a.ApprovalStatus == "Approved") / g.Count() : 0
            }).OrderByDescending(x => x.ApprovalRate).ToList();

            if (!groupRates.Any()) return results;

            var referenceGroup = groupRates.First();

            foreach (var group in groupRates)
            {
                if (group.GroupName == referenceGroup.GroupName) continue; // Skip comparing against itself

                double disparateImpactRatio = referenceGroup.ApprovalRate > 0 ? group.ApprovalRate / referenceGroup.ApprovalRate : 0;
                
                string riskLevel = "Low Risk";
                if (disparateImpactRatio < 0.8) riskLevel = "Medium Risk";
                if (disparateImpactRatio < 0.6) riskLevel = "High Risk";

                results.Add(new AuditResult
                {
                    DatasetId = datasetId,
                    ProtectedAttribute = protectedAttribute,
                    MetricName = $"Disparate Impact Ratio ({group.GroupName} vs {referenceGroup.GroupName})",
                    MetricValue = Math.Round(disparateImpactRatio, 4),
                    RiskLevel = riskLevel
                });

                results.Add(new AuditResult
                {
                    DatasetId = datasetId,
                    ProtectedAttribute = protectedAttribute,
                    MetricName = $"Approval Rate ({group.GroupName})",
                    MetricValue = Math.Round(group.ApprovalRate, 4),
                    RiskLevel = riskLevel
                });
            }

            return results;
        }
    }
}
