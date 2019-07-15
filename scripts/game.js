// Walls are represented by 1
// Coins are represented by 2
// Empty is represented by 3
// Catman is represented by 5
// Mouse is represented by 6

let gameData = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,2,1,1,1,1,1,3,1,3,1,1,1,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,3,3,3,3,3,3,3,3,3,3,3,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,3,1,1,1,3,3,3,1,1,1,3,1,2,1,1,1,1,1,1],
    [3,3,3,3,3,3,2,3,3,1,3,3,3,6,3,3,3,1,3,3,2,3,3,3,3,3,3],
    [1,1,1,1,1,1,2,1,3,1,3,3,3,3,3,3,3,1,3,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,3,1,1,1,3,3,3,1,1,1,3,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,3,3,3,3,3,3,3,3,3,3,3,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,3,1,1,1,1,1,1,1,1,1,3,1,2,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,2,2,2,1,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,1,2,2,2,2,1],
    [1,1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

// Test Data

// let gameData = [
//         [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
//     [1,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,1],
//     [1,3,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,1,3,1],
//     [1,3,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,1,3,1],
//     [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
//     [1,3,1,1,1,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,1,3,1],
//     [1,3,3,3,3,3,3,1,3,3,3,3,3,1,3,3,3,3,3,1,3,3,3,3,3,3,1],
//     [1,1,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,1,1,1],
//     [1,1,1,1,1,1,3,1,3,3,3,3,3,3,3,3,3,3,3,1,3,1,1,1,1,1,1],
//     [1,1,1,1,1,1,3,1,3,1,1,1,3,3,3,1,1,1,3,1,3,1,1,1,1,1,1],
//     [3,3,3,3,3,3,3,3,3,1,3,3,3,6,3,3,3,1,3,3,3,3,3,3,3,3,3],
//     [1,1,1,1,1,1,3,1,3,1,3,3,3,3,3,3,3,1,3,1,3,1,1,1,1,1,1],
//     [1,1,1,1,1,1,3,1,3,1,1,1,3,3,3,1,1,1,3,1,3,1,1,1,1,1,1],
//     [1,1,1,1,1,1,3,1,3,3,3,3,3,3,3,3,3,3,3,1,3,1,1,1,1,1,1],
//     [1,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,1,1,1],
//     [1,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,1],
//     [1,3,1,1,1,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,3,1,1,1,1,3,1],
//     [1,3,3,3,3,1,3,3,3,3,3,3,3,5,2,3,3,3,3,3,3,1,3,3,3,3,1],
//     [1,1,1,1,3,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,3,1,1,1,1],
//     [1,3,3,3,3,3,3,1,3,3,3,3,3,1,3,3,3,3,3,1,3,3,3,3,3,3,1],
//     [1,3,1,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,1,1,1,1,1,1,1,3,1],
//     [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
//     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// ]

// Variables
const WALL = 1;
const COIN = 2;
const EMPTY = 3;
const CATMAN = 5;
const MOUSE = 6;

let play = true;
let firedReturn = false;

let points = 0;
let pointsHTML = document.getElementById('points');
let highScoreHTML = document.getElementById('high-score');
let highScoreLoseHTML = document.getElementById('high-score-l');
let highScoreWinHTML = document.getElementById('high-score-w');
let yourScoreLoseHTML = document.getElementById('your-score-l');
let yourScoreWinHTML = document.getElementById('your-score-w');
let highScore = 0;

let timer;
let map;

let catman = {
    x: 13,
    y: 17,
    lives: 0,
    direction: 'right'
}

let mouse = {
    x: 13,
    y: 10,
    direction: 'right'
}

// Game Functions

function createTiles(data) {
    let tilesArray = [];

    for (let row of data) {
        
        for(let col of row) {
            let tile = document.createElement('div');
            tile.classList.add('tile');

            if (col === WALL) {
                tile.classList.add('wall');
            }else if (col === COIN) {
                tile.classList.add('coin');
            }else if (col === EMPTY) {
                tile.classList.add('empty');
            }else if(col === CATMAN){
                tile.classList.add('catman');
                tile.classList.add(catman.direction);
            }else if(col === MOUSE){
                tile.classList.add('mouse');
            }
        tilesArray.push(tile);
        }
    let brTile = document.createElement('br');
    tilesArray.push(brTile);
    }

    return tilesArray;
}

function drawMap() {
    map = document.createElement('div');
    
    let tiles = createTiles(gameData);
    for(let tile of tiles){
        map.appendChild(tile);
    }

    document.body.appendChild(map);
}

function eraseMap() {
    document.body.removeChild(map);
}

// Movement Functions

let replacedTile;

function moveDown() {
    catman.direction = 'down';

    if (gameData[catman.y+1][catman.x] !== WALL){
        clearTimeout(timer);
        if (gameData[catman.y+1][catman.x] === COIN){
            points++;
            pointsHTML.innerHTML = `score: ${points}`;
            replacedTile = COIN;
        }

        // if (gameData[catman.y+2][catman.x] !== WALL){
        //     setTimeout(function(){
        //         $('.catman').css('animation-name', 'movedown')}, 0);
        // }
        if(gameData[catman.y+1][catman.x] === MOUSE || gameData[catman.y][catman.x] === MOUSE){
            gameData[catman.y][catman.x] = EMPTY;
            catman.y++;
            gameData[catman.y][catman.x] = EMPTY;
            eat();
            return;
        }
        gameData[catman.y][catman.x] = EMPTY;
        catman.y++;
        gameData[catman.y][catman.x] = CATMAN;
        if (replacedTile === COIN){
            coinCount = 0;
            checkWin();
        }
        replacedTile = 0;
        timer = setTimeout(moveDown, 200);
    }else{
        firedDown = false;
    }
    firedLeft = false;
    firedRight = false;
    firedUp = false;
}

function moveUp() {
    catman.direction = 'up';

    if (gameData[catman.y-1][catman.x] !== WALL){
        clearTimeout(timer);
        if (gameData[catman.y-1][catman.x] === COIN){
            points++;
            pointsHTML.innerHTML = `score: ${points}`;
            replacedTile = COIN;
        }
        
        // if (gameData[catman.y-2][catman.x] !== WALL){
        //     setTimeout(function(){
        //         $('.catman').css('animation-name', 'moveup')}, 0);
        // }
        if(gameData[catman.y-1][catman.x] === MOUSE || gameData[catman.y][catman.x] === MOUSE){
            gameData[catman.y][catman.x] = EMPTY;
            catman.y--;
            gameData[catman.y][catman.x] = EMPTY;
            eat();
            return;
        }
        gameData[catman.y][catman.x] = EMPTY;
        catman.y--;
        gameData[catman.y][catman.x] = CATMAN;

        if (replacedTile === COIN){
            coinCount = 0;
            checkWin();
        }

        replacedTile = 0;

        timer = setTimeout(moveUp, 200);
    }else{
        firedUp = false;
    }
    firedLeft = false;
    firedDown = false;
    firedRight = false;
}

function moveLeft(){
    catman.direction = 'left';

    if(catman.y === 10 && catman.x === 0){
        clearTimeout(timer);
        gameData[catman.y][catman.x] = EMPTY;
        catman.x = 26;
        gameData[catman.y][catman.x] = CATMAN;
        timer = setTimeout(moveLeft,200);
        // eraseMap();
        // drawMap();
    }else if (gameData[catman.y][catman.x-1] !== WALL){
        clearTimeout(timer);
        if (gameData[catman.y][catman.x-1] === COIN){
            points++;
            pointsHTML.innerHTML = `score: ${points}`;
            replacedTile = COIN;
        }

        // if (gameData[catman.y][catman.x-2] !== WALL){
        //     setTimeout(function(){
        //         $('.catman').css('animation-name', 'moveleft')}, 0);
        // }
        if(gameData[catman.y][catman.x-1] === MOUSE || gameData[catman.y][catman.x] === MOUSE){
            gameData[catman.y][catman.x] = EMPTY;
            catman.x--;
            gameData[catman.y][catman.x] = EMPTY;
            eat();
            return;
        }
        gameData[catman.y][catman.x] = EMPTY;
        catman.x--;
        gameData[catman.y][catman.x] = CATMAN;

        if (replacedTile === COIN){
            coinCount = 0;
            checkWin();
        }

        replacedTile = 0;

        timer = setTimeout(moveLeft, 200);
    }else{
        firedLeft = false;
    }
    firedDown = false;
    firedRight = false;
    firedUp = false;
}

function moveRight() {
    catman.direction = 'right';

    if(catman.y === 10 && catman.x === 26){
        clearTimeout(timer);
        gameData[catman.y][catman.x] = EMPTY;
        catman.x = 0;
        gameData[catman.y][catman.x] = CATMAN;
        timer = setTimeout(moveRight,200);
    }else if (gameData[catman.y][catman.x+1] !== WALL){
        clearTimeout(timer);
        if (gameData[catman.y][catman.x+1] === COIN){
            points++;
            pointsHTML.innerHTML = `score: ${points}`;
            replacedTile = COIN;
        }

        if(gameData[catman.y][catman.x+1] === MOUSE || gameData[catman.y][catman.x] === MOUSE){
            gameData[catman.y][catman.x] = EMPTY;
            catman.x++;
            gameData[catman.y][catman.x] = EMPTY;
            eat();
            return;
        }
        // if (gameData[catman.y][catman.x+2] !== WALL){
        //     setTimeout(function(){
        //         $('.catman').css('animation-name', 'moveright')}, 0);
        // }
        gameData[catman.y][catman.x] = EMPTY;
        catman.x++;
        gameData[catman.y][catman.x] = CATMAN;

        if (replacedTile === COIN){
            coinCount = 0;
            checkWin();
        }

        replacedTile = 0;

        timer = setTimeout(moveRight, 200);
        // eraseMap();
        // drawMap();
    }else{
        firedRight = false;
    }
    firedUp = false;
    firedLeft = false;
    firedDown = false;
}

// Keyboard Controls

var firedDown = false;
var firedUp = false;
var firedLeft = false;
var firedRight = false;

var menuOpen = false;

function setupKeyboardControls() {
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 37 && play === true && firedReturn === false) {
            if(firedLeft){return;}
            firedLeft=true;
            moveLeft();
        }else if (e.keyCode === 38 && play === true && firedReturn === false){
            if(firedUp){return;}
            firedUp=true;
            moveUp();
        }else if (e.keyCode === 39 && play === true && firedReturn === false){
            if(firedRight){return;}
            firedRight=true;
            rdy = true;
            moveRight();
        }else if (e.keyCode === 40 && play === true && firedReturn === false){
            if(firedDown){return;}
            firedDown=true;
            rdy = true;
            moveDown();
        }else if (e.keyCode === 80 && firedReturn === false){
            // P for Pause
            if(menuOpen === true){return;}
            pause();
            
        }else if(e.keyCode === 27){
            if(menuOpen === false && play === true && firedReturn === false){
                pause();
                $('.pause').hide();
                $('.menu').css('display', 'flex');
                catsOnMars.volume = 0.1;
                menuOpen = true;
            }else if (menuOpen === true && play === false && firedReturn === false){
                pause();
                $('.menu').hide();
                catsOnMars.volume = 0.5;
                menuOpen = false;
            }
        }else if(e.keyCode === 82 && play === false && firedReturn === false){
            reset();
        }
    })
}

