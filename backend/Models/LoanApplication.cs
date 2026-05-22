using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LebaApi.Models
{
    public class LoanApplication
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string DatasetId { get; set; } = null!;
        
        public int Age { get; set; }
        
        public string Gender { get; set; } = null!;
        
        public string State { get; set; } = null!;
        
        public string Region { get; set; } = null!;
        
        public string EducationLevel { get; set; } = null!;
        
        public string MaritalStatus { get; set; } = null!;
        
        public string EmploymentType { get; set; } = null!;
        
        public string EmployerCategory { get; set; } = null!;
        
        public int YearsEmployed { get; set; }
        
        public decimal MonthlyIncome { get; set; }
        
        public decimal LoanAmount { get; set; }
        
        public string LoanPurpose { get; set; } = null!;
        
        public int BankingHistoryYears { get; set; }
        
        public decimal ExistingDebt { get; set; }
        
        public decimal SavingsBalance { get; set; }
        
        public int CreditScore { get; set; }
        
        public string RepaymentHistory { get; set; } = null!;
        
        public string PhoneType { get; set; } = null!;
        
        public bool InternetAccess { get; set; }
        
        public bool MobileBankingUsage { get; set; }

        public string ApprovalStatus { get; set; } = null!; // "Approved" or "Rejected"
    }
}
