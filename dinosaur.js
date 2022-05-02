	const player = document.querySelector('.player');

	const sun = document.querySelector('.sun');
	const sky = document.querySelector('body');

	const ground = document.querySelector('.ground');
	const groundContext = ground.children;

	const dinoHead = document.querySelector('.dino-head');
	const playerLeg1 = document.querySelector('.leg3');
	const playerLeg2 = document.querySelector('.leg4');

	const playerEye1 = document.querySelector('.eye1');
	const playerEye2 = document.querySelector('.eye2');

	
	const cactus1 = document.querySelector('.cactus1');
	const cactus2 = document.querySelector('.cactus2');
	const cactus3 = document.querySelector('.cactus3');
	const cactus4 = document.querySelector('.cactus4');
	const cactus5 = document.querySelector('.cactus5');
	const cactus6 = document.querySelector('.cactus6');

	const birdA = document.querySelector('._birdA');
	const birdB = document.querySelector('._birdB');

	const leg3 = document.querySelector('.leg3');
	const leg4 = document.querySelector('.leg4');

	const dinoShadow = document.querySelector('.dino-shadow');

	const dinoShadowScale = {
		width: parseInt(getComputedStyle(dinoShadow).getPropertyValue('width')),
		height: parseInt(getComputedStyle(dinoShadow).getPropertyValue('height'))
	}


	const cactus1Att = {
		x: parseInt(getComputedStyle(cactus1).getPropertyValue('left')),
		y: parseInt(getComputedStyle(cactus1).getPropertyValue('top'))
	}

	const cactus2Att = {
		x: parseInt(getComputedStyle(cactus2).getPropertyValue('left')),
		y: parseInt(getComputedStyle(cactus2).getPropertyValue('top'))
	}

	const cactus3Att = {
		x: parseInt(getComputedStyle(cactus3).getPropertyValue('left')),
		y: parseInt(getComputedStyle(cactus3).getPropertyValue('top'))
	}

	const cactus4Att = {
		x: parseInt(getComputedStyle(cactus4).getPropertyValue('left')),
		y: parseInt(getComputedStyle(cactus4).getPropertyValue('top'))
	}
	const cactus5Att = {
		x: parseInt(getComputedStyle(cactus5).getPropertyValue('left')),
		y: parseInt(getComputedStyle(cactus5).getPropertyValue('top'))
	}
	const cactus6Att = {
		x: parseInt(getComputedStyle(cactus6).getPropertyValue('left')),
		y: parseInt(getComputedStyle(cactus6).getPropertyValue('top'))
	}
	const birdAAtt = {
		x: parseInt(getComputedStyle(birdA).getPropertyValue('left')),
		y: parseInt(getComputedStyle(birdA).getPropertyValue('top'))
	}
	const birdBAtt = {
		x: parseInt(getComputedStyle(birdB).getPropertyValue('left')),
		y: parseInt(getComputedStyle(birdB).getPropertyValue('top'))
	}




	const score = document.querySelector('.score');

	let highScore = document.querySelector('.high-score');
	let highScoreValue = Number(highScore.textContent);

