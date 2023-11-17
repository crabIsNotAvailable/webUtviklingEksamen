using Formula1Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class TeamController : ControllerBase
{
    private readonly Formula1Context context;
    public TeamController(Formula1Context _context)
    {
        context = _context;
    }

    // Team
    [Route("api/teams")]
    [HttpGet]
    public async Task<List<Team>> Get()
    {
        List<Team> teams = await context.Team.ToListAsync();
        return teams;
    }

    [Route("api/teams/{id}")]
    [HttpGet]
    public async Task<ActionResult<Team>> Get(int id)
    {
        Team? team = await context.Team.FindAsync(id);
        if (team != null)
        {
            return Ok(team);
        }
        else
        {
            return NotFound();
        }
    }

    [Route("api/teams")]
    [HttpPost]
    public async Task<ActionResult<Team>> Post(Team newTeam)
    {
        context.Team.Add(newTeam);
        await context.SaveChangesAsync();
        return CreatedAtAction("Get", new { id = newTeam.Id }, newTeam);
    }

    [Route("api/teams/{id}")]
    [HttpDelete]
    public async Task<ActionResult<Team>> Delete(int id)
    {
        Team? team = await context.Team.FindAsync(id);
        if (team != null)
        {
            context.Team.Remove(team);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }
    [Route("api/teams/{id}")]
    [HttpPut]
    public async Task<ActionResult<Team>> Put(int id, Team editedTeam)
    {
        Team? teamToUpdate = await context.Team.FindAsync(id);
        if (teamToUpdate == null)
        {
            return NotFound();
        }
        context.Entry(teamToUpdate).CurrentValues.SetValues(editedTeam);
        context.Entry(teamToUpdate).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }
}