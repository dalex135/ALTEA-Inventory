using Microsoft.Extensions.Hosting;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ALTEA_Server.Models
{
    public class Recipient
    {
        
        public int Id { get; set; }
        public String? Name { get; set; }
        public int? RecipientLeaderForeignKey { get; set; }

        [ForeignKey("RecipientLeaderForeignKey")]
        public User? RecipientLeader { get; set; }
        public String? Email { get; set; }
        public String? PhoneNumber { get; set; }
        public String? Address { get; set; }
        public RecipientType? RecipientType { get; set; }
        public InternetStatus InternetStatus { get; set; }
    }
}
