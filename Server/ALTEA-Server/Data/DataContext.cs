

namespace ALTEA_Server.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { 
            
        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.UseSerialColumns();
        //}

        public DbSet<Device> Devices{ get; set; }
        public DbSet<School> Schools { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
