//File to hold the main code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014
//**************************
//GLOBAL VARIABLES
// getting needed data
// Unduplicated link relations 
var tempLinks=TAFFY();
// number version of one to one relationship
var tempLinks_Num=TAFFY();
// Unduplicated nodes
var tempNodes=[];
var tempNodes_character=[];
var tempNodes_episode=[];
var tempNodes_location=[];
// duplicated nodes
var input_DB = TAFFY();
//define the selector
$("select").multipleSelect({
            filter: true,
            placeholder: "Select a group to visualize",
            onClick: function(view) {
               console.log($("select").multipleSelect("getSelects","text"))
               //$("select").multipleSelect("getSelects","text")
            },
            onOptgroupClick: function(view) {
             console.log($("select").multipleSelect("getSelects","text"))
            } 
});


$(main);

//main function
function main(){
  selection();
  data();
  initialization()
  // Plot(data_heatmap)
  Plot(inputData)
}

//Function to manage the data
function data(){
  // Loop through each characters
  characters_DB().limit(50).each(function(record,recordnumber){
      // if there is any episode this character appears in
      if(record["appearances"].length>0){
          // loop through the episodes
          for(var i=0; i<record["appearances"].length;i++){

              // get the episode to store
              var tempEpisode= episodes_DB({title:{like:record["appearances"][i].trim()}}).first()
              //If we have this episode in database
              if (tempEpisode){
                  // Store the Characters Column Node 
                  input_DB.insert({"name":record["page"], "type":"character"});
                  // Store the Episodes Column Node
                  input_DB.insert({"name": tempEpisode.title, "type":"episode","season": tempEpisode.s,"episode":tempEpisode.e});
                  tempLinks.insert({"source":record["page"], "target":tempEpisode.title, "value":"1"})
                }else{

                }
          }
      }
  })
  // get rid of duplicated node records
  tempNodesName = input_DB().distinct("name")
  for(var i=0; i<tempNodesName.length; i++){
      var currentNodes = input_DB({name:tempNodesName[i]})
      var tempNUM = currentNodes.count()
      var currentNodeType = currentNodes.first().type
      if(currentNodeType=="character"){
          tempNodes_character.push({"name":tempNodesName[i], "linkNUM":tempNUM, "type":"character"});
      }else if(currentNodeType=="episode"){
          tempNodes_episode.push({"name":tempNodesName[i], "linkNUM":tempNUM, "type":"episode", "season":currentNodes.first().season, "episode":currentNodes.first().episode});
      }else{
        // This type is location
          tempNodes_location.push({"name":tempNodesName[i], "linkNUM":tempNUM, "type":"location"});
      }   
  }
  tempNodes_character.sort(linkNumSort);
  tempNodes_episode.sort(EpisodeSort);
  tempNodes= tempNodes_character.concat(tempNodes_episode)

//************************************************
//Internal Functions for Data Function
  function linkNumSort(a,b){
        return b.linkNUM-a.linkNUM
      }

  function EpisodeSort(a,b){
    if(a.type=="episode" && b.type=="episode"){
      return a.episode-b.episode
    }else{
      return 0
    }
  }
  tempLinks().each(function (record,recordnumber) {
    var rowNUM = indexReturn(tempNodes_character, record.source, "name")
    var colNUM = indexReturn(tempNodes_episode, record.target, "name")
    // console.log(rowNUM)
    if(rowNUM && colNUM){
      tempLinks_Num.insert({"row":rowNUM, "col":colNUM, "value":1 })
    }
  }) 
  
  function indexReturn(a, b, param){
    var temp = -1
    for(var i=0; i<a.length; i++){
     if(a[i][param] == b){
      return i+1
     }
    }
    if (temp = -1) {
      return false
    }

  }

  inputData = tempLinks_Num().get()
  console.log(tempLinks_Num().get())
  //*********************************************
}