// Mouse

let mousePrevTile = EMPTY;
let mouseCurrentTile = EMPTY;
let mouseTimer;
let mouseMoveSet = [mouseMoveDown, mouseMoveLeft, mouseMoveUp, mouseMoveRight];
let mouseNextAction = 0;
let prevAction;

function mouseMove(){
    if(mouse.y < catman.y){
        if(mouseMoveDown() === false){
            if(mouseMoveSet[mouseNextAction]() === false){
                mouseNextAction = Math.floor((Math.random()*4)+1)-1;
            }
        }
    }else if(mouse.y > catman.y){
        if(mouseMoveUp() === false) {
            if(mouseMoveSet[mouseNextAction]() === false){
                mouseNextAction = Math.floor((Math.random()*4)+1)-1;    
            }
        }
    }else if(mouse.x < catman.x){
        if(mouseMoveRight() === false) {
            if(mouseMoveSet[mouseNextAction]() === false){
                mouseNextAction = Math.floor((Math.random()*4)+1)-1;    
                return;
            }
        }
    }else if(mouse.x > catman.x){
        if(mouseMoveLeft() === false) {
            if(mouseMoveSet[mouseNextAction]() === false){
                mouseNextAction = Math.floor((Math.random()*4)+1)-1;    
                return;
            }   
        }
    }

}

