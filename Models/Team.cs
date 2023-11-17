using System.ComponentModel.DataAnnotations;

namespace Formula1Api.Models;

public class Team
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string ImageName { get; set; } = "";
}