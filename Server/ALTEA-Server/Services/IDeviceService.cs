namespace ALTEA_Server.Services
{
    public interface IDeviceService
    {
        Task<List<Device>> GetAllDevices();
        Task<Device> GetDeviceByID(int id);
        void SaveDevice(Device device);
        void SaveDevices(List<Device> device);
        void UpdateDevice(Device device);
        void DeleteDevice(Device device);
    }
}