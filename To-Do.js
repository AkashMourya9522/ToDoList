let buttonEle = document.querySelector('.add-button');
let array = [];
buttonEle.addEventListener('click',()=>{
    let inputEle = document.querySelector('.input-element');
    let inputText = inputEle.value;
    inputEle.value = '';
    array.push(inputText);
    display();
});
function display(){
    let displayEle = document.querySelector('.display-element');
    let arrayLen = array.length;
    let concatenate = '';
    console.log(array);
    for (let i=0;i<arrayLen;i++){
        concatenate += `<p class="paragraph-element">${array[i]}</p><button class="remove-button" onclick="remove(${i})" >Remove</button>`;
    }
    document.querySelector('.display-element').innerHTML = concatenate;
}
function remove(index){
    array.splice(index,1);
    display();
}
