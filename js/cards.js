//File to hold the selection code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

//Function to create the information shown in the character Card
function updateChar (i){
		$('#char_card').remove()
		var card = $( "<div>" ).insertAfter( "#tags" )
		.attr( "id", "char_card" );
		var info_name = $('#char_card').append('<p id="name">' + i[0].name + '</p>')
		var image = $("#char_card").append("<img id='char_image' src=' " + i[0].thumbURL + "'></img>");
		var info = $("<div>").insertAfter('#char_image')
				.attr('id','info_char');
		age = i[0].age
		voicedBy = i[0].voicedBy
		totalAppear = i[0].totalAppear
		info_isAlive = $('#info_char').append('<p>' + i[0].isAlive + '</p>')
		info_age = $('#info_char').append('<p>'+ i[0].age + ' years </p>')
		info_gender = $('#info_char').append('<p>'+ i[0].gender +'</p>')
		info_voicedBy = $('#info_char').append('<p>Voiced by: </p>')
		for (each in i[0].voicedBy){
			console.log('<a href="#data">' + i[0].voicedBy[each] + ' </a> </p>')
			info_voicedBy.append('<a href="#data"> ' + i[0].voicedBy[each] + ' </a> </p>')
		}
		info_totalAppear = $('#info_char').append('<p>'+ i[0].totalAppear +' Appearances</p>')

		//Manage the clicking on the voicedBy character card
		$( "#char_card a" ).click(function() {
	  		Characters_to_show=characters_episodes_DB({voicedBy:{"like": this.text}})
	  		//Plot the heatmap again with the new selection
	  		plotMain();
  			plotCo();
		});
}

function updateEpisode (i){
		$('#episode_card').remove()
		var card = $( "<div>" ).insertAfter( "#char_card" )
		.attr( "id", "episode_card" );
		var info_title = $('#episode_card').append('<p id="name">' + i[0].title + '</p>')
		var image = $("#episode_card").append("<img id='episode_image' src=' " + i[0].thumbURL + "'></img>");
		var info = $("<div>").insertAfter('#episode_image')
				.attr('id','info_episode');
		var info_season = $('#info_episode').append('<p>' + i[0].s + 'th. Season</p>')
		var info_episode = $('#info_episode').append('<p>'+ i[0].e + 'th. Episode</p>')
		var info_airing = $('#info_episode').append('<p>Aired in: '+ i[0].airing +'</p>')

		//Manage the clicking on the voicedBy character card
		$( "#episode_card a" ).click(function() {
	  		Characters_to_show=characters_episodes_DB({voicedBy:{"like": this.text}})
	  		//Plot the heatmap again with the new selection
	  		plotMain();
  			plotCo();
		});
}