using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using System.Text.Json.Serialization;

namespace ALTEA_Server.Models
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DonationType
    {
        Internet = 1,
        Financial = 2,
        Devices = 3
    }

    public enum IsDonated
    {
        Yes = 1,
        No = 2
    }
}