function mouseMoveDown() {
    mouse.direction = 'down';
    if (gameData[mouse.y+1][mouse.x] !== WALL){
        clearTimeout(mouseTimer);

        setTimeout(function(){
            $('.mouse').css('animation-name', 'movedown')}, 0);

        if(gameData[mouse.y+1][mouse.x] === CATMAN || gameData[mouse.y][mouse.x] === CATMAN){
            gameData[mouse.y][mouse.x] = EMPTY;
            mouse.y++;
            gameData[mouse.y][mouse.x] = EMPTY;
            eat();
            return;
        }
        
        gameData[mouse.y][mouse.x] = mousePrevTile;
        mousePrevTile = gameData[mouse.y+1][mouse.x];
        mouse.y++;
        gameData[mouse.y][mouse.x] = MOUSE;
       
    }else{
        return false;
    }
}

function mouseMoveUp() {
    mouse.direction = 'up';
    if (gameData[mouse.y-1][mouse.x] !== WALL){
        clearTimeout(mouseTimer);

        if (gameData[mouse.y-1][mouse.x] !== WALL){
            setTimeout(function(){
                $('.mouse').css('animation-name', 'moveup')}, 0);
        }

        if(gameData[mouse.y-1][mouse.x] === CATMAN || gameData[mouse.y][mouse.x] === CATMAN){
            gameData[mouse.y][mouse.x] = EMPTY;
            mouse.y--;
            gameData[mouse.y][mouse.x] = EMPTY;
            eat();
            return;
        }

        gameData[mouse.y][mouse.x] = mousePrevTile;
        mousePrevTile = gameData[mouse.y-1][mouse.x];
        mouse.y--;
        gameData[mouse.y][mouse.x] = MOUSE;

    }else{
        return false;
    }
}

