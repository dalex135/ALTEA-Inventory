using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ALTEA_Server.Models
{
    public class User
    {
        
        public int Id { get; set; }
        public String? UserName { get; set; }
        public String? Name { get; set; }
        public String? PhoneNumber { get; set; }
        public String? Email { get; set; }
        public String? Password { get; set; }
        public UserType UserType { get; set; }

        public String? configString { get; set; }
        public String? FileString { get; set; }
        public String? Path { get; set; }

    }
    public class Donor : User
    {
        
    }
    public class RecipientLeader : User
    {
        public RecipientLeaderType RecipientLeaderType { get; set; }
    }

    public class Admin : User
    {
    }
}
