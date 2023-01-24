using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ALTEA_Server.Models
{
    public class User
    {
        
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Name { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public UserType UserType { get; set; }
       
    }
}