function mouseMoveLeft(){
    mouse.direction = 'left';
    if(mouse.y === 10 && mouse.x === 0){
        clearTimeout(mouseTimer);
        gameData[mouse.y][mouse.x] = EMPTY;
        mouse.x = 26;
        gameData[mouse.y][mouse.x] = MOUSE;
    }else if (gameData[mouse.y][mouse.x-1] !== WALL){
        clearTimeout(mouseTimer);

        if (gameData[mouse.y][mouse.x-1] !== WALL){
            setTimeout(function(){
                $('.mouse').css('animation-name', 'moveleft')}, 0);
        }

        if(gameData[mouse.y][mouse.x-1] === CATMAN || gameData[mouse.y][mouse.x] === CATMAN){
            gameData[mouse.y][mouse.x] = mousePrevTile;
            mouse.x--;
            gameData[mouse.y][mouse.x] = EMPTY;
            eat();
            return;
        }

        gameData[mouse.y][mouse.x] = mousePrevTile;
        mousePrevTile = gameData[mouse.y][mouse.x-1];
        mouse.x--;
        gameData[mouse.y][mouse.x] = MOUSE;

    }else{
        return false;
    }
}

function mouseMoveRight(){
    mouse.direction = 'left';
    if(mouse.y === 10 && mouse.x === 26){
        clearTimeout(mouseTimer);
        gameData[mouse.y][mouse.x] = EMPTY;
        mouse.x = 0;
        gameData[mouse.y][mouse.x] = MOUSE;
        mouseTimer = setTimeout(mouseMoveRight,200);
    }else if (gameData[mouse.y][mouse.x+1] !== WALL){
        clearTimeout(mouseTimer);

        if (gameData[mouse.y][mouse.x+1] !== WALL){
            setTimeout(function(){
                $('.mouse').css('animation-name', 'moveright')}, 0);
        }

        if(gameData[mouse.y][mouse.x+1] === CATMAN || gameData[mouse.y][mouse.x] === CATMAN){
            gameData[mouse.y][mouse.x] = mousePrevTile;
            mouse.x++;
            gameData[mouse.y][mouse.x] = EMPTY;
            eat();
            return;
        }

        gameData[mouse.y][mouse.x] = mousePrevTile;
        mousePrevTile = gameData[mouse.y][mouse.x+1];
        mouse.x++;
        gameData[mouse.y][mouse.x] = MOUSE;

    }else{
        return false;
    }
}

// Eat

