using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LebaApi.Models
{
    public class Dataset
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string Name { get; set; } = null!;
        
        public string Description { get; set; } = string.Empty;
        
        public string UploadedBy { get; set; } = null!; // User ID
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
