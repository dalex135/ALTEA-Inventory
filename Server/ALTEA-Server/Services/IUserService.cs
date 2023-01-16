namespace ALTEA_Server.Services
{
    public interface IUserService
    {
        Task<bool> authenticate(object obj);
        void DeleteUser(User user);
        Task<List<User>> GetAllUsers();
        Task<User> GetUserByID(int id);
        Task<User> GetUserByUserName(string username);
        void SaveUser(User user);
        void SaveUsers(List<User> users);
        void UpdateUser(User user);
    }
}