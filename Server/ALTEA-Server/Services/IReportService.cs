namespace ALTEA_Server.Services
{
    public interface IReportService
    {
        Task<List<Report>> GetAllReports(int reportId);
        Task<bool> SaveReport(Report report);
    }
}