using System.Text.Json.Serialization;

namespace ALTEA_Server.Models
{ 
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum UserType
    {
        Admin = 1,
        RecipientLeader = 2,
        Donor = 3
    }

    [JsonConverter(typeof(JsonStringEnumConverter))]

    public enum RecipientLeaderType
    {
        Principal = 1,
        Priest = 2,
        ChiefOfficer = 3
    }

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DonorType
    {
        Internet = 1,
        Device = 2,
        Financial = 3

    }
}
