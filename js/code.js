//File to hold the main code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

//main function
function main(){
	//Initialice with first episode
	var sel_episodes = [1]
	//collage(); //Create a collage with all the images as initial page of the app
	paintCharacters();
	paintEpisodes();
	paintLocations(sel_episodes);
}

//Function to create a collage of images using d3
function collage(){
	var character_info = [];
	var circle = []; 
	var radio = 0;
	//Create canvas div to append images
	var canvas = d3.select("#home")
	        .append('div')
	        .attr('class', 'canvas');
	//Get information for the characters in an array
	    var img = d3.select(".canvas").selectAll("img")
	    		.data(character.info)
	    		.enter()
	    		.append('img')
	    		.attr('class','image')
	    		.attr('width',50)
	    		.attr('height',50)
	    		.attr('src',function(d){
	    			return d.image;
	    		})
	    		.style('top',function(){
	    			return String(Math.random()*680)+'px';
	    		})
	    		.style('left',function(){
	    			return String(Math.random()*1230)+'px';
	    		});
}
//function to create character selector
function paintCharacters(){
	var data = characters_info_DB().limit(22).get()
	
	var canvas = d3.select("#home")
		        .append('div')
		        .attr('class', 'canvas')
		        .append('div')
		        .attr('id','characters_select')
		        .append('div')
	/*canvas.append('button')
		  .attr('class','left');
	canvas.append('button')
		    .attr('class','right');*/
	var img = d3.select("#characters_select").selectAll("img")
		    		.data(data)
		    		.enter()
		    		.append('img')
		    		.attr('class','image')
		    		.attr('width',function(d,i){
		    			if(i==0) return 15;
		    			if(i==1) return 27;
		    			if(i==2) return 40;
		    			if(i==19) return 40;
		    			if(i==20) return 27;
		    			if(i==21) return 15;
		    			else return 55;
		    			// return 55
		    		})
		    		.attr('height',function(d,i){
		    			if(i==0) return 15;
		    			if(i==1) return 27;
		    			if(i==2) return 40;
		    			if(i==19) return 40;
		    			if(i==20) return 27;
		    			if(i==21) return 15;
		    			else return 55;
		    			// return 55
		    		})
		    		.attr('src',function(d){
		    			return d.image;
		    		})
		    		.style('top',20)
		    		.style('position','relative')
		    		.style('float','left')
}

function paintEpisodes(){
	var data = episodes_info_DB().limit(22).get();
	var episodes_select = d3.select(".canvas")
			.append('svg')
			.style("border", "1px solid black")
			.attr('id','svg')
			.append('g')
			.attr('id','episodes')
			.attr('transform','translate(100,150)')
	/*episodes_select.append('button')
			.attr('class','left');
	episodes_select.append('button')
			.attr('class','right');*/
	/*var cluster = d3.layout.cluster()
    			.size([1000, 400]);*/

	var nodes = d3.select('#episodes').selectAll('g')
			.data(data)
			.enter()
			.append('g')
			.attr('class','episode_group')
			.append('rect')
			.attr('class','episode_rect')
			.attr('transform', function(d,i){
				return "translate("+ String(50*i)+ ",0)"
			})
			.attr('width',function(d,i){
				return 50;
			})
			.attr('height',function(d,i){
				return 50;
			})
			.attr('stroke', 'black')
			.style('fill', 'white')
   	var text = d3.selectAll('.episode_group').append('text')
			.text(function(d,i){
				return 'Season: '+String(d.seasonNum)+'Episode: '+String(d.episodeNum);
			})
			.attr("transform", function(d,i){
				return "translate("+ String(50*i+48)+ ",0)"
			})
			.attr('y', 10)
			.attr('text-anchor', 'middle')
			.attr('fill', 'black')
			.attr('class','episode_text')

    var link = d3.selectAll('.episode_group')
	      				.append('path')
	      				.attr('class', 'link')
	      				.attr('d','M 20 51 L 280 200')
	      				.attr('stroke','red')
	      				.attr('stroke-width','2')

	/*var paths =	d3.select('.episode_group').selectAll("path")
    		.data(cluster.links(nodes))
  			.enter().append("path")
    		.attr("d", d3.svg.diagonal());*/
}

function paintLocations(sel_episodes){
	//This variable will hold the selected episode to visualize
	var sel_episodes=sel_episodes;
	var data = locations_DB().limit(22).get();
	var svg = d3.select('svg')
				.append('g')
				.attr('id','locations')
				.attr('transform','translate(100,350)')

	var rect = d3.select('#locations').selectAll('g')
			    		.data(data)
			    		.enter()
			    		.append('g')
			    		.attr('class','location_group')
			    		.append('rect')
			    		.attr('transform', function(d,i){
			    			return "translate("+ String(50*i)+ ",0)"
			    		})
			    		.attr('width',function(d,i){
			    			return 50;
			    		})
			    		.attr('height',function(d,i){
			    			return 50;
			    		})
			    		.attr('stroke', 'black')
			    		.style('fill', 'white')

	var text = d3.selectAll('.location_group').append('text')
   						.text(function(d,i){
   							return String(d.location);
   						})
   						.attr("transform", function(d,i){
			    			return "translate("+ String(50*i+30)+ ",0)"
			    		})
    					.attr('y', 10)
    					.attr('text-anchor', 'middle')
    					.attr('fill', 'black')
    					.attr('class','episode_text')
}	
$(main);