//using FictionPromptCatalog.Models;
using FictionPromptCatalog.Data;

namespace FictionPromptCatalog.Data
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetByEmail(string email);
        User GetById(int id);
    }
}