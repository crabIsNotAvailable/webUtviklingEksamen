#nullable disable
using Microsoft.EntityFrameworkCore;

public class Formula1Context : DbContext
{
    public Formula1Context(DbContextOptions<Formula1Context> options) : base(options) { }

    public DbSet<Formula1Api.Models.Driver> Driver { get; set; }
    public DbSet<Formula1Api.Models.Team> Team { get; set; }
    public DbSet<Formula1Api.Models.Race> Race { get; set; }
}