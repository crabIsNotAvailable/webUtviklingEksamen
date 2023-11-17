using Formula1Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class RaceController : ControllerBase
{
    private readonly Formula1Context context;
    public RaceController(Formula1Context _context)
    {
        context = _context;
    }

    // Team
    [Route("api/races")]
    [HttpGet]
    public async Task<List<Race>> Get()
    {
        List<Race> races = await context.Race.ToListAsync();
        return races;
    }

    [Route("api/races/{id}")]
    [HttpGet]
    public async Task<ActionResult<Race>> Get(int id)
    {
        Race? race = await context.Race.FindAsync(id);
        if (race != null)
        {
            return Ok(race);
        }
        else
        {
            return NotFound();
        }
    }

    [Route("api/races")]
    [HttpPost]
    public async Task<ActionResult<Race>> Post(Race newRace)
    {
        context.Race.Add(newRace);
        await context.SaveChangesAsync();
        return CreatedAtAction("Get", new { id = newRace.Id }, newRace);
    }

    [Route("api/races/{id}")]
    [HttpDelete]
    public async Task<ActionResult<Race>> Delete(int id)
    {
        Race? race = await context.Race.FindAsync(id);
        if (race != null)
        {
            context.Race.Remove(race);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }

    [Route("api/races/{id}")]
    [HttpPut]
    public async Task<ActionResult<Race>> Put(int id, Race editedRace)
    {
        Race? raceToUpdate = await context.Race.FindAsync(id);
        if (raceToUpdate == null)
        {
            return NotFound();
        }
        context.Entry(raceToUpdate).CurrentValues.SetValues(editedRace);
        context.Entry(raceToUpdate).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }
}