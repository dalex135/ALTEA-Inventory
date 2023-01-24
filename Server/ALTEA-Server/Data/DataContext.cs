

using System.Diagnostics;

namespace ALTEA_Server.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { 
            
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //modelBuilder.Entity<School>()
            //    .HasOne(s => s.Principal)
            //    .WithOne(p => p.School)
            //    .HasForeignKey<User>(s => s.SchoolForeignId);


            //modelBuilder.Entity<Device>()
            //    .HasOne(d => d.School)
            //    .WithMany(s => s.Devices)
            //    .HasForeignKey(s => s.SchoolForeignKey);

        }

        public DbSet<User> Users { get; set; }
        public DbSet<School> Schools { get; set; }
        public DbSet<Device> Devices{ get; set; }
        
        

    }
}
