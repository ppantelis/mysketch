$(document).ready(function(){

	/*Variable for checking if the user is sketching or not.*/
	var sketching=false;
	/*Variable for user points.*/
	var points=0;
	/*Set the tile board for the first time.*/
	refreshboard();

	/*[BUTTON] Toggle bold welcome text button.*/
	$('#bold_button').on('click',function(){
		$('.hereis').toggleClass('hereisnotbold');
	});

	/*[BUTTON] Refresh the tile board.*/
	$('#refresh_button').on('click',refreshboard);

	/*[FUNCTION] Refresh the tile board when the correspoding button is pressed.*/
	function refreshboard(){
			sketching=false;
			points=0;
			$('#points').text(points);
			console.log('ref');
			/*Empty the tile board.*/
			$('#board').empty();
			console.log('emptied');
			/*Set the tile board.*/
			for(i=0;i<16;i++){
				for(j=0;j<16;j++){
					$('#board').append($('<div></div>'));
				}
			}
			console.log('for');
			$('#board div').addClass('tile');
			console.log('added class');
			$('.tile').on('click',startsketching);
			//$('.tile').on('mouseenter',sketch);
			$('.tile').on('dblclick',changecolor);
	}

	/*[FUNCTION] Start sketching when tile clicked.*/
	function startsketching(){
		if(sketching){
			$('.tile').off('mouseenter',sketch);
			sketching=false;
		}
		else{
			$(this).css('opacity','0.5');
			$('.tile').on('mouseenter',sketch);
			sketching=true;
		}
	}
	
	/*[FUNCTION] Change tile background color when clicked.*/
	function changecolor(){
		console.log("this is "+this);
		var color = $(this).css('background-color');
		console.log("its"+color);
		if(color=='rgb(255, 0, 0)'){
			$(this).css('background-color','rgb(0,255,0)');
		}
		else if(color=='rgb(0, 255, 0)'){
			$(this).css('background-color','rgb(0,0,255)');
		}
		else if(color=='rgb(0, 0, 255)'){
			$(this).css('background-color','rgb(255,0,0)');
		}
		else{
			$(this).css('background-color','rgb(255,0,0)');
			points+=1000;
			$('#points').text(points);
		}
	}

	/*[FUNCTION] Sketch tile when hovered.*/
	function sketch(){
		var foundgold=Math.floor(Math.random()*10);
		console.log('foundgold'+foundgold);
		if(foundgold==9){
			console.log('gold');
			$(this).css('background-color','yellow');
		}
		else{
			$(this).css('opacity','0.5');	
		}
		points++;
		$('#points').text(points);
	}

	/*[FUNCTION] Remove a tile on double click.*/
	function remove(){
		$(this).remove();
	}


	/*[HOVER] Sketch on tile hover.*/
	/*$('.tile').hover(function(){
		$(this).css('opacity','0.5');
	});*/

	/*[CLICK] Change tile color on click.*/
	/*$('.tile').click(changecolor);*/

	/*[DOUBLECLICK] Remove tile on double click.*/
	/*$('.tile').dblclick(function(){
		$(this).remove();
	});*/


	

	
});

