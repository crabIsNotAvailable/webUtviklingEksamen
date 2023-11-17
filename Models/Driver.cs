using System.ComponentModel.DataAnnotations;

namespace Formula1Api.Models;

public class Driver
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Team { get; set; } = "";
    public string ImageName { get; set; } = "";
}