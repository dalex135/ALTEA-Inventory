namespace ALTEA_Server.Services
{
    public interface IRecipientService
    {
        Task<bool> DeleteRecipient(long id);
        Task<List<Recipient>> GetAllRecipients();
        Task<Recipient> GetRecipientByID(int id);
        Task<bool> SaveRecipients(List<Recipient> schools);
        Task<bool> SaveRecipient(Recipient school);
        Task<bool> UpdateRecipient(Recipient school);
    }
}