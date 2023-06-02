using GraphQLwithReact.Entities;
using Microsoft.EntityFrameworkCore;

namespace GraphQLwithReact.Data
{
    public class DbContextMediClass : DbContext
    {
        public DbContextMediClass(DbContextOptions<DbContextMediClass> options) : base(options)
        {

        }

        //public DbContextMediClass(DbContextOptions options) : base(options)
        //{
        //}

        public DbSet<Masjid> Masjids { get; set; }
    }
}
