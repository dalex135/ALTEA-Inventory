using System.Globalization;

namespace ALTEA_Server.Models
{
    public class Device
    {

        public int Id { get; set; }
        public string? Description { get; set; }
        public string? SerialNumber { get; set; }
        public string? Type { get; set; }
        public string? Brand { get; set; }
        public int? Quantity { get; set; }
        public School? School { get; set; }

    }
}
