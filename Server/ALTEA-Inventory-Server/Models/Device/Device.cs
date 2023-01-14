using System.ComponentModel.DataAnnotations;

namespace ALTEA_Inventory_Server.Models.Device
{
    public class Device : IDevice
    {
        [Key]
        public int ID { get; set; }
        private string Name { get; set; }
        private string Type { get; set; }
        private string Brand { get; set; }
        private string SerialNumber { get; set; }
    }
}
