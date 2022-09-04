const cat_result = document.getElementById("cat_result"); // Div for the cat image.
const dog_result = document.getElementById("dog_result"); // Div for the dog image.
const cat_btn = document.getElementById("cat_btn"); // Button for the cat image.
const dog_btn = document.getElementById("dog_btn"); // Button for the dog image.

cat_btn.addEventListener('click', getRandomCat);  // An event listener for when clicking the cat_btn button to call the getRandomCat function.
dog_btn.addEventListener('click', getRandomDog);  // An event listener for when clicking the dog_btn button to call the getRandomDog function.

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}
function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) { // incase the api provides an mp4 file instead of an img file call the function again .
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}