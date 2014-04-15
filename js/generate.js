// codes used to generate characters_with_eps.js
var tempResult = TAFFY()
function data_heat(){
  row_objects_heat = characters_DB() // selected characters
  seasons = episodes_DB().order("s asec, e asec").distinct("s");  // selected seasons
  column_objects_heat = TAFFY()
  recordArray=[]
  for(var i=0; i<seasons.length;i++){
    // Add an id field for each episode record
    column_objects_heat.insert({"ID":(i+1), "title": "Season "+seasons[i], "episodeNum":episodes_DB({s:seasons[i]}).count()})
    recordArray.push(0)
  }
  console.log(seasons)

  row_objects_heat.each(function (record,recordnumber) {
      // record.ID = recordnumber+1
      record.HeatRecord = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      record.totalAppear = 0;
      // record.linkNum = 0    // initialize the number of links of each character 
      if(record["appearances"].length>0){
          // loop through the episodes
          for(var i=0; i<record["appearances"].length;i++){
              // get the episode to store
              var tempEpisode= episodes_DB({title:{like:record["appearances"][i].trim()}}).first()
              // var tempEpisode= column_objects.filter({title:{like:record["appearances"][i].trim()}}).first()
              //If we have this episode in database
              if (tempEpisode){
                  // record.linkNum +=1
                  record.HeatRecord[tempEpisode["s"]-1]+=1
                }
          }
      }
      var total = 0;
      for (var i = 0; i < record.HeatRecord.length; i++) {
          total += record.HeatRecord[i] << 0;
      }
      record.totalAppear = total
      tempResult.insert({page:record.page, HeatRecord: record.HeatRecord, totalAppear:record.totalAppear })
  });
  console.log(row_objects_heat.stringify())

}