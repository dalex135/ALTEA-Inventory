namespace ALTEA_Server.Services
{
    public interface IUserService
    {
        void DeleteUser(User user);
        Task<List<User>> GetAllUsers();
        Task<User> GetUserByID(int id);
        void SaveUser(User user);
        void SaveUsers(List<User> users);
        void UpdateUser(User user);
    }
}