function initialization(){

  // Basic setup for plot
    margin = { top: 300, right: 10, bottom: 50, left: 200 },
    cellSize=9;
    col_number=tempNodes_episode.length;
    row_number=tempNodes_character.length;
    width = cellSize*col_number, 
    height = cellSize*row_number , 

    legendElementWidth = cellSize*2.5,
    colorBuckets = 21,
    colors = ['#005824','#1A693B','#347B53','#4F8D6B','#699F83','#83B09B','#9EC2B3','#B8D4CB','#D2E6E3','#EDF8FB','#FFFFFF','#F1EEF6','#E6D3E1','#DBB9CD','#D19EB9','#C684A4','#BB6990','#B14F7C','#A63467','#9B1A53','#91003F'];
    //  hcrow is used to record location of corresponding target in rowLabel, each number is a target and its label I guess is at Label matrix
    // hcrow = [49,11,30,4,18,6,12,20,19,33,32,26,44,35,38,3,23,41,22,10,2,15,16,36,8,25,29,7,27,34,48,31,45,43,14,9,39,1,37,47,42,21,40,5,28,46,50,17,24,13],
       hcrow = []
      for (var i = 1; i <= tempNodes_character.length; i++) {
          hcrow.push(i);
      }
     // change to gene name or probe id
    //  hccol is used to record location of corresponding target in colLabel
    // hccol = [6,5,41,12,42,21,58,56,14,16,43,15,17,46,47,48,54,49,37,38,25,22,7,8,2,45,9,20,24,44,23,19,13,40,11,1,39,53,10,52,3,26,27,60,50,51,59,18,31,32,30,4,55,28,29,57,36,34,33,35], // change to gene name or probe id
       hccol = []
      for (var i = 1; i <= tempNodes_episode.length; i++) {
          hccol.push(i);
      }
      rowLabel = []
      for (var i = 0; i<tempNodes_character.length; i++){
        rowLabel.push(tempNodes_character[i].name)
      }
      colLabel = []
      for (var i = 0; i<tempNodes_episode.length; i++){
        colLabel.push(tempNodes_episode[i].name)
      }

    // rowLabel = ['1759080_s_at','1759302_s_at','1759502_s_at','1759540_s_at','1759781_s_at','1759828_s_at','1759829_s_at','1759906_s_at','1760088_s_at','1760164_s_at','1760453_s_at','1760516_s_at','1760594_s_at','1760894_s_at','1760951_s_at','1761030_s_at','1761128_at','1761145_s_at','1761160_s_at','1761189_s_at','1761222_s_at','1761245_s_at','1761277_s_at','1761434_s_at','1761553_s_at','1761620_s_at','1761873_s_at','1761884_s_at','1761944_s_at','1762105_s_at','1762118_s_at','1762151_s_at','1762388_s_at','1762401_s_at','1762633_s_at','1762701_s_at','1762787_s_at','1762819_s_at','1762880_s_at','1762945_s_at','1762983_s_at','1763132_s_at','1763138_s_at','1763146_s_at','1763198_s_at','1763383_at','1763410_s_at','1763426_s_at','1763490_s_at','1763491_s_at'], // change to gene name or probe id
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
      var rowSortOrder=false;
      var colSortOrder=false;
      var rowLabels = svg.append("g")
          .selectAll(".rowLabelg")
          .data(rowLabel)
          .enter()
          .append("text")
          .text(function (d) { return d; })
          .attr("x", 0)
          .attr("y", function (d, i) { return hcrow.indexOf(i+1) * cellSize; })
          .style("text-anchor", "end")
          .attr("transform", "translate(-6," + cellSize / 1.5 + ")")
          .attr("class", function (d,i) { return "rowLabel mono r"+i;} ) 
          .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
          .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})
          .on("click", function(d,i) {rowSortOrder=!rowSortOrder; sortbylabel("r",i,rowSortOrder);d3.select("#order").property("selectedIndex", 4).node().focus();;})
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
          .on("click", function(d,i) {colSortOrder=!colSortOrder;  sortbylabel("c",i,colSortOrder);d3.select("#order").property("selectedIndex", 4).node().focus();;})
          ;
          console.log("data is")
          console.log(data)

      var heatMap = svg.append("g").attr("class","g3")
            .selectAll(".cellg")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d) {
            console.log(d) 
              return hccol.indexOf(d.col) * cellSize; })
            .attr("y", function(d) { return hcrow.indexOf(d.row) * cellSize; })
            .attr("class", function(d){return "cell cell-border cr"+(d.row-1)+" cc"+(d.col-1);})
            .attr("width", cellSize)
            .attr("height", cellSize)
            .style("fill", function(d) { return colorScale(d.value); })

            .on("mouseover", function(d){
                   //highlight text
                   d3.select(this).classed("cell-hover",true);
                   d3.selectAll(".rowLabel").classed("text-highlight",function(r,ri){ return ri==(d.row-1);});
                   d3.selectAll(".colLabel").classed("text-highlight",function(c,ci){ return ci==(d.col-1);});
            
                   //Update the tooltip position and value
                   d3.select("#tooltip")
                     .style("left", (d3.event.pageX+10) + "px")
                     .style("top", (d3.event.pageY-10) + "px")
                     .select("#value")
                     .text("lables:"+rowLabel[d.row-1]+","+colLabel[d.col-1]+"\ndata:"+d.value+"\nrow-col-idx:"+d.col+","+d.row+"\ncell-xy "+this.x.baseVal.value+", "+this.y.baseVal.value);  
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

      var legend = svg.selectAll(".legend")
          .data([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10])
          .enter().append("g")
          .attr("class", "legend");
     
      legend.append("rect")
        .attr("x", function(d, i) { return legendElementWidth * i; })
        .attr("y", height+(cellSize*2))
        .attr("width", legendElementWidth)
        .attr("height", cellSize)
        .style("fill", function(d, i) { return colors[i]; });
     
      legend.append("text")
        .attr("class", "mono")
        .text(function(d) { return d; })
        .attr("width", legendElementWidth)
        .attr("x", function(d, i) { return legendElementWidth * i; })
        .attr("y", height + (cellSize*4));

    // Change ordering of cells

      function sortbylabel(rORc,i,sortOrder){
           var t = svg.transition().duration(1000);
           var log2r=[];
           var sorted; // sorted is zero-based index
           d3.selectAll(".c"+rORc+i) 
             .filter(function(ce){
                log2r.push(ce.value);
              })
           ;
           if(rORc=="r"){ // sort log2ratio of a gene
             sorted=d3.range(col_number).sort(function(a,b){ if(sortOrder){ return log2r[b]-log2r[a];}else{ return log2r[a]-log2r[b];}});
             t.selectAll(".cell")
               .attr("x", function(d) { return sorted.indexOf(d.col-1) * cellSize; })
               ;
             t.selectAll(".colLabel")
              .attr("y", function (d, i) { return sorted.indexOf(i) * cellSize; })
             ;
           }else{ // sort log2ratio of a contrast
             sorted=d3.range(row_number).sort(function(a,b){if(sortOrder){ return log2r[b]-log2r[a];}else{ return log2r[a]-log2r[b];}});
             t.selectAll(".cell")
               .attr("y", function(d) { return sorted.indexOf(d.row-1) * cellSize; })
               ;
             t.selectAll(".rowLabel")
              .attr("y", function (d, i) { return sorted.indexOf(i) * cellSize; })
             ;
           }
      }

      d3.select("#order").on("change",function(){
        order(this.value);
      });
      
      function order(value){
       if(value=="hclust"){
        var t = svg.transition().duration(3000);
        t.selectAll(".cell")
          .attr("x", function(d) { return hccol.indexOf(d.col) * cellSize; })
          .attr("y", function(d) { return hcrow.indexOf(d.row) * cellSize; })
          ;

        t.selectAll(".rowLabel")
          .attr("y", function (d, i) { return hcrow.indexOf(i+1) * cellSize; })
          ;

        t.selectAll(".colLabel")
          .attr("y", function (d, i) { return hccol.indexOf(i+1) * cellSize; })
          ;

       }else if (value=="probecontrast"){
        var t = svg.transition().duration(3000);
        t.selectAll(".cell")
          .attr("x", function(d) { return (d.col - 1) * cellSize; })
          .attr("y", function(d) { return (d.row - 1) * cellSize; })
          ;

        t.selectAll(".rowLabel")
          .attr("y", function (d, i) { return i * cellSize; })
          ;

        t.selectAll(".colLabel")
          .attr("y", function (d, i) { return i * cellSize; })
          ;

       }else if (value=="probe"){
        var t = svg.transition().duration(3000);
        t.selectAll(".cell")
          .attr("y", function(d) { return (d.row - 1) * cellSize; })
          ;

        t.selectAll(".rowLabel")
          .attr("y", function (d, i) { return i * cellSize; })
          ;
       }else if (value=="contrast"){
        var t = svg.transition().duration(3000);
        t.selectAll(".cell")
          .attr("x", function(d) { return (d.col - 1) * cellSize; })
          ;
        t.selectAll(".colLabel")
          .attr("y", function (d, i) { return i * cellSize; })
          ;
       }
      }
      // 
      var sa=d3.select(".g3")
          .on("mousedown", function() {
              if( !d3.event.altKey) {
                 d3.selectAll(".cell-selected").classed("cell-selected",false);
                 d3.selectAll(".rowLabel").classed("text-selected",false);
                 d3.selectAll(".colLabel").classed("text-selected",false);
              }
             var p = d3.mouse(this);
             sa.append("rect")
             .attr({
                 rx      : 0,
                 ry      : 0,
                 class   : "selection",
                 x       : p[0],
                 y       : p[1],
                 width   : 1,
                 height  : 1
             })
          })
          .on("mousemove", function() {
             var s = sa.select("rect.selection");
          
             if(!s.empty()) {
                 var p = d3.mouse(this),
                     d = {
                         x       : parseInt(s.attr("x"), 10),
                         y       : parseInt(s.attr("y"), 10),
                         width   : parseInt(s.attr("width"), 10),
                         height  : parseInt(s.attr("height"), 10)
                     },
                     move = {
                         x : p[0] - d.x,
                         y : p[1] - d.y
                     }
                 ;
          
                 if(move.x < 1 || (move.x*2<d.width)) {
                     d.x = p[0];
                     d.width -= move.x;
                 } else {
                     d.width = move.x;       
                 }
          
                 if(move.y < 1 || (move.y*2<d.height)) {
                     d.y = p[1];
                     d.height -= move.y;
                 } else {
                     d.height = move.y;       
                 }
                 s.attr(d);
          
                     // deselect all temporary selected state objects
                 d3.selectAll('.cell-selection.cell-selected').classed("cell-selected", false);
                 d3.selectAll(".text-selection.text-selected").classed("text-selected",false);

                 d3.selectAll('.cell').filter(function(cell_d, i) {
                     if(
                         !d3.select(this).classed("cell-selected") && 
                             // inner circle inside selection frame
                         (this.x.baseVal.value)+cellSize >= d.x && (this.x.baseVal.value)<=d.x+d.width && 
                         (this.y.baseVal.value)+cellSize >= d.y && (this.y.baseVal.value)<=d.y+d.height
                     ) {
          
                         d3.select(this)
                         .classed("cell-selection", true)
                         .classed("cell-selected", true);

                         d3.select(".r"+(cell_d.row-1))
                         .classed("text-selection",true)
                         .classed("text-selected",true);

                         d3.select(".c"+(cell_d.col-1))
                         .classed("text-selection",true)
                         .classed("text-selected",true);
                     }
                 });
             }
          })
          .on("mouseup", function() {
                // remove selection frame
             sa.selectAll("rect.selection").remove();
          
                 // remove temporary selection marker class
             d3.selectAll('.cell-selection').classed("cell-selection", false);
             d3.selectAll(".text-selection").classed("text-selection",false);
          })
          .on("mouseout", function() {
             if(d3.event.relatedTarget.tagName=='html') {
                     // remove selection frame
                 sa.selectAll("rect.selection").remove();
                     // remove temporary selection marker class
                 d3.selectAll('.cell-selection').classed("cell-selection", false);
                 d3.selectAll(".rowLabel").classed("text-selected",false);
                 d3.selectAll(".colLabel").classed("text-selected",false);
             }
          });
};