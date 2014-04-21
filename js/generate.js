// codes used to generate characters_with_eps.js
var tempResult = TAFFY()
data_heat()
function data_heat(){
  row_objects_heat = characters_episodes_DB() // selected characters
  episodes = episodes_DB().order("s asec, e asec").distinct("e");  // selected seasons
  // column_objects_heat = TAFFY()
  var recordArray=[]
  for(var i=0; i<episodes.length;i++){
    // Add an id field for each episode record
    // column_objects_heat.insert({"ID":(i+1), "e": episodes[i]})
    recordArray.push(0)
  }
  // console.log(episodes)

  row_objects_heat.each(function (record,recordnumber) {
      // record.ID = recordnumber+1
      record.EpisodeRecord = $.extend(true, [], recordArray); 
      // record.linkNum = 0    // initialize the number of links of each character 
      // console.log(record.page)
      // console.log(record.EpisodeRecord)
      if(record["appearances"].length>0){
          // loop through the episodes
          var recordedAppearence = []
          for(var i=0; i<record["appearances"].length;i++){
              // get the episode to store
              var tempEpisode= episodes_DB({title:{like:record["appearances"][i].trim()}}).first()
              // var tempEpisode= column_objects.filter({title:{like:record["appearances"][i].trim()}}).first()
              //If we have this episode in database
              if (tempEpisode){
                if(recordedAppearence.indexOf(tempEpisode['title']) > -1){

                }else{
                    // record.linkNum +=1
                    recordedAppearence.push(tempEpisode['title'])
                    record.EpisodeRecord[tempEpisode["e"]-1]=1
                }
              }
          }
      }
      // console.log(record.EpisodeRecord)
      var total = 0;
      for (var i = 0; i < record.EpisodeRecord.length; i++) {
          total += record.EpisodeRecord[i];
      }
      // console.log("original is : "+record.totalAppear+" now it is: "+total)
      // console.log(record.totalAppear == total)
  });
  console.log(row_objects_heat.stringify())

}


