const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const playerImage = new Image();
playerImage.src = "peterpan.png";

const tinkerbellImage = new Image();
tinkerbellImage.src = "tinkerbell.png";

const wendyImage = new Image();
wendyImage.src = "wendy.png";

const johnImage = new Image();
johnImage.src = "john.png";

const michaelImage = new Image();
michaelImage.src = "michael.png";

const lostBoyImage = new Image();
lostBoyImage.src = "lostboy.png";

const lostGirlImage = new Image();
lostGirlImage.src = "lostgirl.png";

const tigerLilyImage = new Image();
tigerLilyImage.src = "tigerlily.png";

const pirateImage = new Image();
pirateImage.src = "pirate.png";

const captainHookImage = new Image();
captainHookImage.src = "captainhook.png";

const player = {
  x:100,
  y:300,
  width:180,
  height:140,
  speed:7
};

const keys = {};

let cameraX = 0;

document.addEventListener("keydown",(e)=>{
  keys[e.key] = true;
});

document.addEventListener("keyup",(e)=>{
  keys[e.key] = false;
});

function update(){

  if(keys["ArrowRight"]){
    player.x += player.speed;
  }

  if(keys["ArrowLeft"]){
    player.x -= player.speed;
  }

  if(keys["ArrowUp"]){
    player.y -= player.speed;
  }

  if(keys["ArrowDown"]){
    player.y += player.speed;
  }

  if(player.y < 50){
    player.y = 50;
  }

  if(player.y > canvas.height-180){
    player.y = canvas.height-180;
  }

  cameraX = player.x - 300;
}

function drawSky(){

  ctx.fillStyle = "#001d3d";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<200;i++){

    ctx.fillStyle = "white";

    ctx.beginPath();

    ctx.arc(
      (i*100-cameraX*0.2)%10000,
      (i*37)%700,
      2,
      0,
      Math.PI*2
    );

    ctx.fill();
  }
}

function drawLondon(){

  for(let i=0;i<12;i++){

    ctx.fillStyle = "#343a40";

    ctx.fillRect(
      i*180-cameraX,
      350,
      120,
      350
    );
  }

  ctx.fillStyle = "#ffcad4";

  ctx.fillRect(
    900-cameraX,
    330,
    260,
    230
  );

  ctx.fillStyle = "white";
  ctx.font = "30px Arial";

  ctx.fillText(
    "London - Wendy House",
    820-cameraX,
    290
  );

  ctx.drawImage(wendyImage,930-cameraX,390,90,170);

  ctx.drawImage(johnImage,1020-cameraX,420,90,140);

  ctx.drawImage(michaelImage,880-cameraX,430,80,120);
}

function drawOcean(){

  ctx.fillStyle = "#0077b6";

  ctx.fillRect(
    1700-cameraX,
    500,
    1200,
    250
  );
}

function drawNeverland(){

  ctx.fillStyle = "#2d6a4f";

  ctx.fillRect(
    3000-cameraX,
    420,
    5000,
    400
  );

  ctx.fillStyle = "#14532d";

  for(let i=0;i<40;i++){

    ctx.fillRect(
      3100+i*150-cameraX,
      300,
      45,
      180
    );

    ctx.beginPath();

    ctx.arc(
      3120+i*150-cameraX,
      280,
      70,
      0,
      Math.PI*2
    );

    ctx.fill();
  }

  ctx.fillStyle = "white";
  ctx.font = "40px Arial";

  ctx.fillText(
    "Neverland",
    3300-cameraX,
    180
  );
}

function drawLostKids(){

  ctx.drawImage(
    lostBoyImage,
    3600-cameraX,
    430,
    80,
    120
  );

  ctx.drawImage(
    lostBoyImage,
    3720-cameraX,
    430,
    80,
    120
  );

  ctx.drawImage(
    lostGirlImage,
    3840-cameraX,
    430,
    80,
    120
  );

  ctx.drawImage(
    lostGirlImage,
    3960-cameraX,
    430,
    80,
    120
  );

  ctx.fillStyle = "white";
  ctx.font = "28px Arial";

  ctx.fillText(
    "Lost Kids",
    3720-cameraX,
    390
  );
}

function drawIndianVillage(){

  ctx.fillStyle = "#8b4513";

  for(let i=0;i<3;i++){

    ctx.beginPath();

    ctx.moveTo(4700+i*180-cameraX,350);
    ctx.lineTo(4640+i*180-cameraX,520);
    ctx.lineTo(4760+i*180-cameraX,520);

    ctx.fill();
  }

  ctx.fillStyle = "white";

  ctx.fillText(
    "Indian Village",
    4680-cameraX,
    300
  );

  ctx.drawImage(
    tigerLilyImage,
    5200-cameraX,
    410,
    100,
    140
  );
}

function drawPirateShip(){

  ctx.fillStyle = "#5c3d2e";

  ctx.fillRect(
    6500-cameraX,
    320,
    700,
    260
  );

  ctx.fillStyle = "black";

  ctx.fillRect(
    6800-cameraX,
    120,
    20,
    220
  );

  ctx.fillStyle = "white";

  ctx.beginPath();

  ctx.moveTo(6820-cameraX,130);
  ctx.lineTo(6950-cameraX,210);
  ctx.lineTo(6820-cameraX,290);

  ctx.fill();

  ctx.fillStyle = "white";
  ctx.font = "36px Arial";

  ctx.fillText(
    "Captain Hook Ship",
    6550-cameraX,
    260
  );

  ctx.drawImage(
    pirateImage,
    6620-cameraX,
    430,
    90,
    120
  );

  ctx.drawImage(
    pirateImage,
    6760-cameraX,
    430,
    90,
    120
  );

  ctx.drawImage(
    pirateImage,
    6900-cameraX,
    430,
    90,
    120
  );

  ctx.drawImage(
    captainHookImage,
    7100-cameraX,
    390,
    130,
    160
  );
}

function drawPlayer(){

  ctx.drawImage(
    playerImage,
    player.x-cameraX,
    player.y,
    player.width,
    player.height
  );

  ctx.drawImage(
    tinkerbellImage,
    player.x-cameraX-45,
    player.y-30,
    50,
    50
  );
}

function gameLoop(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  update();

  drawSky();

  drawLondon();

  drawOcean();

  drawNeverland();

  drawLostKids();

  drawIndianVillage();

  drawPirateShip();

  drawPlayer();

  requestAnimationFrame(gameLoop);
}

playerImage.onload = ()=>{
  gameLoop();
};
