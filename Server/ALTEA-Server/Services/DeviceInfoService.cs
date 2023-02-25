using ALTEA_Server.Data;
using ALTEA_Server.Models;

namespace ALTEA_Server.Services
{
    public class DeviceInfoService : IDeviceInfoService
    {

        private readonly DataContext _dataContext;

        public DeviceInfoService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public Task<bool> SaveBrand(DeviceBrand deviceBrand)
        {
            _dataContext.DeviceBrands.Add(deviceBrand);
            _dataContext.SaveChanges();
            return Task.FromResult(true);
        }
        public Task<bool> SaveType(DeviceType deviceType)
        {
            _dataContext.DeviceTypes.Add(deviceType);
            _dataContext.SaveChanges();
            return Task.FromResult(true);
        }

        public async Task<List<DeviceBrand>> GetAllBrands()
        {
            return await _dataContext.DeviceBrands.ToListAsync();
        }

        public async Task<List<DeviceType>> GetAllTypes()
        {
            return await _dataContext.DeviceTypes.ToListAsync();
        }
    }
}
