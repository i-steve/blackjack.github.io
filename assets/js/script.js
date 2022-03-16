// //challenge-1

// function clickme() {
// 	var birthyear=prompt("What's your birth year ? good friend");
// 	var totalDays=(2020-birthyear)*365;

// 	var h1=document.createElement('h3');	// create h4 element tag 'h4' & store in var h1
// 	var textAnswer=document.createTextNode('You are  '+totalDays +' days old');
// 	h1.appendChild(textAnswer); 	//appending "textAnswer" on var 'h1'
// 	h1.setAttribute("id","ageInDays" );	
	
// 	document.getElementById('flex-container-result').appendChild(h1);	//appending var 'h1' in 'flex-container-result'
// }

// function reset(){
// 	document.getElementById("ageInDays").remove();
// }

// //challenge-2
 
// document.getElementById('gen-cat').addEventListener('click',generateCat);
// document.querySelector('#clear-cat').addEventListener('click',clear);

// function generateCat(){
// 	var image=document.createElement('img');  //create image tag 'img'
// 	image.src='gen_cat/cat.jpg'; //add src 
// 	var gen=document.getElementById('flex-gen-cat');	//create var 'gen'
// 	gen.appendChild(image);

// 	image.setAttribute('id','gen-cat-img');
// }

// function clear(){	
// 	document.getElementById('gen-cat-img').remove();
// }



//challenge-3

//main function
// function rpsgame(yourchoice){

// 	playerChoice=yourchoice.id;
// 	//console.log('player:',playerChoice);

// 	botChoice=numToChoice(randomNum());
// 	//console.log('computer:',botChoice);

// 	resultScore=score(playerChoice,botChoice);
// 	//console.log(resultScore);

// 	//console.log(finalMessage(resultScore));
// 	finalMessage=finalMessage(resultScore);

// 	frontEnd(playerChoice,botChoice,finalMessage);
	

// //method-2
	
// 	//console.log(finalmessage(diff));
// }

// function randomNum(){
// 	return Math.floor(Math.random()*3);
// }
 
// function numToChoice(number){
// 	return ['rock','paper','scissors'][number];
// }
// function refresh(){
// }
// function score(playerChoice,botChoice){
// 	var rpsgamedatabase={									//object
// 		'rock':{'rock':0.5,'paper':0,'scissors':1},
// 		'paper':{'rock':1,'paper':0.5,'scissors':0},
// 		'scissors':{'rock':0,'paper':1,'scissors':0.5},
// 	};
// 	var playerScore=rpsgamedatabase[playerChoice][botChoice];
// 	var botScore=rpsgamedatabase[botChoice][playerChoice];
// 	return [playerScore,botScore];
// }

// function finalMessage([playerScore,botScore]){
// 	if (playerScore===0)
// 	{
// 		return {message:'You Lost!',color:'red'};
// 	}
// 	else if (playerScore===0.5)
// 	{
// 		return {message:'You Tied!',color:'blue'};
// 	}
// 	else (playerScore===1)
// 	{
// 		return {message:'You Won!',color:'green'};
// 	}

// }


 /*
function score(playerChoice,botChoice){	
	var rpsdatabase={'rock':0,'paper':1,'scissors':2};
	var diff=(rpsdatabase[playerChoice]-rpsdatabase[botChoice]);
	return diff;
}

function finalmessage(num){
	if (num=='-2' || num=='1') 
	{
		return {message:'You Won!',color:'green'};
	}

	else if (num=='2' || num=='-1') 
	{
		return {message:'You Lost!',color:'red'};
	}

	else (num=='0' )
	{
		return {message:'tied!',color:'blue'};
	}

}	*/


// function frontEnd(playerChoice,botChoice,finalMessage) {

// 	var imageDatabase={	
// 		'rock':document.getElementById('rock').src,
// 		'paper':document.getElementById('paper').src,
// 		'scissors':document.getElementById('scissors').src,
// 	};

// 	//remove img
// 	document.getElementById('rock').remove();
// 	document.getElementById('paper').remove();
// 	document.getElementById('scissors').remove();
// 	//create element 
// 	var playerDiv=document.createElement('div');
// 	var messageDiv=document.createElement('h2');
// 	var botDiv=document.createElement('div');

// 	playerDiv.innerHTML="<img src=' "+imageDatabase[playerChoice]+" ' width=150 height=150 style= ' box-shadow:0px 10px 50px rgb(5, 255, 5,.9); padding:15px; object-fit:scale-down ' >"
// 	messageDiv.innerHTML="<h2 style='color:"+finalMessage['color']+"; font-size:40px;'>  "+finalMessage['message']+"  </h2>"
// 	botDiv.innerHTML="<img src=' "+imageDatabase[botChoice]+" ' width=150 height=150 style=' box-shadow:0px 10px 50px rgb(255,5,5,.7); padding:15px; object-fit:scale-down '>"

// 	document.getElementById('flex-container-3').appendChild(playerDiv);
// 	document.getElementById('flex-container-3').appendChild(messageDiv);
// 	document.getElementById('flex-container-3').appendChild(botDiv);
		
// }



// //challenge-4: change the button color

// var allbuttons=document.getElementsByTagName('button');

// var buttonsCopy=[];
// for(let i=0; i<allbuttons.length; i++){
// 	buttonsCopy.push(allbuttons[i].classList[1]);
// }

// function buttonColorChange(currentButton){
// 	if (currentButton.value=='red'){
// 		allbuttonRed();
// 	}
// 	else if (currentButton.value=='green'){
// 		allbuttonGreen();
// 	}
// 	else if (currentButton.value=='blue'){
// 		allbuttonBlue();
// 	}
// 	else if (currentButton.value=='random'){
// 		allbuttonRandom();
// 	}
// 	else{
// 		allbuttonReset();
// 	}
// }

// function allbuttonRed(){
// 	for (let i=0; i<allbuttons.length; i++){
// 		allbuttons[i].classList.remove(allbuttons[i].classList[1]); //using class list
// 		allbuttons[i].classList.add('reset');
//     }
// }

// function allbuttonGreen(){
// 	for (let i=0; i<allbuttons.length; i++){
// 		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
// 		allbuttons[i].classList.add('insta')
// 	}
// }

// function allbuttonBlue(){
// 	for (let i=0; i<allbuttons.length; i++){
// 		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
// 		allbuttons[i].classList.add('clickme');
// 	}
// }

// function allbuttonReset(){
// 	for (let i=0; i<allbuttons.length; i++){
// 		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
// 		allbuttons[i].classList.add(buttonsCopy[i]);
// 	}
// }

// function allbuttonRandom(){

// 	for (let i=0; i<allbuttons.length; i++){

// 		let random=Math.floor(Math.random()*buttonsCopy.length);

// 		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
// 		allbuttons[i].classList.add(buttonsCopy[random]);
// 	}

// }


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

