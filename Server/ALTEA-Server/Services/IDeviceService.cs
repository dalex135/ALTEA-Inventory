namespace ALTEA_Server.Services
{
    public interface IDeviceService
    {
        Task<List<Device>> GetAllDevices();
        Task<Device> GetDeviceByID(int id);
        Task<bool> SaveDevice(Device device);
        void SaveDevices(List<Device> device);
        Task<bool> UpdateDevice(Device device);
        Task<bool> DeleteDevice(long id);
    }
}