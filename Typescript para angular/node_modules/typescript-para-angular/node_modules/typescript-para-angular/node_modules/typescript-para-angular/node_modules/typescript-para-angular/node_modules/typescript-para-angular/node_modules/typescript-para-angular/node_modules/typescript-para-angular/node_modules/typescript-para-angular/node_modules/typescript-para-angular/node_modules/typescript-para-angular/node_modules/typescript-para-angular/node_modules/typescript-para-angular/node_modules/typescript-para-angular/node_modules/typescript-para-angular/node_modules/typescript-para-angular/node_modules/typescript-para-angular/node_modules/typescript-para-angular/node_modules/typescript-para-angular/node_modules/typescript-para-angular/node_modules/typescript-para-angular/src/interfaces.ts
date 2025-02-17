type robot = {
    id: number;
    name: string;
};

interface robot2{
    id: number;
    name: string;
}

const bot1: robot = {
    id: 1,
    name: "megaman",

}

const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function(){
        throw new Error("Function not implemented")
    }

}

console.log(bot1);
console.log(bot2);