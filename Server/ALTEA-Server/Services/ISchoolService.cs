namespace ALTEA_Server.Services
{
    public interface ISchoolService
    {
        void DeleteSchool(School school);
        Task<List<School>> GetAllSchools();
        Task<School> GetSchoolByID(int id);
        void SaveSchools(List<School> schools);
        void SaveSchool(School school);
        void UpdateSchool(School school);
    }
}