using GraphQLwithReact.Data;
using GraphQLwithReact.Entities;
using Microsoft.EntityFrameworkCore;

namespace GraphQLwithReact.Repositories
{
    public class MasjidService: IMasjidService
    {
        private readonly DbContextMediClass dbContextMedi;
        public MasjidService(DbContextMediClass dbContextMedi)
        {
            this.dbContextMedi = dbContextMedi;
        }

        public async Task<List<Masjid>> GetAllMasjidsAsync()
        {
          return await  dbContextMedi.Masjids.ToListAsync();
        }

        public async Task<Masjid> GetMasjidByIdAsync(Guid Id)
        {
            return await dbContextMedi.Masjids.Where(masjid => masjid.Id == Id).FirstOrDefaultAsync();
        }

        public async Task<Masjid> CreateMasjidAsync(Masjid masjid)
        {
            await dbContextMedi.Masjids.AddAsync(masjid);
            //var res =
            await dbContextMedi.SaveChangesAsync();
            return masjid;

        }

        public async Task<Masjid> UpdateMasjidAsync(Masjid masjid)
        {
            if(dbContextMedi.Masjids.Where(masjid1 => masjid1.Id == masjid.Id).FirstOrDefault() != null) { 
            dbContextMedi.Masjids.Update(masjid);
           //var res =
                await dbContextMedi.SaveChangesAsync();
            }
            return masjid;
            //if (res > 0)
            //{
            //    return true;
            //}
            //else return false;
        }

        public async Task<Masjid> DeleteMasjidAsync(Guid id)
        {
            var masjid = dbContextMedi.Masjids.Where(masjid => masjid.Id == id).FirstOrDefault();
        if(masjid != null)
            {
              dbContextMedi.Masjids.Remove(masjid);
              var res=  await dbContextMedi.SaveChangesAsync();
                
                //if (res > 0) return true;
                //return false;
            }
            return masjid;
        }    
    }
}
