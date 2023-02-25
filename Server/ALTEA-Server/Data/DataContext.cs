

using ALTEA_Server.Models;
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

            //modelBuilder.Entity<Recipient>()
            //    .HasOne(s => s.RecipientLeader)
            //    .WithOne(p => p.Recipient)
            //    .HasForeignKey<User>(s => s.RecipientForeignId);


            //modelBuilder.Entity<Device>()
            //    .HasOne(d => d.Recipient)
            //    .WithMany(s => s.Devices)
            //    .HasForeignKey(s => s.RecipientForeignKey);

        }

        public DbSet<User> Users { get; set; }
        public DbSet<RecipientLeader> RecipientLeaders { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Donor> Donors { get; set; }
        public DbSet<Recipient> Recipients { get; set; }

        public DbSet<DeviceBrand> DeviceBrands { get; set; }
        public DbSet<DeviceType> DeviceTypes { get; set; }

        public DbSet<Donation> Donations { get; set; }
        public DbSet<InternetDonation> InternetDonations { get; set; }
        public DbSet<FinancialDonation> FinancialDonations { get; set; }
        public DbSet<DeviceDonation> DeviceDonations { get; set; }

        public DbSet<Photo> Gallery { get; set; }
        public DbSet<Report> Report { get; set; }

    }
}
