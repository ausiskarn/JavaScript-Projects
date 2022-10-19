const body= document.body;

const text = "I am Learning the javascript and I will not stop until I am able to do my projets by myself."

let index = 0;

function writePost () {
    body.textContent = text.slice(0,index);
    index++
    if(index>text.length){
        index =0
    }
}
setInterval(writePost, 100);