// function newDB(){
//     var homer = {
//     "page" : "Homer Simpsons",
//     "image" : "File:Homer_Simpson.png",
//     "isAlive" : true,
//     "age": [36, 38, 39, 40],
//     "appearances": ["Simpsons Roasting on an Open Fire","Bart the Genius","Homer's Odyssey","There's No Disgrace Like Home","Bart the General","Moaning Lisa","The Call of the Simpsons","The Telltale Head","Life on the Fast Lane","Homer's Night Out","The Crepes of Wrath","Krusty Gets Busted","Some Enchanted Evening","Bart Gets an \"F\"","Simpson and Delilah","Treehouse of Horror","Two Cars in Every Garage and Three Eyes on Every Fish","Dancin' Homer","Dead Putting Society","Bart vs. Thanksgiving","Bart the Daredevil","Itchy & Scratchy & Marge","Bart Gets Hit by a Car","One Fish, Two Fish, Blowfish, Blue Fish","The Way We Was","Homer vs. Lisa and the 8th Commandment","Principal Charming","Oh Brother, Where Art Thou?","Bart's Dog Gets an F","Old Money","Brush with Greatness","Lisa's Substitute","The War of the Simpsons","Three Men and a Comic Book","Blood Feud","Stark Raving Dad","Mr. Lisa Goes to Washington","When Flanders Failed","Bart the Murderer","Homer Defined","Like Father, Like Clown","Treehouse of Horror II","Lisa's Pony","Saturdays of Thunder","Flaming Moe's","Burns Verkaufen der Kraftwerk","I Married Marge","Radio Bart","Lisa the Greek","Homer Alone","Bart the Lover","Homer at the Bat","Separate Vocations","Dog of Death","Colonel Homer","Black Widower","The Otto Show","Bart's Friend Falls in Love","Brother, Can You Spare Two Dimes?","Kamp Krusty","A Streetcar Named Marge","Homer the Heretic","Lisa the Beauty Queen","Treehouse of Horror III","Itchy & Scratchy: The Movie","Marge Gets a Job","New Kid on the Block","Mr. Plow","Lisa's First Word","Homer's Triple Bypass","Marge vs. the Monorail","Selma's Choice","Brother from the Same Planet","I Love Lisa","Duffless","Last Exit to Springfield","So It's Come to This: A Simpsons Clip Show","The Front","Whacking Day","Marge in Chains","Krusty Gets Kancelled","Homer's Barbershop Quartet","Cape Feare","Homer Goes to College","Rosebud","Treehouse of Horror IV","Marge on the Lam","Bart's Inner Child","Boy-Scoutz 'n the Hood","The Last Temptation of Homer","$pringfield (Or, How I Learned to Stop Worrying and Love Legalized Gambling)","Homer the Vigilante","Bart Gets Famous","Homer and Apu","Lisa vs. Malibu Stacy","Deep Space Homer","Homer Loves Flanders","Bart Gets an Elephant","Burns' Heir","Sweet Seymour Skinner's Baadasssss Song","The Boy Who Knew Too Much","Lady Bouvier's Lover","Secrets of a Successful Marriage","Bart of Darkness","Lisa's Rival","Another Simpsons Clip Show","Itchy & Scratchy Land","Sideshow Bob Roberts","Treehouse of Horror V","Bart's Girlfriend","Lisa on Ice","Homer Badman","Grampa vs. Sexual Inadequacy","Fear of Flying","Homer the Great","And Maggie Makes Three","Bart's Comet","Homie the Clown","Bart vs. Australia","Homer vs. Patty and Selma","A Star is Burns","Lisa's Wedding","Two Dozen and One Greyhounds","The PTA Disbands","'Round Springfield","The Springfield Connection","Lemon of Troy","Who Shot Mr. Burns? (Part One)","Who Shot Mr. Burns? (Part Two)","Radioactive Man","Home Sweet Homediddly-Dum-Doodily","Bart Sells His Soul","Lisa the Vegetarian","Treehouse of Horror VI","King-Size Homer","Mother Simpson","Sideshow Bob's Last Gleaming","The Simpsons 138th Episode Spectacular","Marge Be Not Proud","Team Homer","Two Bad Neighbors","Scenes from the Class Struggle in Springfield","Bart the Fink","Lisa the Iconoclast","Homer the Smithers","The Day the Violence Died","A Fish Called Selma","Bart on the Road","22 Short Films About Springfield","Raging Abe Simpson and His Grumbling Grandson in \"The Curse of the Flying Hellfish\"","Much Apu About Nothing","Homerpalooza","Summer of 4 Ft. 2","Treehouse of Horror VII","You Only Move Twice ","The Homer They Fall ","Burns, Baby Burns ","Bart After Dark ","A Milhouse Divided ","Lisa's Date with Density ","Hurricane Neddy ","El Viaje Misterioso de Nuestro Jomer (The Mysterious Voyage of Homer) ","The Springfield Files ","The Twisted World of Marge Simpson ","Mountain of Madness ","Simpsoncalifragilisticexpiala(Annoyed Grunt)cious ","The Itchy & Scratchy & Poochie Show ","Homer's Phobia ","Brother from Another Series ","My Sister, My Sitter ","Homer vs. the Eighteenth Amendment ","Grade School Confidential ","The Canine Mutiny ","The Old Man and the Lisa ","In Marge We Trust ","Homer's Enemy ","The Simpsons Spin-Off Showcase ","The Secret War of Lisa Simpson ","The City of New York vs. Homer Simpson","The Principal and the Pauper","Lisa's Sax","Treehouse of Horror VIII","The Cartridge Family","Bart Star","The Two Mrs. Nahasapeemapetilons","Lisa the Skeptic","Realty Bites","Miracle on Evergreen Terrace","All Singing, All Dancing","Bart Carny","The Joy of Sect","Das Bus","The Last Temptation of Krust","Dumbbell Indemnity","Lisa the Simpson","This Little Wiggy","Simpson Tide","The Trouble with Trillions","Girly Edition","Trash of the Titans","King of the Hill","Lost Our Lisa","Natural Born Kissers","Lard of the Dance","The Wizard of Evergreen Terrace","Bart the Mother","Treehouse of Horror IX","When You Dish Upon a Star","D'oh-in' in the Wind","Lisa Gets an \"A\"","Homer Simpson in: \"Kidney Trouble\"","Mayored to the Mob","Viva Ned Flanders","Wild Barts Can't Be Broken","Sunday, Cruddy Sunday","Homer to the Max","I'm with Cupid","Marge Simpson in: \"Screaming Yellow Honkers\"","Make Room for Lisa","Maximum Homerdrive","Simpsons Bible Stories","Mom and Pop Art","The Old Man and the \"C\" Student","Monty Can't Buy Me Love","They Saved Lisa's Brain","Thirty Minutes Over Tokyo","Beyond Blunderdome","Brother's Little Helper","Guess Who's Coming to Criticize Dinner?","Treehouse of Horror X","E-I-E-I-D'oh","Hello Gutter, Hello Fadder","Eight Misbehavin'","Take My Wife, Sleaze","Grift of the Magi","Little Big Mom","Faith Off","The Mansion Family","Saddlesore Galactica","Alone Again, Natura-Diddily","Missionary: Impossible","Pygmoelian","Bart to the Future","Days of Wine and D'oh'ses","Kill the Alligator and Run","Last Tap Dance in Springfield","It's a Mad, Mad, Mad, Mad Marge","Behind the Laughter","Treehouse of Horror XI","A Tale of Two Springfields","Insane Clown Poppy","Lisa the Tree Hugger","Homer vs. Dignity","The Computer Wore Menace Shoes","The Great Money Caper","Skinner's Sense of Snow","HOMЯ","Pokey Mom","Worst Episode Ever","Tennis the Menace","Day of the Jackanapes","New Kids on the Blecch","Hungry, Hungry Homer","Bye Bye Nerdie","Simpson Safari","Trilogy of Error","I'm Goin' to Praiseland","Children of a Lesser Clod","Simpsons Tall Tales","Treehouse of Horror XII ","The Parent Rap ","Homer the Moe ","A Hunka Hunka Burns in Love ","The Blunder Years ","She of Little Faith ","Brawl in the Family ","Sweets and Sour Marge ","Jaws Wired Shut ","Half-Decent Proposal ","The Bart Wants What It Wants ","The Lastest Gun in the West ","The Old Man and the Key ","Tales from the Public Domain ","Blame It on Lisa ","Weekend at Burnsie's ","Gump Roast ","I Am Furious Yellow ","The Sweetest Apu ","Little Girl in the Big Ten ","The Frying Game ","Poppa's Got a Brand New Badge ","Treehouse of Horror XIII ","How I Spent My Strummer Vacation","Bart vs. Lisa vs. the Third Grade ","Large Marge ","Helter Shelter ","The Great Louse Detective ","Special Edna ","The Dad Who Knew Too Little ","The Strong Arms of the Ma ","Pray Anything ","Barting Over ","I'm Spelling as Fast as I Can ","A Star Is Born-Again ","Mr. Spritz Goes to Washington ","C.E. D'oh ","'Scuse Me While I Miss the Sky ","Three Gays of the Condo ","Dude, Where's My Ranch? ","Old Yeller-Belly ","Brake My Wife, Please ","The Bart of War ","Moe Baby Blues ","Treehouse of Horror XIV ","My Mother the Carjacker ","The President Wore Pearls ","The Regina Monologues ","The Fat and the Furriest ","Today, I Am a Clown ","'Tis the Fifteenth Season ","Marge vs. Singles, Seniors, Childless Couples and Teens and Gays ","I, (Annoyed Grunt)-Bot ","Diatribe of a Mad Housewife ","Margical History Tour ","Milhouse Doesn't Live Here Anymore ","Smart and Smarter ","The Ziff Who Came to Dinner ","Co-Dependent's Day ","The Wandering Juvie ","My Big Fat Geek Wedding ","Catch 'Em if You Can ","Simple Simpson ","The Way We Weren't ","Bart-Mangled Banner ","Fraudcast News ","Treehouse of Horror XV ","All's Fair in Oven War ","Sleeping with the Enemy ","She Used to Be My Girl ","Fat Man and Little Boy ","Midnight Rx ","Mommie Beerest ","Homer and Ned's Hail Mary Pass ","Pranksta Rap ","There's Something About Marrying ","On a Clear Day I Can't See My Sister ","Goo Goo Gai Pan ","Mobile Homer ","The Seven-Beer Snitch ","Future-Drama ","Don't Fear the Roofer ","The Heartbroke Kid ","A Star is Torn ","Thank God It's Doomsday ","Home Away from Homer ","The Father, the Son and the Holy Guest Star ","Bonfire of the Manatees ","The Girl Who Slept Too Little ","Milhouse of Sand and Fog ","Treehouse of Horror XVI ","Marge's Son Poisoning ","See Homer Run ","The Last of the Red Hat Mamas ","The Italian Bob ","Simpson Christmas Stories ","Homer's Paternity Coot ","We're on the Road to D'oh-where ","My Fair Laddy ","The Seemingly Never-Ending Story ","Bart Has Two Mommies ","Homer Simpson, This Is Your Wife ","Million Dollar Abie ","Kiss Kiss Bang Bangalore ","The Wettest Stories Ever Told ","Girls Just Want to Have Sums ","Regarding Margie ","The Monkey Suit ","Marge and Homer Turn a Couple Play ","The Mook, the Chef, the Wife and Her Homer ","Jazzy and the Pussycats ","Please Homer, Don't Hammer 'Em ","Treehouse of Horror XVII ","G.I. (Annoyed Grunt) ","Moe'N'a Lisa ","Ice Cream of Margie (with the Light Blue Hair) ","The Haw-Hawed Couple ","Kill Gil: Vols. 1 & 2 ","The Wife Aquatic ","Revenge is a Dish Best Served Three Times ","Little Big Girl ","Springfield Up ","Yokel Chords ","Rome-Old and Julie-Eh ","Homerazzi ","Marge Gamer ","The Boys of Bummer ","Crook and Ladder ","Stop or My Dog Will Shoot! ","24 Minutes ","You Kent Always Say What You Want ","He Loves to Fly and He D'ohs ","The Homer of Seville ","Midnight Towboy ","I Don't Wanna Know Why the Caged Bird Sings ","Treehouse of Horror XVIII ","Little Orphan Millie ","Husbands and Knives ","Funeral for a Fiend ","Eternal Moonshine of the Simpson Mind ","E. Pluribus Wiggum ","That '90s Show ","Love, Springfieldian Style ","The Debarted ","Dial \"N\" for Nerder ","Smoke on the Daughter ","Papa Don't Leech ","Apocalypse Cow ","Any Given Sundance ","Mona Leaves-a ","All About Lisa ","Sex, Pies, and Idiot Scrapes ","Lost Verizon ","Double, Double, Boy in Trouble ","Treehouse of Horror XIX ","Dangerous Curves ","Homer and Lisa Exchange Cross Words ","Mypods and Boomsticks ","The Burns and the Bees ","Lisa the Drama Queen ","Take My Life, Please ","How the Test Was Won ","No Loan Again, Naturally ","Gone Maggie Gone ","In the Name of the Grandfather ","Wedding for Disaster ","Eeny Teeny Maya, Moe ","The Good, the Sad and the Drugly ","Father Knows Worst ","Waverly Hills 9-0-2-1-D'oh ","Four Great Women and a Manicure ","Coming to Homerica ","Homer the Whopper ","Bart Gets a \"Z\" ","The Great Wife Hope ","Treehouse of Horror XX ","The Devil Wears Nada ","Pranks and Greens ","Rednecks and Broomsticks ","O Brother, Where Bart Thou? ","Thursdays with Abie ","Once Upon a Time in Springfield ","Million Dollar Maybe ","Boy Meets Curl ","The Color Yellow ","Postcards From the Wedge ","Stealing First Base ","The Greatest Story Ever D'ohed ","American History X-cellent ","Chief of Hearts ","The Squirt and the Whale ","To Surveil With Love ","Moe Letter Blues ","The Bob Next Door ","Judge Me Tender ","Elementary School Musical","Loan-a Lisa","MoneyBART","Treehouse of Horror XXI","Lisa Simpson, This Isn't Your Life","The Fool Monty","How Munched Is That Birdie in the Window?","The Fight Before Christmas","Donnie Fatso","Moms I'd Like to Forget","Flaming Moe","Homer the Father","The Blue and the Gray","Angry Dad: The Movie","The Scorpion's Tale","A Midsummer's Nice Dream","Love is a Many Strangled Thing","The Great Simpsina","The Real Housewives of Fat Tony","Homer Scissorhands","500 Keys","The Ned-liest Catch","The Falcon and the D'ohman","Bart Stops to Smell the Roosevelts","Treehouse of Horror XXII","Replaceable You","The Food Wife","The Book Job","The Man in the Blue Flannel Pants","The Ten-Per-Cent Solution","Holidays of Future Passed","Politically Inept, with Homer Simpson","The D'oh-cial Network","Moe Goes from Rags to Riches","The Daughter Also Rises","At Long Last Leave","Exit Through the Kwik-E-Mart","How I Wet Your Mother","Them, Robot","Beware My Cheating Bart","A Totally Fun Thing That Bart Will Never Do Again","The Spy Who Learned Me","Ned 'N Edna's Blend","Lisa Goes Gaga","Moonshine River","Treehouse of Horror XXIII","Adventures in Baby-Getting","Gone Abie Gone","Penny-Wiseguys","A Tree Grows in Springfield","The Day the Earth Stood Cool","To Cur With Love","Homer Goes to Prep School","A Test Before Trying","Changing of the Guardian","Love is a Many Splintered Thing","Hardly Kirk-ing","Gorgeous Grampa ","Black-eyed Please","Dark Knight Court","What Animated Women Want","Pulpit Friction","Whiskey Business","The Fabulous Faker Boy","The Saga of Carl","Dangers on a Train","Homerland","Treehouse of Horror XXIV","Four Regrettings and a Funeral","Yolo","Labor Pains","The Kid is All Right","Yellow Subterfuge","White Christmas Blues","Steal This Episode","Married to the Blob"],
//     "voicedBy":[" Dan Castellaneta ","Don Jordan"],
//     "name" : "Homer Jay Simpson, Sr.",
//     "gender" : "M",
//     "HeatRecord" : [13, 22, 24, 22, 22, 25, 25, 25, 25, 23, 22, 21, 22, 22, 22, 21, 22, 22, 20, 21, 23, 22, 22, 22, 10],
//     "totalAppear" : 540,
//     }
//     // characters_episodes_DB.insert(homer)
//     // console.log(characters_episodes_DB().stringify())
//     // console.log(characters_episodes_DB({page:"Homer Simpsons"}).first())

