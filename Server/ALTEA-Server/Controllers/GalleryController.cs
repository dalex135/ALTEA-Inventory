using ALTEA_Server.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ALTEA_Server.Controllers
{
    [ApiController]
    [EnableCors("OpenCORSPolicy")]
    [Route("[controller]")]
    public class GalleryController : ControllerBase
    {
        private readonly IGalleryService _galleryService;

        public GalleryController(IGalleryService galleryService)
        {
            _galleryService = galleryService;
        }

        [HttpPost("Save")]
        public Task<bool> Save(Photo photo)
        {
            return _galleryService.SavePhoto(photo);
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<Photo>>> GetAll()
        {
            return Ok(await _galleryService.GetGallery());
        }

        [HttpGet("GetById/{id}")]
        public async Task<ActionResult<Photo>> GetById(int id)
        {
            return Ok(await _galleryService.GetPhoto(id));
        }

        [HttpDelete("Delete/{id}")]
        public Task<bool> Delete(long id)
        {
            return _galleryService.DeletePhoto(id);
        }
    }
}
