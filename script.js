
let name = 'leo'; 
let age = 13;
console.log('leo');
console.log(13);
let wordsArray = ['car', 'game', 'delete', 'mice', 'telefon', 'box', 'change', 'bild', 'oneal', 'secret', 'images']
let	word;
let random;
let letter;
let letters=[];
let allright=false;
let temp=''; 

function startGame() {
	random = Math.floor(Math.random()*11); 
	console.log(wordsArray[random])
	word= wordsArray[random]
	let out='';
	for(let i=0; i < word.length; i++){
		out=out+'*';
		

	}
	document.getElementById('secret-word').value=out;
}

function check() {
	temp='';
	letter= document.getElementById('check').value;
	allright= false;
	letters.push(letter)
	for(let i=0; i < word.length; i++){
		let char=word[i]
		if (letters.indexOf(char) != -1) {
			temp=temp+char;
			document.getElementById("check").style.color='green';
			setTimeout(function () {
				document.getElementById("check").style.color='white';
			}, 1000)
			setTimeout(function () {
				document.getElementById('check').value='';
			}, 1500)

		} else {
			temp=temp+'*';
		}
		document.getElementById('secret-word').value=temp;
		if (letter==word[i]) {
			allright=true;
		}
	}
	if(allright==false){
		//alert('буква не угадана')
		document.getElementById('span').innerHTML=document.getElementById('span').innerHTML-1;
		if (document.getElementById('span').innerHTML==0) {
			document.getElementById('check').style.display='none';
			document.getElementById('gameOver').style.display='block';
			document.getElementById('btn1').style.display='none';
			document.getElementById('btn2').style.display='none';

		}
			document.getElementById("span").style.color='red';

			setTimeout(function () {
				document.getElementById("span").style.color='rgb( 228, 173, 234 )';
			}, 1000)
	}


}