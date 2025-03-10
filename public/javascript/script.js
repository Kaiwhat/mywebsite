const images = [
	"/public/images/image1.jpg",
	"/public/images/image2.jpg",
	"/public/images/image3.jpg",
	"/public/images/image4.jpg",
	"/public/images/image5.jpg",
];
let currentimg = 0;

const changeimg = (num) => {
	currentimg = (currentimg + num + 5) % 5;
	document.getElementById("main_image").src = images[currentimg];
};

let intervalId;
const interval = 5000; // 5秒

function startAutoPlay() {
	intervalId = setInterval(() => {
		changeimg(1);
	}, interval);
}

startAutoPlay();
