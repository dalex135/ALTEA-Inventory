using ALTEA_Server.Models;

namespace ALTEA_Server.Services
{
    public interface IUserService
    {
        Task<bool> authenticate(String username, String password);
        Task<bool> DeleteUser(long id);
        Task<List<User>> GetAllUsers();
        Task<List<User>> GetAllRecipientLeaders();
        Task<List<Donor>> GetAllDonors();
        Task<User> GetUserByID(int id);
        Task<User> GetUserByUserName(string username);
        Task<bool> SaveUser(User user);
        //Task<bool> SaveUsers(List<User> users);
        Task<bool> SaveAdmin(Admin admin);
        Task<bool> SaveDonor(Donor donor); 
        Task<bool> SaveRecipientLeader(RecipientLeader recipientLeader);
        Task<bool> UpdateUser(User user);
    }
}