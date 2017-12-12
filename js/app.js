let cats = [
	{
		name: "Miki",
		img: "cat.jpg",
		numClicks: 0
	},
	{
		name: "Donald",
		img: "cat2.jpg",
		numClicks: 0
	},
	{
		name: "Ana",
		img: "cat3.jpg",
		numClicks: 0
	},
	{
		name: "Arthur",
		img: "cat4.jpg",
		numClicks: 0
	},
	{
		name: "Aragorn",
		img: "cat5.jpg",
		numClicks: 0
	},
	{
		name: "Lilly",
		img: "cat6.jpg",
		numClicks: 0
	}
];

let listHtml = $(".list");
let containerHtml = '';
for(let i = 0; i < cats.length; i++) {

	// Displays cats names
	listHtml.append(`<li>${cats[i].name}</li>`);

	$("li").click(function() {
		console.log($(this).text());

			if( $(this).text() === cats[i].name ) {
				console.log("if!");
				// Displays all cat names, images and num of clicks from cats array
					containerHtml = `
					<article>
						<h1>${cats[i].name}</h1>
						<img src="img/${cats[i].img}" alt="${cats[i].name} the cat" data-cat="${cats[i].name}">
			        	<h2>Number of clicks <span>${cats[i].numClicks}</span></h2>
			        </article>
			`;
			$(".container").html(containerHtml);
		}
	});
	$(".list").append(listHtml);
}

$(".container").on("click", "img", function() {
		console.log("IMG");
		for(let i = 0; i < cats.length; i++) {
			if($(this).attr("data-cat") === cats[i].name) {
				cats[i].numClicks++;
				$(this).next().find("span").text(cats[i].numClicks);

			}
		}
});

$(".container").append(containerHtml);

/*cats.foreach( function (index) {
	console.log(cats[index].name);
	console.log($(this));
	$(this).text(cats[index].name);
});*/

