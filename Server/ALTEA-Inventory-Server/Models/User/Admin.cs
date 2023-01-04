using System.ComponentModel.DataAnnotations;

namespace ALTEA_Inventory_Server.Models.User
{
    public class Admin:IUser
    {
        [Key]
        public int ID { get; set; }
        private string Name { get; set; }
        private string EMail { get; set; }
        private string UserName { get; set; }
        private string PhoneNumber { get; set; }
        private string Password { get; set; }

    }
}
