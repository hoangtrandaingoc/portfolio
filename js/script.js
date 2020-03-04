// toggle icon

const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
console.log(icon2);

icon1.onclick = function(){
    icon1.classList.add('hidden_icon1');
    icon2.classList.add('block_icon2')
}

icon2.onclick = function(){
    icon2.classList.remove('block_icon2');
    icon1.classList.remove('hidden_icon1');

}