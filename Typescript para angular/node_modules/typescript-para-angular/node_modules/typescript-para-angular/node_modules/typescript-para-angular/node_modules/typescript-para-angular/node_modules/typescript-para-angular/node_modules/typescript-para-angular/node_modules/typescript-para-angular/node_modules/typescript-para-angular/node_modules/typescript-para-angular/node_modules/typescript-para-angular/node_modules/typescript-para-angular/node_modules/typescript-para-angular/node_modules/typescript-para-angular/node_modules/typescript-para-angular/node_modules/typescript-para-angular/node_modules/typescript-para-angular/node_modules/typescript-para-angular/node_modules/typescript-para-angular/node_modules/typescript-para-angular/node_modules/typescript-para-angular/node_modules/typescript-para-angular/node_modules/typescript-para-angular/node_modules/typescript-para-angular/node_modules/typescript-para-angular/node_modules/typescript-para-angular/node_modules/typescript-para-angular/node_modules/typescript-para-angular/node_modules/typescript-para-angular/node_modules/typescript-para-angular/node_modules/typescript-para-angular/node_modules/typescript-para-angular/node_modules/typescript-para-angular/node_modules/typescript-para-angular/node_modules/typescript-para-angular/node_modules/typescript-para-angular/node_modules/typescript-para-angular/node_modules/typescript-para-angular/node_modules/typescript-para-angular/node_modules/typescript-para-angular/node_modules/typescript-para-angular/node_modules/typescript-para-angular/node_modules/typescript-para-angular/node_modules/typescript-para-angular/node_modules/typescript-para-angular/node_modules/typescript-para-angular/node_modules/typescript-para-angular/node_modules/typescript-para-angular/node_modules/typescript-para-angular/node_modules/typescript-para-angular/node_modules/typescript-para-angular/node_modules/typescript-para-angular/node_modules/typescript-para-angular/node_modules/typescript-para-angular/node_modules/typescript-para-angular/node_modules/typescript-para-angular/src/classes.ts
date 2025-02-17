class Character{
    name?: string;
    stregth:number;
    Skill: number;

    constructor(stregth: number, Skill: number){
      
        this.stregth = stregth;
        this.Skill = Skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`)
    }
}


const p1 = new Character(10, 98);
p1.attack();
