//File to hold the selection code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

//Function to create the information shown in the character Card
function updateChar (i){
		$('#char_card').remove()
		var card = $( "<div>" ).insertAfter( "#tags" )
		.attr( "id", "char_card" );
		var info_name = $('#char_card').append('<p id="name">' + i[0].name + '</p>')
		if (i[0].thumbURL.length !=0) var image = $("#char_card").append("<img id='char_image' src=' " + i[0].thumbURL + "'></img>");
		else var image = $("#char_card").append("<img id='char_image' src='nophoto.jpg'></img>");
		var info = $("<div>").insertAfter('#char_image')
				.attr('id','info_char');
		if (i[0].gender == 'M') var gender = 'Male';
		else var gender = 'female';
		if (i[0].isAlive == true) var status= 'Alive';
		else var status = 'Dead';
		age = i[0].age
		voicedBy = i[0].voicedBy
		totalAppear = i[0].totalAppear
		if (i[0].age.length > 1) info_age = $('#info_char').append('<p id="age">Age varies: '+ i[0].age + ' years </p>')
		else if (i[0].age.length==0) console.log('nothing')
		else info_age = $('#info_char').append('<p id="age">'+ i[0].age + ' years </p>')
		info_isAlive = $('#info_char').append('<p id="status">' + status + '</p>')
		//info_gender = $('#info_char').append('<p id="gender">'+ gender +'</p>')
		info_voicedBy = $('#info_char').append('<p id="voiced">Voiced by: </p>')
		for (each in i[0].voicedBy){
			info_voicedBy.append('<a href="#data"> ' + i[0].voicedBy[each] + ' <br> </a>')
		}
		info_totalAppear = $('#info_char').append('<p id="appearances">'+ i[0].totalAppear +' Appearances</p>')

		//Manage the clicking on the voicedBy character card
		$( "#char_card a" ).click(function() {
			var querystring = this.text
			Characters_to_show = characters_episodes_DB(function () {
			    for(var i=0; i<this.voicedBy.length;i++){
				    return (this.voicedBy[i].trim() == querystring) ? true : false;
			    }
			    return false
			})
	  		//Characters_to_show=characters_episodes_DB({voicedBy:{"like": this.text}})
	  		//Plot the heatmap again with the new selection
	  		plotMain();
  			plotCo();
		});
}

function updateEpisode (i){
		$('#info_episode').remove()
		var card = $( "<div>" ).insertAfter( "#char_card" )
		.attr( "id", "episode_card" );
		var info_title = $('#episode_card').append('<p id="name">' + i[0].title + '</p>')
		var info =	$('#episode_card').append('<div>')
						.attr('id','info_episode');
		var info_season = $('#info_episode').append('<p id="season">' + i[0].s + 'th. Season</p>')
		var info_episode = $('#info_episode').append('<p id="episode">'+ i[0].e + 'th. Episode</p>')
		var info_airing = $('#info_episode').append('<p id="aired">'+ i[0].airing +'</p>')
		//calculate locations
		locations_img = location_url(i[0].title);
		locations_name = location_name(i[0].title);
		if (locations_img[location_shown].length != 0 && locations_img[location_shown]!="None") var image = $("#info_episode").append("<img id='episode_image' src=' " + locations_img[location_shown][0] + "'></img>");
		else var image = $("#info_episode").append("<img id='episode_image' src='noimage.jpg'></img>");

		//Manage the clicking on next and previous for locations in episode card
		$( "#next" ).click(function() {
	  		if (location_shown < locations_img.length-1) location_shown = location_shown + 1;
	  		else location_shown = 0;
	  		console.log(location_shown)
	  		$('#episode_image').remove()
	  		$('#location_name').remove()
	  		var location_name = $('#info_episode').append('<p id="location_name">' + locations[location_shown].location + '</p>')
	  		if (locations_img[location_shown].length != 0 && locations_img[location_shown]!="None") var image = $("#info_episode").append("<img id='episode_image' src=' " + locations_img[location_shown][0] + "'></img>");
	  		else var image = $("#info_episode").append("<img id='episode_image' src='noimage.jpg'></img>");
		});
		$( "#prev" ).click(function() {
			if (location_shown > 0) location_shown = location_shown - 1;
	  		else location_shown = locations_img.length-1;
	  		console.log(location_shown)
	  		$('#episode_image').remove()
	  		$('#location_name').remove()
	  		var location_name = $('#info_episode').append('<p id="location_name">' + locations[location_shown].location + '</p>')
	  		if (locations_img[location_shown].length != 0 && locations_img[location_shown]!="None") var image = $("#info_episode").append("<img id='episode_image' src=' " + locations_img[location_shown][0] + "'></img>");
	  		else var image = $("#info_episode").append("<img id='episode_image' src='noimage.jpg'></img>");
		});

		//we use this function to calculate the locations for each episode
		function location_url(episode){
			var location_url = [];
			locations = locations_DB({appearances:{"like": episode}}).get();
			for (each in locations){
				location_url.push(locations[each].thumbURL)
			}
			return location_url
		}

		function location_name(episode){
			var location_name = [];
			locations = locations_DB({appearances:{"like": episode}}).get();
			$('#info_episode').append('<p id="locations"><u> Locations in the episode</u></p>')
			if (locations_img.length > 1) var buttons = $("#info_episode").append('<ul class="pager"><li class="Next"><a id="prev" href="#1">&larr; Prev</a></li><li class="next"><a id="next" href="#2">Next &rarr;</a></li></ul>')
			var location_name = $('#info_episode').append('<p id="location_name">' + locations[0].location + '</p>')
			for (each in locations){
				location_name.push(locations[each].location)
			}
			return location_name
		}
}