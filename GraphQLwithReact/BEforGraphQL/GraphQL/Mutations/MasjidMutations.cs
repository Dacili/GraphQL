using GraphQLwithReact.Entities;
using GraphQLwithReact.Repositories;

namespace GraphQLwithReact.GraphQL.Mutations
{
    public class MasjidMutations
    {
        public async Task<Masjid> CreateMasjidAsync([Service] IMasjidService masjidService, Masjid masjid)
        {
            return await masjidService.CreateMasjidAsync(masjid);
        }
        public async Task<Masjid> UpdateMasjidAsync([Service] IMasjidService masjidService, Masjid masjid)
        {
            return await masjidService.UpdateMasjidAsync(masjid);
        }
   
        public async Task<Masjid> DeleteMasjidAsync([Service] IMasjidService masjidService, Guid id)
        {
            return await masjidService.DeleteMasjidAsync(id);
        }
    }
}
