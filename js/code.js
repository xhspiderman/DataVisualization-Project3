//File to hold the main code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014
var character_info = [];
d=20;
//Get information for the characters in an array
for (var i=0;i<character.info.length;i++)
{
	character_info.push(character.info[i].Name);
}
circle = d3.select("svg").append('circle')
	.style("fill", "steelblue")
	.data(character_info)
	.enter().append("circle")
    .attr("cy", 90)
    .attr("cx", 30)
    .attr("r", Math.random()*10)
    .attr("class","little")
	.style("fill", "steelblue")