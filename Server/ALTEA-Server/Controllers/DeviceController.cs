
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

        [HttpGet("GetByID/{id}")]
        public async Task<ActionResult<Device>> Get(int id)
        {
            return Ok(await _deviceService.GetDeviceByID(id));
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<Device>>> GetAll()
        {
            return Ok(await _deviceService.GetAllDevices());
        }

        [HttpPost("Save")]
        public  void Save(Device device)
        {
            _deviceService.SaveDevice(device);
        }

        [HttpPost("SaveAll")]
        public  void SaveAll(List<Device> devices)
        {
            _deviceService.SaveDevices(devices);
        }

        [HttpDelete("Delete")]
        public  void Delete(Device device)
        {
            _deviceService.DeleteDevice(device);
        }

        [HttpPut("Update")]
        public  void Update(Device device)
        {
            _deviceService.UpdateDevice (device);
        }

    }
}