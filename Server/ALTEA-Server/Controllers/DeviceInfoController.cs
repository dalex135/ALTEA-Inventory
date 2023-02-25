using ALTEA_Server.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ALTEA_Server.Controllers
{
    [ApiController]
    [EnableCors("OpenCORSPolicy")]
    [Route("[controller]")]
    public class DeviceInfoController : ControllerBase
    {
        private readonly IDeviceInfoService _deviceInfoService;

        public DeviceInfoController(IDeviceInfoService deviceInfoService)
        {
            _deviceInfoService = deviceInfoService;
        }

        [HttpPost("SaveBrand")]
        public Task<bool> SaveBrand(DeviceBrand deviceBrand)
        {
            return _deviceInfoService.SaveBrand(deviceBrand);

        }

        [HttpPost("SaveType")]
        public Task<bool> SaveType(DeviceType deviceType)
        {
            return _deviceInfoService.SaveType(deviceType);

        }

        [HttpGet("GetAllBrands")]
        public async Task<ActionResult<List<DeviceBrand>>> GetAllBrands()
        {
            return Ok(await _deviceInfoService.GetAllBrands());
        }

        [HttpGet("GetAllTypes")]
        public async Task<ActionResult<List<DeviceType>>> GetAllTypes()
        {
            return Ok(await _deviceInfoService.GetAllTypes());
        }
    }
}
