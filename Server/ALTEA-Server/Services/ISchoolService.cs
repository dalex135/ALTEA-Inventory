namespace ALTEA_Server.Services
{
    public interface ISchoolService
    {
        void DeleteSchool(School school);
        Task<List<School>> GetAllSchools();
        Task<School> GetSchoolByID(int id);
        Task<bool> SaveSchools(List<School> schools);
        Task<bool> SaveSchool(School school);
        void UpdateSchool(School school);
    }
}