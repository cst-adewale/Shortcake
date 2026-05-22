using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LebaApi.Models
{
    public class AuditResult
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string DatasetId { get; set; } = null!;
        
        public string ProtectedAttribute { get; set; } = null!;
        
        public string MetricName { get; set; } = null!;
        
        public double MetricValue { get; set; }
        
        public string RiskLevel { get; set; } = null!; // "Low Risk", "Medium Risk", "High Risk"
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
