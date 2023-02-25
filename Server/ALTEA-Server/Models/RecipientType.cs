using System.Text.Json.Serialization;

namespace ALTEA_Server.Models
{
    [JsonConverter(typeof(JsonStringEnumConverter))]

    public enum RecipientType
    {
        School=1,
        EducationalOffice=2,
        Church=3,
        Temple=4,
    }

    public enum InternetStatus
    {
        Possess = 1,
        NotPossess = 2,
        Expect = 3
    }
}