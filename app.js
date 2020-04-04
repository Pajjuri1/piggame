var scores,roundscores,activePlayer,gameplaying,score,lastdice;

newGame();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying){
    
        var dice= Math.floor(Math.random() * 6) + 1;
        

        var DOM=document.querySelector('.dice');
        DOM.style.display='block';
        DOM.src='dice-' + dice + '.png';

        if (dice===6 && lastdice===6){
           scores[activePlayer]=0;
            document.querySelector('#score-' + activePlayer).textContent= '0';

        }

        if (dice !== 1){
            roundscores+=dice;
            document.querySelector('#current-' + activePlayer).textContent=roundscores;
    }
        else{
            nextPlater();
    }

        
    }
    
    lastdice=dice;
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){

    if (gameplaying){

        scores[activePlayer]+=roundscores;
    document.getElementById('score-' + activePlayer).textContent=scores[activePlayer]
    
    var input= document.querySelector('.final-score').value;
    var winningscore;
    
    // o or undefined or null values will be coreced to false
    if(input){
        winningscore = input;
    }
    else{
        winningscore=100;
    }

    if (scores[activePlayer]>= winningscore){
        document.getElementById('name-' + activePlayer).textContent='WINNER!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gameplaying=false;
     

        
    }else{
        nextPlater();

    }
    


    }
    
});

function nextPlater(){
        roundscores=0;
        activePlayer===0?activePlayer=1:activePlayer=0;
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');


}

document.querySelector('.btn-new').addEventListener('click',newGame);

function newGame(){
    scores=[0,0];
    roundscores=0;
    activePlayer=0;
    gameplaying=true;
  

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}