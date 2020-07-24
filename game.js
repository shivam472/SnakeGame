import{ update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from './snake.js';
import{ update as updateFood, draw as drawFood, score} from './food.js';
import{ outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('gameBoard');

function main(currentTime){ //animate function
    if(gameOver){
        if(confirm('Score: ' + score + '\nYou lost. Press Ok to restart')){ //The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
           window.location = '/Snake-Game/snake.html';
        }
        return;
    }
    window.requestAnimationFrame(main); /*The window.requestAnimationFrame() method tells the browser that 
                                        you wish to perform an animation and requests that the browser calls
                                        a specified function to update an animation before the next repaint.
                                        The method takes a callback as an argument to be invoked before the repaint.*/
                                        
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000;
    if(secondsSinceLastRender < 1/snakeSpeed){
        return;
    } 

    lastRenderTime = currentTime;
   
    update();
    draw();
}

function update(){
    updateSnake();
    updateFood();
    checkForDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkForDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

window.requestAnimationFrame(main);