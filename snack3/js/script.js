class Team{
    constructor(name, points, fouls) {
        this.name = name;
        this.points = points;
        this.faults = fouls;
    }
}

const teamArray=[
    new Team ("Juventus",0,0),
    new Team ("Milan",0,0),
    new Team ("Empoli",0,0),
    new Team ("Cagliari",0,0),
    new Team ("Catania",0,0),
    new Team ("Torino",0,0),
    new Team ("Atalanta",0,0),
];

teamArray.forEach( (team)=>{
    team.points=getRnd(0,100);
    team.faults=getRnd(0,100);
} );


console.log(teamArray);

function getRnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}