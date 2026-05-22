using LebaApi.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace LebaApi.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetConnectionString("MongoDb"));
            _database = client.GetDatabase(configuration["DatabaseName"] ?? "LebaDb");
        }

        public IMongoCollection<User> Users => _database.GetCollection<User>("Users");
        public IMongoCollection<Dataset> Datasets => _database.GetCollection<Dataset>("Datasets");
        public IMongoCollection<LoanApplication> LoanApplications => _database.GetCollection<LoanApplication>("LoanApplications");
        public IMongoCollection<AuditResult> AuditResults => _database.GetCollection<AuditResult>("AuditResults");
    }
}
