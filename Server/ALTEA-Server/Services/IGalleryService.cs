using ALTEA_Server.Data;

namespace ALTEA_Server.Services
{
    public interface IGalleryService
    {
        Task<bool> SavePhoto(Photo photo);

        Task<List<Photo>> GetGallery();

        Task<Photo> GetPhoto(int id);

        public Task<bool> DeletePhoto(long id);
    }
}