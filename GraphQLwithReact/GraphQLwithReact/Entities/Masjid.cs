namespace GraphQLwithReact.Entities
{
    public class Masjid
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public double? SizeSqm { get; set; }
        public int? CapacityOfPeople { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
    }
}
