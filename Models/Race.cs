using System.ComponentModel.DataAnnotations;

namespace Formula1Api.Models;

public class Race
{
    [Key]
    public int Id { get; set; }
    public string Location { get; set; } = "";
    public DateTime Time { get; set; }
    public string Winner { get; set; } = "";
    public int Laps { get; set; }
}