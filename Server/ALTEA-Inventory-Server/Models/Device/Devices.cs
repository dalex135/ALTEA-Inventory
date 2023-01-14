using System.ComponentModel.DataAnnotations;

namespace ALTEA_Inventory_Server.Models.Device
{
    public class Devices:IDevice
    {
        [Key]
        public int ID { get; set; }
        private string Name { get; set; } 
        private string Type { get; set; }
        private string Brand { get; set; }
        private string Quantity { get; set; }
    }
}
