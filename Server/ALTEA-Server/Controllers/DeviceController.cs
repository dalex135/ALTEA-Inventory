
using ALTEA_Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ALTEA_Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeviceController : ControllerBase
    {
        private readonly IDeviceService _deviceService;

        public DeviceController(IDeviceService deviceService)
        {
            _deviceService = deviceService;
        }

        [HttpGet("GetDevice/{id}")]
        public async Task<ActionResult<Device>> GetDevice(int id)
        {
            return Ok(await _deviceService.GetDeviceByID(id));
        }

        [HttpGet("GetAllDevice")]
        public async Task<ActionResult<List<Device>>> GetAllDevice()
        {
            return Ok(await _deviceService.GetAllDevices());
        }

        [HttpPost("SaveDevice")]
        public  void SaveDevice(Device device)
        {
            _deviceService.SaveDevice(device);
        }

        [HttpPost("SaveDevices")]
        public  void SaveDevice(List<Device> devices)
        {
            _deviceService.SaveDevices(devices);
        }

        [HttpDelete("DeleteDevice")]
        public  void DeleteDevice(Device device)
        {
            _deviceService.DeleteDevice(device);
        }

        [HttpPut("UpdateDevice")]
        public  void UpdateDevice(Device device)
        {
            _deviceService.UpdateDevice (device);
        }

    }
}