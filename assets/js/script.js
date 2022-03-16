

// blackjack

let blackjackDatabase={
	'you':{'scoreSpan':'#blackjack-results-you', 'div':'#your-box', 'score':0},
	'dealer':{'scoreSpan':'#blackjack-results-dealer', 'div':'#dealer-box', 'score':0},
	'allcards':['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
	'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11]},
	'wins':0,
	'losses':0,
	'draws':0,
	'isStand':false,
	'turnsOver':false,
	'flag':false,
};

const YOU=blackjackDatabase['you'];
const DEALER=blackjackDatabase['dealer'];

const hitSound = new Audio('blackjack/sounds/swish.m4a');
const wonSound = new Audio('blackjack/sounds/cash.mp3');
const lostSound = new Audio('blackjack/sounds/aww.mp3');

document.querySelector("#hit-btn").addEventListener('click',blackjackHit);
document.querySelector("#deal-btn").addEventListener('click',blackjackDeal);
document.querySelector("#stand-btn").addEventListener('click',blackjackStand);

//hit-button
function blackjackHit() {
	if (blackjackDatabase['isStand']===false){
		let card=randomCard();
		showCard(card,YOU);
		updateScore(card,YOU);
		showScore(YOU);	
	}
}

function timer(ms){
	return new Promise(resolve => setTimeout(resolve,ms));
}

//stand-button
async function blackjackStand(){ 

	if (blackjackDatabase['turnsOver']===false && blackjackDatabase['flag']===false) {
		blackjackDatabase['flag']=true;
		blackjackDatabase['isStand']=true;

		while(DEALER['score']<16 && blackjackDatabase['isStand']===true){
			let card=randomCard();
			showCard(card,DEALER);
			updateScore(card,DEALER);
			showScore(DEALER);
			await timer(800);
		}

		blackjackDatabase['turnsOver']=true;
		showWinner(computeWinner());
	}
}

//deal-button
function blackjackDeal(){
	if (blackjackDatabase['turnsOver']===true){

		clearCard(YOU);
		clearCard(DEALER);

		//reset score
		YOU['score']=0;
		DEALER['score']=0;

		document.querySelector(YOU['scoreSpan']).textContent=0;
		document.querySelector(YOU['scoreSpan']).style.color='#ffffff';

		document.querySelector(DEALER['scoreSpan']).textContent=0;
		document.querySelector(DEALER['scoreSpan']).style.color='#ffffff';

		//reset results
		document.querySelector('#blackjack-results').textContent="Let's Play again!";
		document.querySelector('#blackjack-results').style.color='#000000';

		blackjackDatabase['isStand']=false;
		blackjackDatabase['turnsOver']=false;
		blackjackDatabase['flag']=false;
	}
}


//random card selection
function randomCard(){
	let randomNum=[Math.floor(Math.random()*13)];
	return blackjackDatabase['allcards'][randomNum];
}

//cards on front end
function showCard(card,activePlayer) {
	if (activePlayer['score']<=21){
		let cardImage=document.createElement('img');
		cardImage.src=`blackjack/${card}.png`;	//or concatination
		document.querySelector(activePlayer['div']).appendChild(cardImage);
		hitSound.play();
	}
}

//clear cards
function clearCard(activePlayer){
	let allImages=document.querySelector(activePlayer['div']).querySelectorAll('img');
	for (i=0; i<allImages.length; i++){
		allImages[i].remove();
	}
}

//update score in dataBase
function updateScore(card,activePlayer){
	//if adding '11' keeps me below 21 add me or add '1'
	if (card==='A') {
		if (activePlayer['score']+blackjackDatabase['cardMap'][card][1]<=21){
			activePlayer['score']+=blackjackDatabase['cardMap'][card][1];
		}
		else{
			activePlayer['score']+=blackjackDatabase['cardMap'][card][0];
		}
	}else{
	activePlayer['score']+=blackjackDatabase['cardMap'][card];
	}
}

//show results on front end
function showScore(activePlayer){
	if (activePlayer['score']<=21){
		document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
	}
	else{
		document.querySelector(activePlayer['scoreSpan']).textContent='BUST!';
		document.querySelector(activePlayer['scoreSpan']).style.color='red';
	}
}

//find who's winner
function computeWinner(){
let winner;
		
		if (YOU['score']<=21) {
			
			if ( DEALER['score'] < YOU['score'] || DEALER['score'] > 21){
				winner=YOU;
				blackjackDatabase['wins']++;
			}

			else if ( DEALER['score'] > YOU['score']){
				winner=DEALER;
				blackjackDatabase['losses']++;
			}

			else if(YOU['score']===DEALER['score']){
				blackjackDatabase['draws']++;
			}

		}
		//when user busts
		else if (YOU['score'] > 21 && DEALER['score']<=21){
			winner=DEALER;
			blackjackDatabase['losses']++;
		}
		//when both busts
		else if(YOU['score'] > 21 && DEALER['score'] > 21){
			blackjackDatabase['draws']++;
		} 

return winner;
}
//show results on frontEnd
function showWinner(winner){

let message,messageColor;
	if (blackjackDatabase['turnsOver']===true){
		if (winner===YOU){
			message='You Won!';
			messageColor='green';
			wonSound.play();
			document.querySelector('#wins').textContent=blackjackDatabase['wins'];
		}
		else if(winner===DEALER){
			message='You Lost!';
			messageColor='red';
			lostSound.play();
			document.querySelector('#losses').textContent=blackjackDatabase['losses'];
		}
		else{
			message='You Drew!';
			messageColor='black';
			document.querySelector('#draws').textContent=blackjackDatabase['draws'];
		}
	}
	document.getElementById('blackjack-results').textContent=message;
	document.getElementById('blackjack-results').style.color=messageColor;

}

