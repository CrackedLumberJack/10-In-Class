const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player1Img = new Image();
player1Img.src = "images/Witch1.png";

const player2Img = new Image();
player2Img.src = "images/Witch1.png";

let player =  {
    x: 50,
    y: 100
};

let comp = {
    x: 50,
    y: 200
};


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // Draws finish line
    ctx.fillRect(750, 0, 10, canvas.height);

    // Draws the Player on screen
    ctx.drawImage(player1Img, player.x, player.y);

    // Draws the Computer on screen
    ctx.drawImage(player2Img, comp.x, comp.y);
}

function update() {
    if(player.x > 750 && comp.x < player.x) {
        ctx.font = "50px serif"
        ctx.drawText("You Win", 200, 40);
        cancelAnimationFrame(gameLoop);

    } else if(comp.x > 750 && player.x < comp.x) {
        ctx.font = "50px serif"
        ctx.drawText("The Lose", 200, 40);
        cancelAnimationFrame(gameLoop);
    }
    comp.x += 1;
}

// Control the animation
function gameLoop() {
    draw();
    update();
    requestAnimationFrame(gameLoop);
}

document.body.onload = function() {
    draw();
}

document.onkeyup = function(e) {
    if(e.key == "a") {
        player.x += Math.random() % 5 + 1;
        draw();
    }
}

document.getElementById("btnStart").onclick = function() {
    requestAnimationFrame(gameLoop);
    player.x = 50;
    comp.x = 50;
}