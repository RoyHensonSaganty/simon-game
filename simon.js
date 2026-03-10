var randomN=[];
var userN=[];

var level=0;
var colors=["b1","b2","b3","b4"];

var restart=true;
var started = false;

function startGame(){
    if(!started&&restart){
        next();
        started = true;
    }
}

document.addEventListener("keypress", startGame);
document.addEventListener("click", startGame);

function next(){
    userN=[];
    level++;

    $("h1").text("Level " + level);

    var random = Math.floor(Math.random()*4);
    var colorR = colors[random];

    randomN.push(colorR);

    flashB(colorR);
}

function flashB(color){
    var button = $("."+color);

    button.addClass("flash");

    setTimeout(function(){
        button.removeClass("flash");
    },300);

    switch(color){
        case "b1":
            new Audio("green.mp3").play();
            break;
        case "b2":
            new Audio("red.mp3").play();
            break;
        case "b3":
            new Audio("yellow.mp3").play();
            break;
        case "b4":
            new Audio("blue.mp3").play();
            break;
        default:
            new Audio("wrong.mp3").play();
    }
}

$(".boxb").click(function(){

    var userstore = this.classList[1];

    userN.push(userstore);

    flashB(userstore);

    answer(userN.length-1);
});

function answer(index){

    if(randomN[index]===userN[index]){

        if(randomN.length===userN.length){

            setTimeout(function(){
                next();
            },1000);
        }

    }else{
        new Audio("wrong.mp3").play();
        $("h1").text("Game Over! Press Any Key to Restart");

        restart=false;
        setTimeout(function(){
           onceA();
        restart=true;},1000);

        
    }
}

function onceA(){
    level=0;
    started=false;
    randomN=[];

}
