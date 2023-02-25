using ALTEA_Server.Data;
using ALTEA_Server.Models;
using System.Drawing;

namespace ALTEA_Server.Services
{
    public class UserService : IUserService
    {

        private readonly DataContext _dataContext;

        public UserService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public Task<bool> authenticate(String username, String password)
        {
            var user = _dataContext.Users.FirstOrDefault(user => user.UserName == username)!;
            if (user != null)
            {
                if(password == user.Password)
                {
                    return Task.FromResult(true);
                }
            }
            return Task.FromResult(false);
        }

        public Task<bool> SaveUser(User user)
        {
            
            _dataContext.Users.Add(user);
            _dataContext.SaveChanges();
            return Task.FromResult(true);
        }

        public Task<bool> SaveAdmin(Admin admin)
        {
            foreach (User _user in _dataContext.Users.ToList())
            {
                if (_user.UserName == admin.UserName)
                {
                    return Task.FromResult(false);
                }
            }
            
            _dataContext.Admins.Add(admin);
            _dataContext.SaveChanges();
            this.SaveProfilePhoto(admin);
            return Task.FromResult(true);
        }

        public Task<bool> SaveDonor(Donor donor)
        {
            _dataContext.Donors.Add(donor);
            _dataContext.SaveChanges();
            this.SaveProfilePhoto(donor);
            return Task.FromResult(true);
        }
        public Task<bool> SaveRecipientLeader(RecipientLeader recipientLeader)
        {
            _dataContext.RecipientLeaders.Add(recipientLeader);
            _dataContext.SaveChanges();
            this.SaveProfilePhoto(recipientLeader);
            return Task.FromResult(true);
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

        public async Task<List<User>> GetAllRecipientLeaders()
        {
            return await _dataContext.Users.Where(user => user.UserType == UserType.RecipientLeader).ToListAsync();
        }

        public async Task<List<Donor>> GetAllDonors()
        {

            var donors =  _dataContext.Donors.ToList();
            donors.ForEach(donor => {
                if (donor.Path != null) {
                    Image image = Image.FromFile(donor.Path);

                    using (MemoryStream ms = new MemoryStream())
                    {
                        image.Save(ms, image.RawFormat);
                        donor.FileString = donor.configString + ',' + Convert.ToBase64String(ms.ToArray());
                        //photo.FileString = Convert.ToBase64String(ms.ToArray());

                    }
                }
                

            });

            return donors;

            

        }
        

        public Task<bool> DeleteUser(long id)
        {
            var removeUser = _dataContext.Users.FirstOrDefault(d => d.Id == id);
            this.DeleteProfilePhoto(removeUser);


            if (removeUser is not null)
            {
                _dataContext.Recipients.ToList().ForEach(school =>
                {
                    if (school.RecipientLeaderForeignKey == id)
                    {
                        school.RecipientLeaderForeignKey = null;
                        _dataContext.SaveChanges();
                    }
                });
                _dataContext.Users.Remove(removeUser);
                _dataContext.SaveChanges();
                return Task.FromResult(true);
            }
            else
                return Task.FromResult(false);

        }

        public Task<bool> UpdateUser(User user)
        {
            
            var updateUser = _dataContext.Users.FirstOrDefault(d => d.Id == user.Id)!;
            updateUser.Name = user.Name;
            updateUser.PhoneNumber = user.PhoneNumber;
            updateUser.Email = user.Email;
            updateUser.Password = user.Password;
            updateUser.UserName = user.UserName;
            _dataContext.SaveChanges();
            return Task.FromResult(true);
            
        }

        public User SaveProfilePhoto(User user)
        {
            if (user.FileString != ""&& user.FileString != null)
            {
                var user_ = _dataContext.Users.FirstOrDefault(u => u.UserName == user.UserName)!;

                String imageFileString = user.FileString.Split(',')[1];
                user.configString = user.FileString.Split(',')[0];
                String extension = user.FileString.Split(";")[0].Split("/")[1];
                user.FileString = null;
                byte[] bytes = Convert.FromBase64String(imageFileString);
                Image image;
                using (MemoryStream ms = new MemoryStream(bytes))
                {
                    image = Image.FromStream(ms);
                    user.Path = Path.Combine("Data", "ProfilePictures", user.Id + "." + extension);
                    image.Save(user.Path);
                    _dataContext.SaveChanges();
                }
            }
            
            return user;
        }

        public void DeleteProfilePhoto(User user)
        {
            

            if (user is not null)
            {
                string Path = user.Path;
                FileInfo file = new FileInfo(Path);
                if (file.Exists)
                {
                    file.Delete();
                }

            }
           
        }
    }
}
