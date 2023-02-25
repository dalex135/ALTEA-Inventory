namespace ALTEA_Server.Services
{
    public interface IDonationService
    {
        Task<List<DeviceDonation>> GetAllDeviceDonations();
        Task<List<Donation>> GetAllDonations();
        Task<Donation> GetDonation(int ID);
        Task<List<FinancialDonation>> GetAllFinancialDonations();
        Task<List<InternetDonation>> GetAllInternetDonations();
        Task<bool> SaveDeviceDonation(DeviceDonation deviceDonation);
        Task<bool> SaveFinancialDonation(FinancialDonation FinanacialDonation);
        Task<bool> SaveInterentDonation(InternetDonation internetDonation);
        Task<bool> DeleteDonation(long id);

    }
}