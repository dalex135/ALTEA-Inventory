using ALTEA_Server.Models;
using ALTEA_Server.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ALTEA_Server.Controllers
{
    [ApiController]
    [EnableCors("OpenCORSPolicy")]
    [Route("[controller]")]
    public class DonationController : ControllerBase
    {
        private readonly IDonationService _donationService;
        public DonationController(IDonationService donationService)
        {
            _donationService = donationService;
        }

        [HttpDelete("Delete/{id}")]
        public Task<bool> Delete(long id)
        {
            return _donationService.DeleteDonation(id);
        }

        [HttpGet("GetById/{id}")]
        public async Task<ActionResult<Photo>> GetById(int id)
        {
            return Ok(await _donationService.GetDonation(id));
        }

        [HttpPost("SaveInternetDonation")]
        public Task<bool> SaveInternetDonation(InternetDonation internetDonation)
        {
            return _donationService.SaveInterentDonation(internetDonation);

        }

        [HttpPost("SaveFinancialDonation")]
        public Task<bool> SaveFinancialDonation(FinancialDonation financialDonation)
        {
            return _donationService.SaveFinancialDonation(financialDonation);

        }

        [HttpPost("SaveDeviceDonation")]
        public Task<bool> SaveDeviceDonation(DeviceDonation deviceDonation)
        {
            return _donationService.SaveDeviceDonation(deviceDonation);

        }


        [HttpGet("GetAllDonations")]
        public async Task<ActionResult<List<DeviceBrand>>> GetAllBrands()
        {
            return Ok(await _donationService.GetAllDonations());
        }


    }
}
