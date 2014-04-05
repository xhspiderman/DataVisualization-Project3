//File to hold the main code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

//main function
function main(){
	collage(); //Create a collage with all the images as initial page of the app
}

//Function to create a collage of images using d3
function collage(){
	var character_info = [];
	var circle = []; 
	var radio = 0;
	//Create canvas div to append images
	var div = d3.select("#home")
	        .append('div')
	        .attr('class', 'canvas')
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
	    		})
}
$(main);