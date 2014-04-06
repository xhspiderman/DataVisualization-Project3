//File to hold the main code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

//main function
function main(){
	//collage(); //Create a collage with all the images as initial page of the app
	paintCharacters();
	paintEpisodes();
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
	console.log('executing')
	var data = characters_info_DB().limit(22).get()
	
	var canvas = d3.select("#home")
		        .append('div')
		        .attr('class', 'canvas')
		        .append('div')
		        .attr('id','characters_select')
		        .append('div')
		        .attr('class','button');
	canvas.append('button')
		  .attr('id','left');
	canvas.append('button')
		    .attr('id','right');
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
	var data = episodes_info_DB().limit(22).get()
	var canvas = d3.select(".canvas")
			        .append('div')
			        .attr('id','episodes_select')
			        .append('div')
			        .attr('class','button');
	canvas.append('button')
			.attr('id','left');
	canvas.append('button')
			.attr('id','right');
	var svg = d3.select('#episodes_select').append('svg')
				.style("border", "1px solid black");

	var rect = d3.select('svg').selectAll('g')
			    		.data(data)
			    		.enter()
			    		.append('g')
			    		.attr('class','episode_group')
			    		.append('rect')
			    		.attr('width',function(d,i){
			    			if(i==0) return 15;
			    			if(i==1) return 27;
			    			if(i==2) return 40;
			    			if(i==19) return 40;
			    			if(i==20) return 27;
			    			if(i==21) return 15;
			    			else return 55;
			    		})
			    		.attr('height',function(d,i){
			    			if(i==0) return 15;
			    			if(i==1) return 27;
			    			if(i==2) return 40;
			    			if(i==19) return 40;
			    			if(i==20) return 27;
			    			if(i==21) return 15;
			    			else return 55;
			    		})
			    		.attr('stroke', 'black')
			    		.style('top',50)
			    		.style('position','relative')
			    		.style('float','left')
			    		.style('fill', 'white')
   	var text = d3.selectAll('.episode_group').append('text')
   						.text(function(d,i){
   							return 'Season: '+String(d.seasonNum)+'Episode: '+String(d.episodeNum);
   						})
    					.attr('x', 0)
    					.attr('y', 20)
    					.attr('fill', 'black')
    					.style('position','relative')
			    		.style('float','left')
	/*rect = d3.select('svg').append('rect').transition().duration(500).attr('width', 150)
                .attr('height', 100)
                .attr('x', 40)
                .attr('y', 100)
                .style('fill', 'white')
                .attr('stroke', 'black')
	text = svg.append('text').text('Ep:1 Season:1')
                .attr('x', 50)
                .attr('y', 150)
                .attr('fill', 'black')*/
}
$(main);