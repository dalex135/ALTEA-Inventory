namespace ALTEA_Server.Services
{
    public interface IDeviceInfoService
    {
        Task<List<DeviceBrand>> GetAllBrands();
        Task<List<DeviceType>> GetAllTypes();
        Task<bool> SaveBrand(DeviceBrand deviceBrand);
        Task<bool> SaveType(DeviceType deviceType);
    }
}