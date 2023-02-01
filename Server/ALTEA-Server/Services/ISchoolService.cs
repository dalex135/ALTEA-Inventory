namespace ALTEA_Server.Services
{
    public interface ISchoolService
    {
        Task<bool> DeleteSchool(long id);
        Task<List<School>> GetAllSchools();
        Task<School> GetSchoolByID(int id);
        Task<bool> SaveSchools(List<School> schools);
        Task<bool> SaveSchool(School school);
        Task<bool> UpdateSchool(School school);
    }
}