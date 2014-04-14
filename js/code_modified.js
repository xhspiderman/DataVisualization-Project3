//File to hold the main code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

var Links=TAFFY();

$(main);

// New mechanism is: input is javascript database object and we will create attribute of number of links
//main function
function main(){
  data();
  initialization()
  Plot(Links().get())
}

//Function to manage the data
function data(){
  row_objects = characters_DB().limit(50) // selected characters
  column_objects = episodes_DB({s:[1,2]}).order("s asec, e asec") // selected episodes
  // Add an id field for each episode record
  column_objects.each(function (record,recordnumber) {
    record.ID = recordnumber+1
  });

  // update the number of episodes field of each character
  row_objects.each(function (record,recordnumber) {
      record.ID = recordnumber+1
      record.linkNum = 0    // initialize the number of links of each character 
      if(record["appearances"].length>0){
          // loop through the episodes
          for(var i=0; i<record["appearances"].length;i++){
              // get the episode to store
              var tempEpisode= episodes_DB({s:[1,2],title:{like:record["appearances"][i].trim()}}).first()
              // var tempEpisode= column_objects.filter({title:{like:record["appearances"][i].trim()}}).first()
              //If we have this episode in database
              if (tempEpisode){
                  record.linkNum +=1
                  Links.insert({"source":record["ID"], "target":tempEpisode["ID"], "value":"1"})
                }
          }
      }
  });

}

function initialization(){

  // Basic setup for plot
    margin = { top: 300, right: 10, bottom: 50, left: 200 },
    cellSize=9;
    col_number=column_objects.count();
    row_number=row_objects.count();
    width = cellSize*col_number, 
    height = cellSize*row_number , 

    colorBuckets = 21,
    colors = ['#005824','#1A693B','#347B53','#4F8D6B','#699F83','#83B09B','#9EC2B3','#B8D4CB','#D2E6E3','#EDF8FB','#FFFFFF','#F1EEF6','#E6D3E1','#DBB9CD','#D19EB9','#C684A4','#BB6990','#B14F7C','#A63467','#9B1A53','#91003F'];
    
    ordered_row_objects = row_objects.order("linkNum desc")
    //  hcrow is used to record location of corresponding target in rowLabel, each number is a target and its label I guess is at Label matrix
    // hcrow = [49,11,30,4,18,6,12,20,19,33,32,26,44,35,38,3,23,41,22,10,2,15,16,36,8,25,29,7,27,34,48,31,45,43,14,9,39,1,37,47,42,21,40,5,28,46,50,17,24,13],
      hcrow = ordered_row_objects.select("ID"); 

    //  hccol is used to record location of corresponding target in colLabel
    // hccol = [6,5,41,12,42,21,58,56,14,16,43,15,17,46,47,48,54,49,37,38,25,22,7,8,2,45,9,20,24,44,23,19,13,40,11,1,39,53,10,52,3,26,27,60,50,51,59,18,31,32,30,4,55,28,29,57,36,34,33,35], // change to gene name or probe id
      hccol = column_objects.select("ID");

      rowLabel = ordered_row_objects.select("page"); 
      // rowLabel = ['1759080_s_at','1759302_s_at','1759502_s_at','1759540_s_at','1759781_s_at','1759828_s_at','1759829_s_at','1759906_s_at','1760088_s_at','1760164_s_at','1760453_s_at','1760516_s_at','1760594_s_at','1760894_s_at','1760951_s_at','1761030_s_at','1761128_at','1761145_s_at','1761160_s_at','1761189_s_at','1761222_s_at','1761245_s_at','1761277_s_at','1761434_s_at','1761553_s_at','1761620_s_at','1761873_s_at','1761884_s_at','1761944_s_at','1762105_s_at','1762118_s_at','1762151_s_at','1762388_s_at','1762401_s_at','1762633_s_at','1762701_s_at','1762787_s_at','1762819_s_at','1762880_s_at','1762945_s_at','1762983_s_at','1763132_s_at','1763138_s_at','1763146_s_at','1763198_s_at','1763383_at','1763410_s_at','1763426_s_at','1763490_s_at','1763491_s_at'], // change to gene name or probe id

      colLabel = column_objects.select("title");
      // colLabel = ['con1027','con1028','con1029','con103','con1030','con1031','con1032','con1033','con1034','con1035','con1036','con1037','con1038','con1039','con1040','con1041','con108','con109','con110','con111','con112','con125','con126','con127','con128','con129','con130','con131','con132','con133','con134','con135','con136','con137','con138','con139','con14','con15','con150','con151','con152','con153','con16','con17','con174','con184','con185','con186','con187','con188','con189','con191','con192','con193','con194','con199','con2','con200','con201','con21']; // change to contrast name
      
};

function Plot(data) {

      // color scale
      var colorScale = d3.scale.quantile()
          .domain([ -10 , 0, 10])
          .range(colors);
      
      var svg = d3.select("#chart").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
          ;

      var rowLabels = svg.append("g")
          .selectAll(".rowLabelg")
          .data(rowLabel)
          .enter()
          .append("text")
          .text(function (d) { return d; })
          .attr("x", 0)
          .attr("y", function (d, i) { return i * cellSize; })
          .style("text-anchor", "end")
          .attr("transform", "translate(-6," + cellSize / 1.5 + ")")
          .attr("class", function (d,i) { return "rowLabel mono r"+i;} ) 
          .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
          .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})
          ;

      var colLabels = svg.append("g")
          .selectAll(".colLabelg")
          .data(colLabel)
          .enter()
          .append("text")
          .text(function (d) { return d; })
          .attr("x", 0)
          .attr("y", function (d, i) { return hccol.indexOf(i+1) * cellSize; })
          .style("text-anchor", "left")
          .attr("transform", "translate("+cellSize/2 + ",-6) rotate (-90)")
          .attr("class",  function (d,i) { return "colLabel mono c"+i;} )
          .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
          .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})
          ;

      var heatMap = svg.append("g").attr("class","g3")
            .selectAll(".cellg")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d) {
            // console.log(d) 
              return hccol.indexOf(d.target) * cellSize; })
            .attr("y", function(d) { return hcrow.indexOf(d.source) * cellSize; })
            .attr("class", function(d){return "cell cell-border cr"+(d.row-1)+" cc"+(d.col-1);})
            .attr("width", cellSize)
            .attr("height", cellSize)
            .style("fill", function(d) { return colorScale(d.value); })

            .on("mouseover", function(d){
                   //highlight text
                   d3.select(this).classed("cell-hover",true);
                   d3.selectAll(".rowLabel").classed("text-highlight",function(r,ri){ return ri==(d.source-1);});
                   d3.selectAll(".colLabel").classed("text-highlight",function(c,ci){ return ci==(d.target-1);});
            
                   //Update the tooltip position and value
                   d3.select("#tooltip")
                     .style("left", (d3.event.pageX+15) + "px")
                     .style("top", (d3.event.pageY-15) + "px")
                     .select("#value")
                     .text("Character: "+rowLabel[hcrow.indexOf(d.source)]+"\n Episode: "+colLabel[hccol.indexOf(d.target)]);  
                   //Show the tooltip
                   d3.select("#tooltip").classed("hidden", false);
            })
            .on("mouseout", function(){
                   d3.select(this).classed("cell-hover",false);
                   d3.selectAll(".rowLabel").classed("text-highlight",false);
                   d3.selectAll(".colLabel").classed("text-highlight",false);
                   d3.select("#tooltip").classed("hidden", true);
            })
            ;
};