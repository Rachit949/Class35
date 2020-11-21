class Form{
constructor(){

}
display(){
    var title=createElement('h5');
    title.html("MultiPlayer Car Racing Game");
    title.position(200,10);
var input=createInput("Name: ");
var button=createButton("Play");
input.position(130,150);
button.position(130,190);
var greeting=createElement('h4');
button.mousePressed(function(){
    input.hide();
button.hide();
var name=input.value();
playerCount+=1;
player.update(name);
player.updateCount(playerCount);
greeting.html("Hello "+name);
greeting.position(130,160);
});

}

}