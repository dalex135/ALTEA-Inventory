using ALTEA_Server.Data;
using ALTEA_Server.Models;

namespace ALTEA_Server.Services
{
    public class SchoolService : ISchoolService
    {
        private readonly DataContext _dataContext;

        public SchoolService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public Task<bool> SaveSchool(School school)
        {
            var principal = _dataContext.Users.FirstOrDefault(user => user.Id == school.PrincipalForeignKey)!;
            if (principal is not null) {
                school.Principal = (User)principal;
            }
            else
            {
                school.PrincipalForeignKey = null;
                school.Principal = null;
            }
            _dataContext.Schools.Add(school);
            _dataContext.SaveChanges();
            return Task.FromResult(true);

        }

        public Task<bool> SaveSchools(List<School> schools)
        {

            schools.ForEach(school =>
            {
                _dataContext.Schools.Add(school);
                _dataContext.SaveChanges();
            });
            return Task.FromResult(true);

        }

        public async Task<School> GetSchoolByID(int id)
        {

            var school = _dataContext.Schools.FirstOrDefaultAsync(s => s.Id == id);
            if (school is not null)
                return await school;
            else
                throw new Exception($"School with ID '{id}' not found.");
        }

        public async Task<List<School>> GetAllSchools()
        {
            return await _dataContext.Schools.ToListAsync();
        }

        public Task<bool> DeleteSchool(long id)
        {
            var removeSchool = _dataContext.Schools.FirstOrDefault(school => school.Id == id);
            
            if (removeSchool is not null) {
                _dataContext.Devices.ToList().ForEach(device =>
                {
                    if (device.SchoolForeignKey == id)
                    {
                        device.SchoolForeignKey = null;
                        _dataContext.SaveChanges();
                    }
                });
                _dataContext.Remove(removeSchool);
                _dataContext.SaveChanges();

                return Task.FromResult(true);
            }
            else return Task.FromResult(false);
        }

        public Task<bool> UpdateSchool(School school)
        {
            var updateSchool = _dataContext.Schools.FirstOrDefault(d => d.Id == school.Id)!;
            updateSchool.Name = school.Name;
            updateSchool.PhoneNumber = school.PhoneNumber;
            updateSchool.Principal = school.Principal;
            updateSchool.Email = school.Email;
            updateSchool.Address = school.Address;
            _dataContext.SaveChanges();
            return Task.FromResult(true);
        }
    }
}
