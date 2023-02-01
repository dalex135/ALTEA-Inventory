namespace ALTEA_Server.Services
{
    public interface IUserService
    {
        Task<bool> authenticate(object obj);
        Task<bool> DeleteUser(long id);
        Task<List<User>> GetAllUsers();
        Task<List<User>> GetAllPrincipals();
        Task<User> GetUserByID(int id);
        Task<User> GetUserByUserName(string username);
        Task<bool> SaveUser(User user);
        Task<bool> SaveUsers(List<User> users);
        Task<bool> UpdateUser(User user);
    }
}