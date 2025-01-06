using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace FictionPromptCatalog.Data
{
    public class AppDbContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        
        public AppDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity => { entity.HasIndex(e => e.Email).IsUnique(); });
        }

        public DbSet<Character> Characters { get; set; }
        public DbSet<Prompt> Prompts { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