const game = () => {

	let scoreValue = score.textContent;




function gameOver(message){

	let gameOver = window.confirm(message);
		if(gameOver) {
			location.reload();
		}
		else{
			location.reload();
		}
}

function night(){
	sun.classList.remove('to-sun')
	sun.classList.add('moon');

	sky.classList.remove('light');
	sky.classList.add('dark');

	ground.classList.remove('ground-light');
	ground.classList.add('ground-dark');

		for(let i = 0; i <= groundContext.length - 1; i++){
			groundContext[i].classList.remove('ground-light');
			groundContext[i].classList.add('ground-dark');
		}
}

function day(){
	sun.classList.remove('moon');
	sun.classList.add('to-sun');

	sky.classList.remove('dark');
	sky.classList.add('light');

	ground.classList.remove('ground-dark');
	ground.classList.add('ground-light');
		for(let i = 0; i <= groundContext.length - 1; i++){
			groundContext[i].classList.remove('ground-dark');
			groundContext[i].classList.add('ground-light');
		}
}

			const timeSwitching = () => {
				if(scoreValue === 500){
					night();
				}
				if(scoreValue === 1000){
					day();
				}
				if(scoreValue === 1500){
					night();
				}
				if(scoreValue === 2000){
					day();
				}
				if(scoreValue === 2500){
					night();
				}
				if(scoreValue === 3000){
					day();
				}
			}


// night();


	// console.log(scoreValue);

	

	let isJumping = false;
	let isDucking = false;

	let gravity = 1;
	let speed = 0.0001;
	let jumpVelcoity = speed * 1000;
	let speed2 = 0.04;
	let downVelocity = speed2 * 1000;

	const playerAtt = {
		width: parseInt(getComputedStyle(player).getPropertyValue('width')),
		height: parseInt(getComputedStyle(player).getPropertyValue('height')),
		x: parseInt(getComputedStyle(player).getPropertyValue('left')),
		y: parseInt(getComputedStyle(player).getPropertyValue('top'))
	}

	// console.log(playerAtt.x, playerAtt.y);


	const jump = () => {
		
		if(isJumping) return

		playerLeg1.classList.remove('run3');
		playerLeg2.classList.remove('run4');

		playerLeg1.classList.add('jump1');
		playerLeg2.classList.add('jump2');

		let jumpUp = setInterval(() => {
			playerAtt.y -= 60;
			playerAtt.y = playerAtt.y * gravity;
			player.style.top = playerAtt.y + 'px';
			// console.log(player.style.top);

			if(playerAtt.y <= -35){
				clearInterval(jumpUp);

				setTimeout(() => {
					let down = setInterval(() => {
						playerAtt.y += 30;
						player.style.top = playerAtt.y + 'px';

						if(playerAtt.y >= 230){
							clearInterval(down);
								playerLeg1.classList.add('run3');
								playerLeg2.classList.add('run4');

								playerLeg1.classList.remove('jump1');
								playerLeg2.classList.remove('jump2');
								isJumping = false;
						}
					}, downVelocity);

						

				}, 200);
				
			}
			isJumping = true;
			// console.log(playerAtt.y);


		}, jumpVelcoity);

		let shadowJump = setInterval(() => {
			dinoShadowScale.width -= 20;
			dinoShadow.style.width = dinoShadowScale.width + 'px';
			dinoShadowScale.height -= 20;
			dinoShadow.style.height = dinoShadowScale.height + 'px';

			if(dinoShadowScale.width <= 30 && dinoShadowScale.height <= 30){
				clearInterval(shadowJump);

				let shadowDown = setInterval(() => {
					setTimeout(() => {
						dinoShadowScale.width += 5;
						dinoShadow.style.width = dinoShadowScale.width + 'px';
						dinoShadowScale.height += 5;
						dinoShadow.style.height = dinoShadowScale.height + 'px';
					}, 300)


					if(dinoShadowScale.width >= 50  && dinoShadowScale.height >= 50){
						clearInterval(shadowDown);		
					}
				}, 10)
			}
		}, 10);
			


	}

	const duck = () => {

			if(isJumping === false){
				dinoHead.classList.add('duck');
			}

			isDucking = true;
	}
	
	let gameSpeed = 1;

	const run = () => {
		let obstacles = [cactus1, cactus2, cactus3, cactus4, cactus5];
		obstacles = score.textContent > 800 ? [cactus1, cactus2, cactus3, cactus4, cactus5, birdA, birdB] : obstacles = [cactus1, cactus2, cactus3, cactus4, cactus5]; 

		// gameSpeed = score.textContent > 400 ? 1 * 0.00001: 3 * 0.00001;


		let r = Math.floor(Math.random()*obstacles.length);
		let obstacle = obstacles[r];
		
		let obstacleX = parseInt(getComputedStyle(obstacle).getPropertyValue('left'));
		let obstacleY = parseInt(getComputedStyle(obstacle).getPropertyValue('top'));

			let move = setInterval(() => {
			scoreValue++;
			score.textContent = scoreValue;





			// console.log(obstacles);

			timeSwitching();
			
			

			// console.log(obstacle);
				obstacleX -= 6;
				// obstacleX -= score.textContent > 400 ? obstacleX = obstacleX - 10 : obstacleX = obstacleX - 30; 
				obstacle.style.left = obstacleX + 'px';


				if(obstacleX <= -400){
					clearInterval(move);
					clearInterval(moveFast);

					obstacleX = 1000;
					obstacle.style.left = obstacleX + 'px';

					run();
				}



					if(obstacle !== birdA && obstacle !== birdB){
						if((obstacleX - 170 <= playerAtt.x && obstacleX > 0) && isJumping === false){
							
							

							// console.log(scoreValue, highScoreValue);
							gameOver('Game over, score = ' + scoreValue + '\nrestart?');



							clearInterval(move);
							clearInterval(moveFast);

							if(scoreValue > highScoreValue){
								highScoreValue = scoreValue;
								
								localStorage.setItem('highScore', scoreValue);

								
							}
						}
					}

					if(obstacle == birdA || obstacle == birdB){

						// console.log(obstacleX, playerAtt.x);
						if((obstacleX - 150 <= playerAtt.x && obstacleX > 0) && isDucking === false){
							
							
							// console.log(scoreValue, highScoreValue);
							gameOver('Game over, score = ' + scoreValue + '\nrestart?');

							clearInterval(move);
							clearInterval(moveFast);

							if(scoreValue > highScoreValue){
								highScoreValue = scoreValue;
								
								localStorage.setItem('highScore', scoreValue);

								
							}
						}
					}

				}, gameSpeed);

}


	run();

	

highScore.textContent = localStorage.getItem('highScore');

/////////////////////Key controls///////////////////////////

	document.addEventListener('keydown', e => {
		// console.log(e.keyCode);
		if(e.key === 'ArrowUp' || e.keyCode === 32){
			jump();
		}
		if(e.key === 'ArrowDown'){
			duck();
		}
	});

	document.addEventListener('keyup', e => {
		if(e.key === 'ArrowDown'){
			dinoHead.classList.remove('duck');
			isDucking = false;
		}
	});
}

////////////////////////////////////////////////////////////

game();


// console.log(localStorage);

// let innerDB = [localStorage];
// console.log(innerDB);

// localStorage.setItem('age', 34);
// localStorage.setItem('name', 'Divine');

// console.log(localStorage.getItem("age"));

