using System.Text.Json.Serialization;

namespace ALTEA_Server.Models
{ 
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum UserType
    {
        Admin = 1,
        Principal = 2,
        Sponsor = 3
    }
}
