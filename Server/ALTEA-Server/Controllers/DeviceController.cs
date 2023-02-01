
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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("GetByID/{id}")]
        public async Task<ActionResult<Device>> Get(int id)
        {
            return Ok(await _deviceService.GetDeviceByID(id));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAll")]
        public async Task<ActionResult<List<Device>>> Get()
        {
            return Ok(await _deviceService.GetAllDevices());
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="device"></param>
        /// <returns></returns>
        [HttpPost("Save")]
        public Task<bool> Save(Device device)
        {
            return _deviceService.SaveDevice(device);
            //return Task.FromResult(true);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="devices"></param>
        [HttpPost("SaveAll")]
        public  void SaveAll(List<Device> devices)
        {
            _deviceService.SaveDevices(devices);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="device"></param>
        [HttpDelete("Delete/{id}")]
        public Task<bool> Delete(long id)
        {
            return _deviceService.DeleteDevice(id);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="device"></param>
        [HttpPut("Update")]
        public Task<bool> Update(Device device)
        {
            return _deviceService.UpdateDevice (device);
        }

    }
}