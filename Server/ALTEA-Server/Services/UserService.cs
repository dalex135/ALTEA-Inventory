using ALTEA_Server.Data;

namespace ALTEA_Server.Services
{
    public class UserService : IUserService
    {

        private readonly DataContext _dataContext;

        public UserService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public Task<bool> authenticate(Object obj)
        {
            return Task.FromResult(true);
        }

        public void SaveUser(User user)
        {
            _dataContext.Users.Add(user);
            _dataContext.SaveChanges();

        }

        public void SaveUsers(List<User> users)
        {
            users.ForEach(user =>
            {
                _dataContext.Users.Add(user);
                _dataContext.SaveChanges();
            });

        }
        public async Task<User> GetUserByUserName(string username)
        {

            var user = _dataContext.Users.FirstOrDefaultAsync(s => s.UserName == username)!;
            if (user is not null)
                return await user;
            else
                return null;
        }
        public async Task<User> GetUserByID(int id)
        {

            var user = _dataContext.Users.FirstOrDefaultAsync(s => s.Id == id);
            if (user is not null)
                return await user;
            else
                throw new Exception($"User with ID '{id}' not found.");
        }

        public async Task<List<User>> GetAllUsers()
        {
            return await _dataContext.Users.ToListAsync();
        }

        public void DeleteUser(User user)
        {
            var removeUser = _dataContext.Users.FirstOrDefault(d => d.Id == user.Id);
            if (removeUser is not null)
                _dataContext.Remove(removeUser);
                _dataContext.SaveChanges();
        }

        public void UpdateUser(User user)
        {
            var updateUser = _dataContext.Users.FirstOrDefault(d => d.Id == user.Id)!;
            updateUser.Name = user.Name;
            updateUser.PhoneNumber = user.PhoneNumber;
            updateUser.EmailAddress = user.EmailAddress;
            updateUser.Password = user.Password;
            _dataContext.SaveChanges();
        }
    }
}
