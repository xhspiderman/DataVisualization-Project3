//File to hold the selection code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

//Function to create the information shown in the character Card
function updateChar (i){
		$('#card').remove()
		var card = $( "<div>" ).insertAfter( "#tags" )
		.attr( "id", "card" );
		var info_name = $('#card').append('<p id="name">' + i[0].name + '</p>')
		var image = $("#card").append("<img id='image' src=' " + i[0].thumbURL + "'></img>");
		var info = $("<div>").insertAfter('#image')
				.attr('id','info');
		age = i[0].age
		voicedBy = i[0].voicedBy
		totalAppear = i[0].totalAppear
		info_name = $('#info').append('<p>' + i[0].name + '</p>')
		info_isAlive = $('#info').append('<p>' + i[0].isAlive + '</p>')
		info_age = $('#info').append('<p>'+ i[0].age + ' years </p>')
		info_gender = $('#info').append('<p>'+ i[0].gender +'</p>')
		info_voicedBy = $('#info').append('<p>Voiced by: </p>')
		for (each in i[0].voicedBy){
			console.log('<a href="#data">' + i[0].voicedBy[each] + ' </a> </p>')
			info_voicedBy.append('<a href="#data"> ' + i[0].voicedBy[each] + ' </a> </p>')
		}
		info_totalAppear = $('#info').append('<p>'+ i[0].totalAppear +' Appearances</p>')

		//Manage the clicking on the voicedBy character card
		$( "#card a" ).click(function() {
	  		Characters_to_show=characters_episodes_DB({voicedBy:{"like": this.text}})
	  		//Plot the heatmap again with the new selection
	  		plotMain();
  			plotCo();
		});
}