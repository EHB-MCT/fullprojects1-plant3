var $reveal = $(".hiddenImage .reveal"){
    	console.log("Script is running!");
	var $reveal = $(".reveal");
	$reveal.draggable({
		axis: "x",
		containment: "parent",
		iframeFix: true,
		refreshPositions: true,
		drag: function () {
			var position = $(this).position();
			var parentWidth = $(this).parent().width();
			var width = (position.left / parentWidth) * 100;
			$(".featured").width(width + "%");
		},
	});
};