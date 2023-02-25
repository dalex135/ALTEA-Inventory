using System.ComponentModel.DataAnnotations.Schema;

namespace ALTEA_Server.Models
{
    public class Donation
    {
        public int Id { get; set; }
        public IsDonated IsDonated { get; set; }
        public int? Year { get; set; }
        public String? Description { get; set; }
        public int? RecipientForeignKey { get; set; }


        [ForeignKey("RecipientForeignKey")]
        public Recipient? Recipient { get; set; }
        public int? DonorForeignKey { get; set; }

        [ForeignKey("DonorForeignKey")]
        public User? Donor { get; set; }
        public DonationType DonationType { get; set; }

        public float? Contribution { get; set; }

    }

    public class InternetDonation : Donation
    {
    }

    public class FinancialDonation : Donation
    {
    }

    public class DeviceDonation : Donation
    {
        public int? DeviceBrandForeignKey { get; set; }

        [ForeignKey("DeviceBrandForeignKey")]
        public DeviceBrand? DeviceBrand { get; set; }

        public int? DeviceTypeForeignKey { get; set; }

        [ForeignKey("DeviceTypeForeignKey")]
        public DeviceType? DeviceType { get; set; }

        public int? Quantity { get; set; }
        public String? SerialNumber { get; set; }
        public String? Model { get; set; }

    }
}
