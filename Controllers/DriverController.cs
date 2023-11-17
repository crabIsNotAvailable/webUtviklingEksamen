using Formula1Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class DriverController : ControllerBase
{
    private readonly Formula1Context context;
    public DriverController(Formula1Context _context)
    {
        context = _context;
    }

    [Route("api/drivers")]
    [HttpGet]
    public async Task<List<Driver>> Get()
    {
        List<Driver> drivers = await context.Driver.ToListAsync();
        return drivers;
    }
    [Route("api/drivers/{id}")]
    [HttpGet]
    public async Task<ActionResult<Driver>> Get(int id)
    {
        Driver? driver = await context.Driver.FindAsync(id);
        if (driver != null)
        {
            return Ok(driver);
        }
        else
        {
            return NotFound();
        }
    }

    [Route("api/drivers")]
    [HttpPost]
    public async Task<ActionResult<Driver>> Post(Driver newDriver)
    {
        context.Driver.Add(newDriver);
        await context.SaveChangesAsync();
        return CreatedAtAction("Get", new { id = newDriver.Id }, newDriver);
    }

    [Route("api/drivers/{id}")]
    [HttpDelete]
    public async Task<ActionResult<Driver>> Delete(int id)
    {
        Driver? driver = await context.Driver.FindAsync(id);
        if (driver != null)
        {
            context.Driver.Remove(driver);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }

    [Route("api/drivers/{id}")]
    [HttpPut]
    public async Task<ActionResult<Driver>> Put(int id, Driver editedDriver)
    {
        Driver? driverToUpdate = await context.Driver.FindAsync(id);
        if (driverToUpdate == null)
        {
            return NotFound();
        }
        context.Entry(driverToUpdate).CurrentValues.SetValues(editedDriver);
        context.Entry(driverToUpdate).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }
}