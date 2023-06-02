using GraphQLwithReact.Entities;
using GraphQLwithReact.Repositories;

namespace GraphQLwithReact.GraphQL.Queries
{
    public class MasjidQueryTypes
    {
        public async Task<List<Masjid>> GetAllMasjidsAsync([Service] IMasjidService masjidService)
        {
            return await masjidService.GetAllMasjidsAsync();
        }

        public async Task<Masjid> GetMasjidByIdAsync([Service] IMasjidService masjidService, Guid id)
        {
            return await masjidService.GetMasjidByIdAsync(id);
        }
    }
}
