let cats = [
	{
		name: "Miki",
		img: "cat.jpg",
		numClicks: 0
	},
	{
		name: "Spasoje",
		img: "cat2.jpg",
		numClicks:0
	}
];

let containerHtml = '';
// Displays all cat names from cats array
for(let i = 0; i < cats.length; i++) {
	containerHtml += `
		<article>
			<h1>${cats[i].name}</h1>
			<img src="img/${cats[i].img}" alt="${cats[i].name} the cat" data-cat="${cats[i].name}">
        	<h2>Number of clicks <span>${cats[i].numClicks}</span></h2>
        </article>
		`;
}

$(".container").append(containerHtml);

/*cats.foreach( function (index) {
	console.log(cats[index].name);
	console.log($(this));
	$(this).text(cats[index].name);
});*/

$("img").click( function() {
		for(let i = 0; i < cats.length; i++) {
			if($(this).attr("data-cat") === cats[i].name) {
				cats[i].numClicks++;
				$(this).next().find("span").text(cats[i].numClicks);

			}
		}
	}
);