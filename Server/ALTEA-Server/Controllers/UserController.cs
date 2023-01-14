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

        [HttpGet("GetUser/{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            return Ok(await _userService.GetUserByID(id));
        }

        [HttpGet("GetAllUser")]
        public async Task<ActionResult<List<User>>> GetAllUser()
        {
            return Ok(await _userService.GetAllUsers());
        }

        [HttpPost("SaveUser")]
        public void SaveUser(User user)
        {
            _userService.SaveUser(user);
        }

        [HttpPost("SaveUsers")]
        public void SaveUser(List<User> users)
        {
            _userService.SaveUsers(users);
        }

        [HttpDelete("DeleteUser")]
        public void DeleteUser(User user)
        {
            _userService.DeleteUser(user);
        }

        [HttpPut("UpdateUser")]
        public void UpdateUser(User user)
        {
            _userService.UpdateUser(user);
        }
    }
}
