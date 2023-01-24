using Microsoft.Extensions.Hosting;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ALTEA_Server.Models
{
    public class School
    {
        
        public int Id { get; set; }
        public string? Name { get; set; }
        public int? PrincipalForeignKey { get; set; }

        [ForeignKey("PrincipalForeignKey")]
        public User? Principal { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
    }
}
