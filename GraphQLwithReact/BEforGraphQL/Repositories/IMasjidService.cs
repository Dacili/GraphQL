using GraphQLwithReact.Entities;

namespace GraphQLwithReact.Repositories
{
    public interface IMasjidService
    {
        public Task<List<Masjid>> GetAllMasjidsAsync();
        public Task<Masjid> GetMasjidByIdAsync(Guid Id);
        public Task<Masjid> CreateMasjidAsync(Masjid masjid);
        public Task<Masjid> UpdateMasjidAsync(Masjid masjid);
        public Task<Masjid> DeleteMasjidAsync(Guid Id);

    }
}