function eat(){
    if (mouse.x === catman.x && mouse.y === catman.y){
        eatSound.play();
        mousePrevTile = 0;
        catman.x = 13;
        catman.y = 17;
        gameData[catman.y][catman.x] = CATMAN;
        mouse.x = 13;
        mouse.y = 10;
        gameData[mouse.y][mouse.x] = MOUSE;
        catman.lives--;
        firedDown = false;
        firedLeft = false;
        firedRight = false;
        firedUp = false;
        $('#lives').find(':first-child').remove();
        if(catman.lives===0){
            clearTimeout(timer);
            play = false;
            eraseMap();
            clearInterval(refresh);
            clearInterval(refresh_m);
            if (points > highScore){
                highScore = points;
            }
            yourScoreLoseHTML.innerHTML = `Your Score: ${points}`;
            highScoreLoseHTML.innerHTML = `High Score: ${highScore}`;
            highScoreHTML.innerHTML = `High Score: ${highScore}`;   
            $('.bar').hide();
            catsOnMars.pause();
            catsOnMars.currentTime = 0;
            checkMeowt.play();
            $('.lose').fadeIn();
            gameOver = true;
        }
    }
}

// Check Win Condition 

let coinsRemaining = true;
let coinCount = 0;
let gameOver = false;

function checkWin(){
    for(i=0; i<gameData.length; i++){
        for(j=0; j<26; j++){
            if(gameData[i][j] === COIN){
                coinCount++;
            }
        }
    }

    if(mousePrevTile === COIN){
        coinCount++;
    }

    if (coinCount === 0){
        if (points > highScore){
            highScore = points;            
        }
        yourScoreWinHTML.innerHTML = `Your Score: ${points}`;
        highScoreWinHTML.innerHTML = `High Score: ${highScore}`;
        highScoreHTML.innerHTML = `High Score: ${highScore}`;
        clearTimeout(timer);
        play = false;
        reset();
        eraseMap();
        clearInterval(refresh);
        clearInterval(refresh_m);
        $('.bar').hide();
        catsOnMars.pause();
        catsOnMars.currentTime = 0;
        smileyCat.play();
        $('.win').fadeIn();
        gameOver = true;
    }
}

// Init Game Movement

let refresh;
let refresh_m;
let refresh_checkWin;

function GameMovement() {
    refresh = setInterval(function(){
        eraseMap();
        drawMap();
    }, 200);
    
    refresh_m = setInterval(function(){
        mouseMove();
    }, 200);
}

function pause(){
    if(play === true){
        clearInterval(refresh);
        clearInterval(refresh_m);
        clearInterval(timer);
        play = false;
        firedDown = false;
        firedLeft = false;
        firedRight = false;
        firedUp = false;
        catsOnMars.volume = 0.1;
        $('.pause').show();
    }else if(play === false){
        GameMovement();
        play = true;
        catsOnMars.volume = 0.5;
        $('.pause').hide();
    }
}

// Init Game board

function init() {
    gameOver = false;
    catman.lives = 3;
    for(i=0; i<3; i++){
        $('#lives').append('<div class="life"></div>');
    }
    drawMap();
}

