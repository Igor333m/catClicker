let click1 = 0;
let click2 = 0;
let cats = ["Miki", "Spasoje"];

$("h1").each( function (index) {
	console.log(cats[index]);
	console.log($(this));
	$(this).text(cats[index]);
});

$("img").click( () => {
		$("h2 span").html(clicks);
		console.log("click");
	}
);