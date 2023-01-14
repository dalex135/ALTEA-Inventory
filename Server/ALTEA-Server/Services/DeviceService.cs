using ALTEA_Server.Data;
using ALTEA_Server.Models;
using Microsoft.AspNetCore.Server.IIS.Core;

namespace ALTEA_Server.Services
{
    public class DeviceService : IDeviceService
    {
        private readonly DataContext _dataContext;

        public DeviceService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public  void SaveDevice(Device device)
        {
            var school = _dataContext.Schools.FirstOrDefault(school => school.Id == device.School.Id)!;
            if (school is not null)
            {
                device.School = (School)school;
                
            }
            else
                device.School = null;
            _dataContext.Devices.Add(device);
            _dataContext.SaveChanges();

        }

        public void SaveDevices(List<Device> devices)
        {
            devices.ForEach(device =>
            {
                _dataContext.Devices.Add(device);
                _dataContext.SaveChanges();
            });
            
        }

        public async Task<Device> GetDeviceByID(int id)
        {
            var device = _dataContext.Devices.FirstOrDefaultAsync(d => d.Id == id);
            if (device is not null)
                return await device;
            else
                throw new Exception($"Device with ID '{id}' not found.");
        }

        public async Task<List<Device>> GetAllDevices()
        {
            return await _dataContext.Devices.ToListAsync();
        }

        public void DeleteDevice(Device device)
        {
            var removeDevice =  _dataContext.Devices.FirstOrDefault(d=>d.Id==device.Id);
            if (removeDevice is not null)
                _dataContext.Remove(removeDevice);
                _dataContext.SaveChanges();
        }

        public void UpdateDevice(Device device)
        {
            var updateDevice = _dataContext.Devices.FirstOrDefault(d => d.Id == device.Id)!;
            updateDevice.Description = device.Description;
            updateDevice.SerialNumber = device.SerialNumber;
            updateDevice.Quantity = device.Quantity;
            updateDevice.School = device.School;
            updateDevice.Brand = device.Brand;
            updateDevice.Type = device.Type;
            _dataContext.SaveChanges();
        }
    }
}
