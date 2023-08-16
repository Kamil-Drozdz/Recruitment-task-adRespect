let masonry;
document.addEventListener('DOMContentLoaded', function () {
	const masonryContainer = document.querySelector('.masonry-container');
	masonry = new Masonry(masonryContainer, {
		itemSelector: '.masonry-item',
		gutter: 40,
		percentPosition: true,
	});

	lightbox.option({
		resizeDuration: 200,
		wrapAround: true,
	});
});

document.querySelector('.expand-button').addEventListener('click', function () {
	const newImages = [
		'/assets/projects/Photo (8).png',
		'/assets/projects/Photo (9).png',
		//etc... tutaj mozna dodawac wiecej
	];

	for (let i = 0; i < newImages.length; i++) {
		const newA = document.createElement('a');
		const newImg = document.createElement('img');
		newA.href = newImages[i];
		newA.className = 'masonry-item max-w-[600px]  bg-blue-300 p-4';
		newA.dataset.lightbox = 'gallery';

		newImg.src = newImages[i];
		newImg.alt = 'Zdjęcie ' + (i + 8);

		newA.appendChild(newImg);
		document.querySelector('.masonry-container').appendChild(newA);
		masonry.appended(newA);
	}
	masonry.layout();
});

document.querySelector('.search-icon').addEventListener('click', function () {
	document.querySelector('.search-input').style.display = 'block';
	document.querySelector('.search-input').style.left = '-50px';
	document.querySelector('.search-input').style.top = '20px';
});

document.querySelector('.hamburger').addEventListener('click', function () {
	document.querySelector('.navbar').classList.toggle('hidden');
});
