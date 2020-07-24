import{ onSnake, expandSnake} from './snake.js';
import{ randomGridPosition } from './grid.js';

let food = {x: 1, y: 1};
export let score = 0;
const expansionRate = 2; 

export function update(){
   if(onSnake(food)){
        expandSnake(expansionRate)
        food = getRandomFoodPostion();
        score += 10;
   }
   
}
export function draw(gameBoard){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y; 
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
}

function getRandomFoodPostion() {
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}