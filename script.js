
document.querySelector(".heading").innerHTML = "Loading Winner...";

setTimeout(() => {
    // Generate random numbers for both players
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    
    document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

    // Determine the winner and update the heading
    if (randomNumber1 > randomNumber2) {
        document.querySelector(".heading").innerHTML = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector(".heading").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector(".heading").innerHTML = "It's a Draw!";
    }
}, 1000); // 2000ms delay before starting the game logic
