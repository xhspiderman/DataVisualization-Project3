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
	var data = characters_info_DB().limit(22).get()
	
	var canvas = d3.select("#home")
		        .append('div')
		        .attr('class', 'canvas')
		        .append('div')
		        .attr('id','characters_select')
		        .append('div')
		        .attr('class','button');
	canvas.append('button')
		  .attr('class','left');
	canvas.append('button')
		    .attr('class','right');
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
	var positioning = [];
	var scaled_data =[];
	var linearScale = d3.scale.linear()
                   .domain([0,1000])
                   .range([0,100]);
	/*for (var i=0; i<22;i++){
		positioning.push(i*50);
		newScaledData[i] = linearScale(initialScaleData[i]);
	}*/
	var episodes_select = d3.select(".canvas")
			        .append('div')
			        .attr('id','episodes_select')
			        .append('div')
			        .attr('class','button');
	episodes_select.append('button')
			.attr('class','left');
	episodes_select.append('button')
			.attr('class','right');
	var svg = episodes_select.append('svg')
				.style("border", "1px solid black")
				.attr('id','svg_episode')

	var rect = d3.select('svg').selectAll('g')
			    		.data(data)
			    		.enter()
			    		.append('g')
			    		.attr('class','episode_group')
			    		.append('rect')
			    		.attr("transform", function(d,i){
			    			return "translate("+ String(50*i)+ ",0)"
			    		})
			    		.attr('width',function(d,i){
			    			return 50;
			    		})
			    		.attr('height',function(d,i){
			    			return 50;
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
   						.attr("transform", function(d,i){
			    			return "translate("+ String(50*i)+ ",0)"
			    		})
    					.attr('x', 0)
    					.attr('y', 20)
    					.attr('fill', 'black')
    					.style('position','relative')
			    		.style('float','left')
}

$(main);