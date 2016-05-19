$(function(){

    var container = $("#container");

    setInterval(function(){
		container.shuffleLetters({
			"text": "Impresos La Paz, S.A de C.V"
		});
    },15000);
	
});

