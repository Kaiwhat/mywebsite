const images = [
	"/public/images/image1.jpg",
	"/public/images/image2.jpg",
	"/public/images/image3.jpg",
	"/public/images/image4.jpg",
	"/public/images/image5.jpg",
	"/public/images/image6.jpg"
];
let currentimg = 0;

const changeimg = (num) => {
	currentimg = (currentimg + num + 6) % 6;
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

let currentJob = 0;

function togglePrev() {
	currentJob = (currentJob+3)%4;
	SetState();
}

function toggleNext() {
	currentJob = (currentJob+1)%4;
	SetState();
}

function SetState() {
	let job1 = document.getElementById("job1");
	let job2 = document.getElementById("job2");
	let job3 = document.getElementById("job3");
	let job4 = document.getElementById("job4");
	if (currentJob === 1) {
		job1.style.display = "none";
		job2.style.display = "block";
		job3.style.display = "none";
		job4.style.display = "none";
	} else if (currentJob === 2) {
		job1.style.display = "none";
		job2.style.display = "none";
		job3.style.display = "block";
		job4.style.display = "none";
	} else if (currentJob === 3) {
		job1.style.display = "none";
		job2.style.display = "none";
		job3.style.display = "none";
		job4.style.display = "block";
	} else {
		job1.style.display = "block";
		job2.style.display = "none";
		job3.style.display = "none";
		job4.style.display = "none";
	}
}