function reset() {
    play = true;
    gameData = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
        [1,2,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
        [1,2,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
        [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
        [1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,2,1],
        [1,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,1],
        [1,1,1,1,1,1,2,1,1,1,1,1,3,1,3,1,1,1,1,1,2,1,1,1,1,1,1],
        [1,1,1,1,1,1,2,1,3,3,3,3,3,3,3,3,3,3,3,1,2,1,1,1,1,1,1],
        [1,1,1,1,1,1,2,1,3,1,1,1,3,3,3,1,1,1,3,1,2,1,1,1,1,1,1],
        [3,3,3,3,3,3,2,3,3,1,3,3,3,6,3,3,3,1,3,3,2,3,3,3,3,3,3],
        [1,1,1,1,1,1,2,1,3,1,3,3,3,3,3,3,3,1,3,1,2,1,1,1,1,1,1],
        [1,1,1,1,1,1,2,1,3,1,1,1,3,3,3,1,1,1,3,1,2,1,1,1,1,1,1],
        [1,1,1,1,1,1,2,1,3,3,3,3,3,3,3,3,3,3,3,1,2,1,1,1,1,1,1],
        [1,1,1,1,1,1,2,1,3,1,1,1,1,1,1,1,1,1,3,1,2,1,1,1,1,1,1],
        [1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
        [1,2,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
        [1,2,2,2,2,1,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,1,2,2,2,2,1],
        [1,1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1],
        [1,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,1],
        [1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1],
        [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ]

    mousePrevTile = 0;
    catman.x = 13;
    catman.y = 17;
    gameData[catman.y][catman.x] = CATMAN;
    mouse.x = 13;
    mouse.y = 10;
    gameData[mouse.y][mouse.x] = MOUSE;
    firedDown = false;
    firedLeft = false;
    firedRight = false;
    firedUp = false;
    points = 0;
    pointsHTML.innerHTML = `score: ${points}`;

    checkMeowt.pause();
    checkMeowt.currentTime = 0;

    smileyCat.pause();
    smileyCat.currentTime = 0;

    $('.win').hide();
    $('.lose').hide();
    
    if(gameOver === false){
        eraseMap();
        for(i=0; i<catman.lives+1; i++){
            $('#lives').find(':first-child').remove();
        }
    }else if(gameOver === true){
        for(i=0; i<catman.lives+1; i++){
            $('#lives').find(':first-child').remove();
        }
        GameMovement();
    }

    points = 0;
    pointsHTML.innerHTML = `score: ${points}`;
    init();    
}

$('#rdy').click(function(){
    buttonClick.play();
    magicFly.pause();
    magicFly.currentTime = 0;
    catsOnMars.play();
    $('.ready').fadeOut();
    $('footer').fadeOut();
    setTimeout(function(){
        $('.bar').css('display', 'flex');
        init();
        GameMovement();
        if (firedReturn === false){
            setupKeyboardControls();
        }
        firedReturn = false;
    }, 750)
})

$('#playagain-l').click(function(){
    buttonClick.play();
    $('.lose').fadeOut();
    catsOnMars.play();
    setTimeout(function(){
        $('.bar').show();
        reset();
    }, 750)
})

$('#playagain-w').click(function(){
    buttonClick.play();
    $('.win').fadeOut();
    catsOnMars.play();
    setTimeout(function(){
        $('.bar').show();
        reset();
    }, 750)
})

$('#resume').click(function(){
    buttonClick.play();
    pause();
    $('.menu').hide();
    catsOnMars.volume = 0.5;
    menuOpen = false;
})

$('#restart').click(function(){
    buttonClick.play();
    pause();
    $('.menu').hide();
    menuOpen = false;
    catsOnMars.volume = 0.5;
    reset();
})

$('#title').click(function(){
    buttonClick.play();
    catsOnMars.pause();
    catsOnMars.currentTime = 0;
    magicFly.play();
    firedReturn = true;
    pause();
    $('.menu').hide();
    menuOpen = false;
    reset();
    for(i=0; i<catman.lives+1; i++){
        $('#lives').find(':first-child').remove();
    }
    clearTimeout(timer);
    play = false;
    eraseMap();
    clearInterval(refresh);
    clearInterval(refresh_m);
    $('.bar').hide();
    gameOver = true;
    play = true;
    $('.ready').fadeIn();
    $('footer').fadeIn();
})

$('#title-l').click(function(){
    buttonClick.play();
    checkMeowt.pause();
    checkMeowt.currentTime = 0;
    magicFly.play();
    firedReturn = true;
    reset();
    for(i=0; i<catman.lives+1; i++){
        $('#lives').find(':first-child').remove();
    }
    clearTimeout(timer);
    play = false;
    eraseMap();
    clearInterval(refresh);
    clearInterval(refresh_m);
    $('.bar').hide();
    gameOver = true;
    play = true;
    $('.ready').fadeIn();
    $('footer').fadeIn();    
})

$('#title-w').click(function(){
    buttonClick.play();
    smileyCat.pause();
    smileyCat.currentTime = 0;
    magicFly.play();
    firedReturn = true;
    reset();
    for(i=0; i<catman.lives+1; i++){
        $('#lives').find(':first-child').remove();
    }
    clearTimeout(timer);
    play = false;
    eraseMap();
    clearInterval(refresh);
    clearInterval(refresh_m);
    $('.bar').hide();
    gameOver = true;
    play = true;
    $('.ready').fadeIn();
    $('footer').fadeIn();
})

let checkMeowt = new Audio('audio/check-meowt.mp3');
checkMeowt.volume = 0.5;

let catsOnMars = new Audio('audio/cats-on-mars.mp3');
catsOnMars.volume = 0.5;

let magicFly = new Audio('audio/magic-fly.mp3');
magicFly.volume = 0.5;

let smileyCat = new Audio('audio/smiley-cat.mp3');
smileyCat.volume = 0.5;

let buttonClick = new Audio('audio/button-click.mp3');
let eatSound = new Audio('audio/meow.mp3');

magicFly.play();
