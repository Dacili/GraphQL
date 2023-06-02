using GraphQLwithReact.Data;
using GraphQLwithReact.GraphQL.Mutations;
using GraphQLwithReact.GraphQL.Queries;
using GraphQLwithReact.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();


builder.Services.AddScoped<IMasjidService, MasjidService>();

// in memory db
builder.Services.AddDbContext<DbContextMediClass>(
    o => o.UseInMemoryDatabase("MediDbInMemory"));

builder.Services.AddGraphQLServer()
    .AddQueryType<MasjidQueryTypes>()
    .AddMutationType<MasjidMutations>();

var app = builder.Build();

// seed data
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<DbContextMediClass>();
    MediSeedData.Initialize(services);
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.MapGraphQL();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
