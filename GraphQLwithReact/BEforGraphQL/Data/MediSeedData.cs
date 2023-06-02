using GraphQLwithReact.Entities;
using Microsoft.EntityFrameworkCore;

namespace GraphQLwithReact.Data
{
    public class MediSeedData
    {
        public static void Initialize(IServiceProvider  serviceProvider)
        {
            using (var context = new DbContextMediClass(serviceProvider.GetRequiredService<DbContextOptions<DbContextMediClass>>()))
            {
                if (context.Masjids.Any()) return;

                context.Masjids.AddRange(
                    new Masjid { Id = new Guid(), Name = "SCC center masjid", City="Sarajevo", Country = "BiH" },
                    new Masjid { Id = new Guid(), Name = "BBI center masjid", City = "Sarajevo", Country = "BiH" },
                    new Masjid { Id = new Guid(), Name = "Bingo center masjid", City = "Sarajevo", Country = "BiH" }
                    );
                context.SaveChanges();
            }
         }
    }
}
