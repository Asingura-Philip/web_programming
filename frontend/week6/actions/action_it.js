let body = document.getElementById('body')
let color = document.getElementById('color')
let text1 = 'this is the first html,css and javascript fusion'
let text2 = 'this is my second fusion'
let text = document.getElementById('text')
let newColor = document.getElementById('colorarea')

function greet(){
    alert('welcome to my dynamic world')
}

color.onclick = function(){
    body.style.backgroundColor = "pink"
}


document.getElementById('btn').onclick = function () { 
    if (text.innerText === text1) {
        text.innerText = text2;
    } else {
        text.innerText = text1;
    }
};

document.getElementById('click').onclick = function(){
    alert('button was clicked')
}

document.getElementById('click').mouseover = function(){
    document.getElementById('click').style.color = "yellow"
}

document.getElementById('changecolor').onclick = function(){
    body.style.backgroundColor = newColor.value
}
