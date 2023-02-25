using System.Text.Json.Serialization;

namespace ALTEA_Server.Models
{

    [JsonConverter(typeof(JsonStringEnumConverter))]

    public enum ReportType
    {
        StoriesOfImpact=1,
        BlogsOrNews=2,
        AnnualReport=3,
    }
}
