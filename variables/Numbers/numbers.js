//* This confirms that the javascript is working
//alert("numbers")

let playerScore = 0;

console.log(playerScore);

playerScore = playerScore + 5;

console.log(playerScore);

let bossHealth = 1000;
let attack = 50;

document.writeln("Boss Health = " + bossHealth );

bossHealth - bossHealth - 1000;

function CheckHealth(){
    if(bossHealth == 0){
    alert("Boss is Dead!!!")
    document.writeln("Boss is...\n super dead.")

    }else{
        document.writeln("\nBoss is not dead. Keep fighting")
    }
}

CheckHealth();