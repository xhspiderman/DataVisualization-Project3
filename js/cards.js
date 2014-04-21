//File to hold the selection code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014
function cards () {
 	plotCard();
 }

 function plotCard(){
 	var card = $( "<div>" ).insertAfter( "#tags" )
 				.attr( "id", "card" );
 	var info_name = $('#card').append('<p id="name">' + Characters_to_show.get()[0].name + '</p>')
 	var image = $("#card").append("<img id='image' src=' " + Characters_to_show.get()[0].thumbURL + "'></img>");

 	var info = $("<div>").insertAfter('#image')
 				.attr('id','info');

 	var buttons = $( "<ul>" ).insertBefore( "#name" )
 					.attr( "class", "pager" )
 					.attr( "id", "buttons" )
 					.append("<li><a id='prev' href='#'>Prev</a></li><li><a id='next' href='#'>Next</a></li>")


 	if (Characters_to_show.get()[0].isAlive==true) var alive = "Alive"
 	else var alive = "Dead"
 	if (Characters_to_show.get()[0].gender=="M") var g = "Male"
 	else var g = "Female"

 	var info_isAlive = $('#info').append('<p>' + alive + '</p>')
 	var info_age = $('#info').append('<p>'+ Characters_to_show.get()[0].age + ' years </p>')
 	var info_gender = $('#info').append('<p>'+ g +'</p>')
 	var info_voicedBy = $('#info').append('<p>Voiced by: '+ Characters_to_show.get()[0].voicedBy +'</p>')
 	var info_totalAppear = $('#info').append('<p>'+ Characters_to_show.get()[0].totalAppear +' Appearances</p>')


 	$( "#prev" ).click(function() {
  		console.log('Prev') ;
  		var Max = Characters_to_show.get().length-1;
  		charact_card = charact_card -1;
  		if (charact_card <0) charact_card = Max;
  		update(charact_card);
	});
	$( "#next" ).click(function() {
  		console.log('next') ;
  		Max = Characters_to_show.get().length-1;
  		charact_card = charact_card +1;
  		if (charact_card >Max) charact_card = 0;
  		update(charact_card);
	});

 }

 function update (i){
 		console.log(i)
 		$('#name').remove()
 		$('#info').remove()
 		$('#image').remove()
 		var info_name = $('#card').append('<p id="name">' + Characters_to_show.get()[i].name + '</p>')
 		var image = $("#card").append("<img id='image' src=' " + Characters_to_show.get()[i].thumbURL + "'></img>");
 		var info = $("<div>").insertAfter('#image')
 				.attr('id','info');
 		age = Characters_to_show.get()[i].age
 		voicedBy = Characters_to_show.get()[i].voicedBy
 		totalAppear = Characters_to_show.get()[i].totalAppear
 		info_name = $('#info').append('<p>' + Characters_to_show.get()[i].name + '</p>')
 		//info_isAlive = $('#info').append('<p>' + alive + '</p>')
 		info_age = $('#info').append('<p>'+ Characters_to_show.get()[i].age + ' years </p>')
 		//info_gender = $('#info').append('<p>'+ g +'</p>')
 		info_voicedBy = $('#info').append('<p>Voiced by: '+ Characters_to_show.get()[i].voicedBy +'</p>')
 		info_totalAppear = $('#info').append('<p>'+ Characters_to_show.get()[i].totalAppear +' Appearances</p>')
 	}