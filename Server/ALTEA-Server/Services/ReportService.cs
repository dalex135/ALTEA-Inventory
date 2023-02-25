using ALTEA_Server.Data;
using ALTEA_Server.Models;
using System.Drawing;

namespace ALTEA_Server.Services
{
    public class ReportService : IReportService
    {

        private readonly DataContext _dataContext;

        public ReportService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public Task<bool> SaveReport(Report report)
        {
            if (report.FileString != null) {
                String imageFileString = report.FileString.Split(',')[1];
                report.configString = report.FileString.Split(',')[0];
                String extension = report.FileString.Split(";")[0].Split("/")[1];
                byte[] bytes = Convert.FromBase64String(imageFileString);
                Image? image;
                report.RecipientForeignKey = report.RecipientForeignKey == 0 ? null: report.RecipientForeignKey;
                report.DonorForeignKey = report.DonorForeignKey == 0 ? null : report.DonorForeignKey;
                using (MemoryStream ms = new MemoryStream(bytes))
                {
                    image = Image.FromStream(ms);
                    report.FileString = null;

                    _dataContext.Report.Add(report);
                    _dataContext.SaveChanges();

                    Report photoSaved = _dataContext.Report.FirstOrDefault(_report => _report.Id == report.Id)!;

                    photoSaved.Path = Path.Combine("Data", "Reports", report.Id + "." + extension);
                    _dataContext.SaveChanges();
                    image.Save(report.Path);

                }
                return Task.FromResult(true);
            }
            else
            {
                return Task.FromResult(false);
            }
            
        }

        public async Task<List<Report>> GetAllReports(int reportId)
        {
            List<Report> reports = _dataContext.Report.ToList();
            //List<Photo> compressedGallery = new List<Photo>();
            reports.ForEach(report =>
            {
                Image image = Image.FromFile(report.Path);

                using (MemoryStream ms = new MemoryStream())
                {
                    image.Save(ms, image.RawFormat);
                    report.FileString = report.configString + ',' + Convert.ToBase64String(ms.ToArray());

                }

            });

            
            return await _dataContext.Report.Where(report => report.ReportType==(ReportType)reportId).ToListAsync();
        }
    }
}
