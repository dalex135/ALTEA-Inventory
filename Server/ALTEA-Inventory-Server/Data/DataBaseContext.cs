using ALTEA_Inventory_Server.Models.Device;
using ALTEA_Inventory_Server.Models.School;
using ALTEA_Inventory_Server.Models.User;
using Microsoft.EntityFrameworkCore;

namespace ALTEA_Inventory_Server.Data
{
    public class DataBaseContext: DbContext
    {
        public DbSet<Device> Devices { get; set; }
        public DbSet<School> Schools { get; set; }
        public DbSet<Admin> Users { get; set; }

        public DataBaseContext(DbContextOptions<DataBaseContext> options): base(options) { }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.UseSerialColumns();
        }
    }
}
