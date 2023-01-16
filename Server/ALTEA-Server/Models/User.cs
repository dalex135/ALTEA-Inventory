namespace ALTEA_Server.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Name { get; set; }
        public string? PhoneNumber { get; set; }
        public string? EmailAddress { get; set; }
        public string? Password { get; set; }
        public UserType UserType { get; set; }

        public static explicit operator User(Task<User?> v)
        {
            throw new NotImplementedException();
        }
    }
}
