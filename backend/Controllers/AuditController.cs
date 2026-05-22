using LebaApi.Data;
using LebaApi.FairnessEngine;
using LebaApi.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace LebaApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuditController : ControllerBase
    {
        private readonly MongoDbContext _context;

        public AuditController(MongoDbContext context)
        {
            _context = context;
        }

        [HttpPost("run")]
        public async Task<IActionResult> RunAudit([FromBody] RunAuditRequest request)
        {
            var dataset = await _context.Datasets.Find(d => d.Id == request.DatasetId).FirstOrDefaultAsync();
            if (dataset == null) return NotFound("Dataset not found");

            var applications = await _context.LoanApplications.Find(a => a.DatasetId == request.DatasetId).ToListAsync();
            
            var results = FairnessCalculator.RunAudit(request.DatasetId, request.ProtectedAttribute, applications);

            if (results.Any())
            {
                await _context.AuditResults.InsertManyAsync(results);
            }

            return Ok(new
            {
                Message = "Audit completed",
                DatasetId = request.DatasetId,
                ProtectedAttribute = request.ProtectedAttribute,
                Results = results
            });
        }

        [HttpGet("results/{datasetId}")]
        public async Task<IActionResult> GetAuditResults(string datasetId)
        {
            var results = await _context.AuditResults.Find(r => r.DatasetId == datasetId).ToListAsync();
            return Ok(results);
        }
    }

    public class RunAuditRequest
    {
        public string DatasetId { get; set; } = null!;
        public string ProtectedAttribute { get; set; } = null!;
    }
}
