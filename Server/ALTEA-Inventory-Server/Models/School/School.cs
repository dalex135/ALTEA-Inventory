using ALTEA_Inventory_Server.Models.Device;
using System.ComponentModel.DataAnnotations;

namespace ALTEA_Inventory_Server.Models.School
{
    public class School
    {
        [Key]
        public int ID { get; set; }
        private string Name { get; set; }
        private string Principal { get; set; }
        private List<IDevice> Devices { get; set; }
        private string EmailAddress { get; set; }
        private string PhoneNumber { get; set; }
    }
}
