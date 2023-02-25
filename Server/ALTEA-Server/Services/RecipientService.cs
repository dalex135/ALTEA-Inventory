using ALTEA_Server.Data;
using ALTEA_Server.Models;

namespace ALTEA_Server.Services
{
    public class RecipientService : IRecipientService
    {
        private readonly DataContext _dataContext;

        public RecipientService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public Task<bool> SaveRecipient(Recipient school)
        {
            var principal = _dataContext.RecipientLeaders.FirstOrDefault(user => user.Id == school.RecipientLeaderForeignKey)!;
            if (principal is not null) {
                school.RecipientLeader = (User)principal;
            }
            else
            {
                school.RecipientLeaderForeignKey = null;
                school.RecipientLeader = null;
            }
            _dataContext.Recipients.Add(school);
            _dataContext.SaveChanges();
            return Task.FromResult(true);

        }

        public Task<bool> SaveRecipients(List<Recipient> schools)
        {

            schools.ForEach(school =>
            {
                _dataContext.Recipients.Add(school);
                _dataContext.SaveChanges();
            });
            return Task.FromResult(true);

        }

        public async Task<Recipient> GetRecipientByID(int id)
        {

            var school = _dataContext.Recipients.FirstOrDefaultAsync(s => s.Id == id);
            if (school is not null)
                return await school;
            else
                throw new Exception($"Recipient with ID '{id}' not found.");
        }

        public async Task<List<Recipient>> GetAllRecipients()
        {
            return await _dataContext.Recipients.ToListAsync();
        }

        public Task<bool> DeleteRecipient(long id)
        {
            var removeRecipient = _dataContext.Recipients.FirstOrDefault(school => school.Id == id);
            
            if (removeRecipient is not null) {
               
                _dataContext.Remove(removeRecipient);
                _dataContext.SaveChanges();

                return Task.FromResult(true);
            }
            else return Task.FromResult(false);
        }

        public Task<bool> UpdateRecipient(Recipient school)
        {
            var updateRecipient = _dataContext.Recipients.FirstOrDefault(d => d.Id == school.Id)!;
            updateRecipient.Name = school.Name;
            updateRecipient.PhoneNumber = school.PhoneNumber;
            updateRecipient.RecipientLeader = school.RecipientLeader;
            updateRecipient.Email = school.Email;
            updateRecipient.Address = school.Address;
            _dataContext.SaveChanges();
            return Task.FromResult(true);
        }
    }
}
