const createBtn=document.querySelector('button[data-create]');
const destroyBtn=document.querySelector('button[data-destroy]');
const input=document.querySelector('input');
const divBoxes = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function createBoxes(amount){
    let elements = [];
    
        for(let i = 1; i <= amount; i++){
            const div=document.createElement('div');
            div.style.width=`${30 + 10 *i}px`;
            div.style.height=`${30 + 10 *i}px`;       
            div.style.background = getRandomHexColor();
            elements.push(div)
        }
        return elements;

    
}

const destroyBoxes = () => {
	boxes.innerHTML = ''
}


createBtn.addEventListener('click', ()=>{
    let boxAdd = createBoxes(input.value)
    divBoxes.append(...boxAdd)
})

  destroyBtn.addEventListener('click', destroyBoxes)

