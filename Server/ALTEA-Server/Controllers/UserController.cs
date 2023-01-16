using ALTEA_Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ALTEA_Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("Authenticate")]
        public  Task<bool> Authenticate(Object obj)
        {
            return _userService.authenticate(obj);
        }

        [HttpGet("GetByUserName/{username}")]
        public async Task<ActionResult<User>> GetByUserName(string username)
        {
            return Ok(await _userService.GetUserByUserName(username));
        }

        [HttpGet("GetByID/{id}")]
        public async Task<ActionResult<User>> GetByID(int id)
        {
            return Ok(await _userService.GetUserByID(id));
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<User>>> GetAll()
        {
            return Ok(await _userService.GetAllUsers());
        }

        [HttpPost("Save")]
        public void Save(User user)
        {
            _userService.SaveUser(user);
        }

        [HttpPost("SaveAll")]
        public void Save(List<User> users)
        {
            _userService.SaveUsers(users);
        }

        [HttpDelete("Delete")]
        public void Delete(User user)
        {
            _userService.DeleteUser(user);
        }

        [HttpPut("Update")]
        public void Update(User user)
        {
            _userService.UpdateUser(user);
        }
    }
}
