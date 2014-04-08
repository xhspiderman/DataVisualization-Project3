//File to hold the main code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

//main function
function main(){
  input=createData();
  drawData(input);
}

//Function to create input data
function createData(){
var tempLinks=[];
    var tempNodes=[];
    var input_DB = TAFFY();
    characters_DB().limit(15).each(function(record,recordnumber){
        
        if(record["appearances"].length>0){
            // input_DB.insert({"name":record["page"]});

            // console.log(record["appearances"])
            for(var i=0; i<record["appearances"].length;i++){
                input_DB.insert({"name":record["page"]});
                input_DB.insert({"name":record["appearances"][i]});
                tempLinks.push({"source":record["page"], "target":record["appearances"][i], "value":"1.0"})
            }
        }
    })
    tempNodesName = input_DB().distinct("name")
    for(var i=0; i<tempNodesName.length; i++){
        var tempNUM = input_DB({name:tempNodesName[i]}).count()
        // var tempNUM = 1
        tempNodes.push({"name":tempNodesName[i], "linkNUM":tempNUM});
    }
    tempNodes.sort(function(a,b){return a.linkNUM-b.linkNUM});
    tempNodes.reverse()
    var input2= { "links":tempLinks, "nodes":tempNodes}
    return input2;
}

// Function to Plot the input data
function drawData(input){
    var units = "Episodes";
    //position the svg element  
    var margin = {top: 60, right: 10, bottom: 10, left: 10},
        width = 1200 - margin.left - margin.right,
        height = 5740 - margin.top - margin.bottom;
    //create color scale 
    var formatNumber = d3.format(",.0f"),    // zero decimal places
        format = function(d) { return formatNumber(d) + " " + units; },
        color = d3.scale.category20();
     
    // append the svg canvas to the page
    var svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      
    /*var maingroup = .append("g")
                      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");*/
     
    // Set the sankey diagram properties
    var sankey = d3.sankey()
        .nodeWidth(36)
        .nodePadding(10)
        .size([width, height]);
     
    var path = sankey.link();

    inputPlot(input)
     
    // load the data
    function inputPlot(graph) {
     
        var nodeMap = {};
        graph.nodes.forEach(function(x) { nodeMap[x.name] = x; });
        graph.links = graph.links.map(function(x) {
          return {
            source: nodeMap[x.source],
            target: nodeMap[x.target],
            value: x.value
          };
        });
     
      sankey
          .nodes(graph.nodes)
          .links(graph.links)
          .layout(32);
     
    // add in the links
      var link = svg.append("g").selectAll(".link")
          .data(graph.links)
        .enter().append("path")
          .attr("class", "link")
          .attr("d", path)
          .style("stroke-width", function(d) { 
            return 1*Math.max(1, d.dy)/10; })
          .sort(function(a, b) { return b.dy - a.dy; });
     
    // add the link titles
      link.append("title")
            .text(function(d) {
            return d.source.name + " → " + 
                    d.target.name + "\n" + format(d.value); });
     
    // add in the nodes
      var node = svg.append("g")
          .attr("class","node_group")
          .selectAll(".node")
          .data(graph.nodes)
        .enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { 
              return "translate(" + d.x + "," + d.y + ")"; })
          .on("mouseover",nodemouseOver)
          .on("mouseout",nodemouseOut)
        .call(d3.behavior.drag()
          .origin(function(d) { return d; })
          .on("dragstart", function() { 
              this.parentNode.appendChild(this); })
          .on("drag", dragmove));
     
    // add the rectangles for the nodes
      node.append("rect")
          .attr("height", function(d) { return d.dy; })
          .attr("width", sankey.nodeWidth())
          .style("fill", function(d) { 
              return d.color = color(d.name.replace(/ .*/, "")); })
          .style("stroke", function(d) { 
              return d3.rgb(d.color).darker(2); })
          //.on("mouseover",nodemouseOver)
          //.on("mouseout",nodemouseOut)
        .append("title")
          .text(function(d) { 
              return d.name + "\n" + format(d.value); });
     
    // add in the title for the nodes
      node.append("text")
          .attr("x", -6)
          .attr("y", function(d) { return d.dy / 2; })
          .attr("dy", ".35em")
          .attr("text-anchor", "end")
          .attr("transform", null)
          .text(function(d) { return d.name; })
        .filter(function(d) { return d.x < width / 2; })
          .attr("x", 6 + sankey.nodeWidth())
          .attr("text-anchor", "start");
     
    // the function for moving the nodes
      function dragmove(d) {
        d3.select(this).attr("transform", 
            "translate(" + (
                   d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
                ) + "," + (
                       d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
                ) + ")");
        sankey.relayout();
        link.attr("d", path);
      }
      //function when mouseover nodes
      function nodemouseOver(d){
        d3.select(this).style('fill','red')
        link.style('stroke','red')
      }
      //function when mouseout nodes
      function nodemouseOut(){
        d3.select(this).style('fill','black')
      }
  };
}

$(main);