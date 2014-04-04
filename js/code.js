//File to hold the main code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014
var character_info = [];
var circle = [] 
d=20;

var div = d3.select(".home")
        .append('div')
        .attr('class', 'canvas')
        .attr('width', 1280)
        .attr('height', 720)
        .attr('class','canvas')
//Get information for the characters in an array
for (var i=0;i<character.info.length;i++)
{
	r=Math.random()*60;
	cy=Math.random()*720;
	while(cy<10) cy=Math.random()*720;
	while(cy>650) cy=Math.random()*720;
	cx=Math.random()*1280;
	character_info.push(character.info[i]);
    var img = d3.select(".canvas")
    		.append('img')
    		.attr('class','image')
    		.attr('width',r)
    		.attr('height',r)
    		.attr('src',character_info[i].image)
    		.style('top',String(cy)+'px')
    		.style('right',String(cx)+'px')

	/*circle.push(svg.append('circle')
		.attr("cy", cy)
		.attr("cx", cx)
		.attr("r", r)
		.attr("class","little")
		.style("fill", "transparent")       
	    .style("stroke", "black")     
	    .style("stroke-width", 0.25)
	);
	var defs = svg.append('svg:defs');
            defs.append('svg:pattern')
                .attr('id', 'tile-ww')
                .attr('patternUnits', 'userSpaceOnUse')
                .attr('width', r)
                .attr('height', r)
                .append('svg:image')
                .attr('src', character_info[i].image)
                .attr('x', cx-r*0.9)
                .attr('y', cy-r*0.9)
                .attr('width', r)
                .attr('height', r);*/
}