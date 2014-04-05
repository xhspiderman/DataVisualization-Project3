//File to hold the main code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

//main function
function main(){
	//collage(); //Create a collage with all the images as initial page of the app
	paintSelector();
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
function paintSelector(){
	var data = []
	for (var i=0;i<22;i++){
		data.push(character.info[i])
	}
	var canvas = d3.select("#about")
		        .append('div')
		        .attr('class', 'canvas')
		        .append('div')
		        .attr('id','character_select')
		        .append('div')
		        .attr('class','button');
	canvas.append('button')
		  .attr('id','left');
	canvas.append('button')
		    .attr('id','right');
	var img = d3.select("#character_select").selectAll("img")
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
		    		.attr('src',function(d){
		    			return d.image;
		    		})
		    		.style('top',20)
		    		.style('position','relative')
		    		.style('float','left')
}
$(main);