// }



// function data_heat(){
//   row_objects_heat = characters_DB() // selected characters
//   seasons = episodes_DB().order("s asec, e asec").distinct("s");  // selected seasons
//   column_objects_heat = TAFFY()
//   recordArray=[]
//   for(var i=0; i<seasons.length;i++){
//     // Add an id field for each episode record
//     column_objects_heat.insert({"ID":(i+1), "title": "Season "+seasons[i], "episodeNum":episodes_DB({s:seasons[i]}).count()})
//     recordArray.push(0)
//   }
//   console.log(seasons)

//   row_objects_heat.each(function (record,recordnumber) {
//       // record.ID = recordnumber+1
//       record.HeatRecord = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//       record.totalAppear = 0;
//       // record.linkNum = 0    // initialize the number of links of each character 
//       if(record["appearances"].length>0){
//           // loop through the episodes
//           var recordedAppearence = []
//           for(var i=0; i<record["appearances"].length;i++){
//               // get the episode to store
//               var tempEpisode= episodes_DB({title:{like:record["appearances"][i].trim()}}).first()
//               // var tempEpisode= column_objects.filter({title:{like:record["appearances"][i].trim()}}).first()
//               //If we have this episode in database
//               if (tempEpisode){
//                 if(recordedAppearence.indexOf(tempEpisode['title']) > -1){

//                 }else{
//                     // record.linkNum +=1
//                     recordedAppearence.push(tempEpisode['title'])
//                     record.HeatRecord[tempEpisode["s"]-1]+=1
//                 }
//               }
//           }
//       }
//       var total = 0;
//       for (var i = 0; i < record.HeatRecord.length; i++) {
//           total += record.HeatRecord[i] << 0;
//       }
//       record.totalAppear = total
//       tempResult.insert({page:record.page, HeatRecord: record.HeatRecord, totalAppear:record.totalAppear })
//   });
//   console.log(row_objects_heat.stringify())

// }