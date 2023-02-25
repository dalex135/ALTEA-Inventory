using ALTEA_Server.Data;
using ALTEA_Server.Models;
using ImageMagick;
using Magnum.FileSystem;
using System.Drawing;
using Microsoft.AspNetCore.Hosting;

namespace ALTEA_Server.Services
{
    public class GalleryService : IGalleryService
    {
        private readonly DataContext _dataContext;

        public GalleryService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }


        public Task<bool> SavePhoto(Photo photo)
        {
            String imageFileString = photo.FileString.Split(',')[1];
            photo.configString = photo.FileString.Split(',')[0];
            String extension = photo.FileString.Split(";")[0].Split("/")[1];
            byte[] bytes = Convert.FromBase64String(imageFileString);
            Image image;
            using (MemoryStream ms = new MemoryStream(bytes))
            {
                image = Image.FromStream(ms);
                photo.FileString = null;
                
                _dataContext.Gallery.Add(photo);
                _dataContext.SaveChanges();

                Photo photoSaved = _dataContext.Gallery.FirstOrDefault(_photo => _photo.Id == photo.Id)!;

                photoSaved.Path = Path.Combine("Data", "Gallery", photo.Id + "." + extension);
                _dataContext.SaveChanges();
                image.Save(photo.Path);

            }

            return Task.FromResult(true);

        }

        public async Task<List<Photo>> GetGallery(){

            List<Photo> gallery = _dataContext.Gallery.ToList();
            //List<Photo> compressedGallery = new List<Photo>();
            gallery.ForEach(photo =>
            {
                Image image = Image.FromFile(photo.Path);

                using (MemoryStream ms = new MemoryStream())
                {
                    image.Save(ms, image.RawFormat);
                    photo.FileString = photo.configString + ',' + Convert.ToBase64String(ms.ToArray());
                    //photo.FileString = Convert.ToBase64String(ms.ToArray());

                }
                photo.Recipient = _dataContext.Recipients.FirstOrDefault(school => school.Id==photo.RecipientForeignKey);
            });

            return  await _dataContext.Gallery.ToListAsync();
        }

        public async Task<Photo> GetPhoto(int id)
        {
            Photo photo = _dataContext.Gallery.FirstOrDefault(photo => photo.Id == id);
            if (photo is not null)
            {
                Image image = Image.FromFile(photo.Path);

                using (MemoryStream ms = new MemoryStream())
                {
                    image.Save(ms, image.RawFormat);
                    photo.FileString = photo.configString + ',' + Convert.ToBase64String(ms.ToArray());
                    //photo.FileString = Convert.ToBase64String(ms.ToArray());

                }
                photo.Recipient = _dataContext.Recipients.FirstOrDefault(school => school.Id == photo.RecipientForeignKey);
                return photo;
            }
            else
                throw new Exception($"User with ID '{id}' not found.");
        }

        public Task<bool> DeletePhoto(long id)
        {
            var removePhoto= _dataContext.Gallery.FirstOrDefault(photo => photo.Id == id);

            if (removePhoto is not null)
            {
                string Path = removePhoto.Path;
                FileInfo file = new FileInfo(Path);
                if (file.Exists)
                {
                    file.Delete();
                }

                _dataContext.Remove(removePhoto);
                _dataContext.SaveChanges();
                return Task.FromResult(true);
            }
            else
                return Task.FromResult(false);
        }

    }
}
