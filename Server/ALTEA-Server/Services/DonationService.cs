using ALTEA_Server.Data;
using ALTEA_Server.Models;

namespace ALTEA_Server.Services
{
    public class DonationService : IDonationService
    {
        private readonly DataContext _dataContext;

        public DonationService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<Donation> GetDonation(int id)
        {
            Donation donation = _dataContext.Donations.FirstOrDefault(donation => donation.Id == id)!;

            if (donation is not null) {
                
                donation.Recipient = _dataContext.Recipients.FirstOrDefault(recipient => recipient.Id == donation.RecipientForeignKey)!;
                donation.Donor = _dataContext.Donors.FirstOrDefault(donor => donor.Id == donation.DonorForeignKey)!;

                return donation;
            }
                
            else
                return null;
        }

        public Task<bool> SaveInterentDonation(InternetDonation internetDonation)
        {
            _dataContext.InternetDonations.Add(internetDonation);
            var recipient = _dataContext.Recipients.FirstOrDefault(recipient => recipient.Id == internetDonation.RecipientForeignKey);
            if (internetDonation.IsDonated == IsDonated.Yes)
            {
                recipient.InternetStatus = InternetStatus.Possess;
            }
            else
            {
                recipient.InternetStatus = InternetStatus.Expect;
            }
            _dataContext.SaveChanges();
            return Task.FromResult(true);
        }
        public Task<bool> SaveFinancialDonation(FinancialDonation FinanacialDonation)
        {
            _dataContext.FinancialDonations.Add(FinanacialDonation);
            _dataContext.SaveChanges();
            return Task.FromResult(true);
        }

        public Task<bool> SaveDeviceDonation(DeviceDonation deviceDonation)
        {
            _dataContext.DeviceDonations.Add(deviceDonation);
            _dataContext.SaveChanges();
            return Task.FromResult(true);
        }

        public async Task<List<DeviceDonation>> GetAllDeviceDonations()
        {
            return await _dataContext.DeviceDonations.ToListAsync();
        }

        public async Task<List<FinancialDonation>> GetAllFinancialDonations()
        {
            return await _dataContext.FinancialDonations.ToListAsync();
        }

        public async Task<List<InternetDonation>> GetAllInternetDonations()
        {
            return await _dataContext.InternetDonations.ToListAsync();
        }

        public async Task<List<Donation>> GetAllDonations()
        {
            return await _dataContext.Donations.ToListAsync();
        }

        public Task<bool> DeleteDonation(long id)
        {
            var removeDonation = _dataContext.Donations.FirstOrDefault(donations => donations.Id == id);

            if (removeDonation is not null)
            {
               
                _dataContext.Donations.Remove(removeDonation);
                _dataContext.SaveChanges();
                return Task.FromResult(true);
            }
            else
                return Task.FromResult(false);
        }
    }
}
