//File to hold the selection code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

function selection(){
	//Create the groups tags for the selector
	var families = ["Burns","Simpson","Mann","Bouvier","Wiggum","Flanders","Quimby's","Muntz","Shelbyville","Sherri and Terri","Terwilliger","Szyslak"];
	var bart_enemies = ["Anderson","Black Weasel","Sideshow Blob","Robert Terwilliger","Lucille Botzcowski","George Bush","Cadet leader","Cesar","Coach Krupt","David (Treehouse of Horror XVI)", "Dog (The Lastest Gun in the West)","Dorit","Dr. Demento (character)","Female Mail Carrier","Judge Constance Harm","Snake Jailbird","Jimbo Jones","Edna Krabappel","Lester","List of The Simpsons Game enemies","Math Book","Milhouse (Shelbyville)","Lord Montymort","Mr. Montone","Nelson Muntz","Platt","Shelbyville boy","Shelbyville lemonade boy's brother","Shelbyville Martin","Shelbyville Nelson","Sherri Mackleberry","Hugo Simpson II","Seymour Skinner","S cont.","Speed-E-Mart owner","Dolph Starbeam","Suzanne","Terri Mackleberry","Cecil Terwilliger","Francesca Terwilliger","Gino Terwilliger","Robert Terwilliger Sr.","The Fat in the Hat","Ticket Bouncer","Ugolin","Dame Judith Underdunk","White Weasel", "Devan Woosterfield", "Quenley Woosterfield"];
	var second_grade_student = ["Sherri and Terri's sister", "Afro Girl", "Becky (Student)", "Black Weasel", "Blue Afro Hair Girl", "Britney Brockman", "Brown-haired boy", "Report Card", "Chuck (student)", "Cosine", "Coward", "Michael D'Amico", "E-mail", "E cont.", "Elizabeth Hoover's Students", "German Santa Girl", "Girl playing soccer", "Girl with necklace", "Hubert Wong", "Isabel Gutierrez", "Jake Boyman", "Lisa's Classmate 1", "Lisa, Jr.", "Lucas Bortner", "Janey Powell", "Rex (I Love Lisa)", "Francine Rhenquist", "Lisa Simpson","Tanya", "Allison Taylor", "Wanda", "Weasels", "White Kid", "White Weasel", "White-Haired Girl", "Alex Whitney", "Ralph Wiggum", "Yellow Kid"];
	var fourth_grade_student = ["Amy", "Audrey McConnell's Student 1", "Audrey McConnell's Student 2", "Audrey McConnell's Student 3", "Audrey McConnell's Students", "Adrian Belew", "Bashir bin Laden", "Bodhi", "Wendell Borton", "Boy with Bangs", "Boy with shades", "Brown Long Haired Girl", "Buck-toothed boy", "Buck-toothed girl", "Cool kid", "Cypress Creek Milhouse (A.K.A Milhouse look alike)", "Donny (The Debarted)", "Dr. Hibbert's Second Son", "Edna Krabappel's Students", "Ezekiel", "Female Twin", "Todd Flanders", "Girl with glasses", "Ishmael", "Jaffee", "Kevin (Stealing First Base)", "Lester", "Lewis Clark", "Lewis' lookalike", "Long-haired girl", "Male Twin", "Martin Prince", "Nikki McKenna", "Mike's Son", "Milhouse (Shelbyville)", "Nelson Muntz", "Nina Skalka", "Photo Girl", "Rex (Bart of Darkness)", "Richard", "Shelbyville boy", "Shelbyville lemonade boy's brother", "Shelbyville Martin", "Shelbyville Nelson", "Sherri Mackleberry", "Bart Simpson", "Bart Simpson, Jr.", "Smug Girl", "Sophie Jensen", "Samantha Stankey", "Terri Mackleberry", "Tommy", "Milhouse Van Houten", "Warren (Camper)", "Üter Zörker"];
	var not_american = ["Kentucky Fried Panda", "Kitenge", "Muntu", "Titi", "Titi's sister", "Dr. Egoyan", "Chuck Garabedian", "Maggie's Husband", "Seymour Skinner", "Little Moe Szyslak", "Moe Szyslak", "The Moe imposter", "Andy (Bart vs. Australia)", "Captain Kidney Pie", "Bruno Drundridge", "Tobias Drundridge", "Gus", "Helen Reddy", "Space Mutant Female Victim", "Space Mutant Male Victim", "Adolf Hitler", "The Homer imposter", "McBain", "Wolfgang Amadeus Mozart", "Mrs. Pommelhorse", "Arnold Schwarzenegger", "Rainier Wolfcastle", "Abbie Simpson", "Alan Moore (character)", "Alexander Graham Bell", "Alfred Hitchcock", "Nigel Bakerbutcher", "Billy Ocean", "Tony Blair (character)","The Bloodening", "Shary Bobbins", "Mr. Bont", "C. Ebenezer Burns", "David Byrne (character)", "Prince Charles", "Christmas Boy", "Colonel Custard", "Simon Cowell", "Arthur Crandall", "Declan Desmond", "Doctor Who", "Dr. Bartley", "Edmund", "Edwina", "Eliza Simpson (Treehouse of Horror XV)", "Queen Elizabeth II", "Emily Winthrop", "English Scientist", "Lord Thistlewick Flanders", "Gravedigger Billy", "Groundskeeper Willie", "George Harrison (character)", "Stephen Hawking (character)", "King Henry VIII", "Homer Fraud", "Hugh Parkfield", "Guy Incognito", "Jesminder Bhamra", "Jesminder Bhamra's father", "Jessica Simpson (character)", "Jessie Simpson", "Joan Bushwell", "Elton John (character)", "Judith Owen (character)", "Juliet Hobbes", "Horatio McCallister", "William MacDougal II", "Manchester United", "Mason Fairbanks", "C. W. McAllister", "Paul McCartney (character)", "Ian McKellen (character)", "Melvin Van Horne", "Mrs. Potts", "Nigel (manager)", "Northern Irish Leprechaun", "Mrs. Pennyfeather", "Harry Potter (character)", "Rex (I Love Lisa)", "Richard Dawkins (character)", "J. K. Rowling (character)", "William Shakespeare", "Shelbyville Elementary Groundskeeper", "Ringo Starr (character)", "Sussexton-Hamptonshire-Unleath", "Robert Terwilliger Sr.", "Tom Jones", "Total stranger", "The Who", "Sir Widebottom", "Willie's Mother","Abraham Simpson I", "Justin Bieber", "Canadian Flanders", "Canadian Nelson", "Frank Gehry (character)", "Gordy", "Johnny (Canadian)", "Justin Bieber (character)", "Man O' Pies", "Michael Ironside", "Milhoose", "Roofi", "Old Tut Simpson", "Orville Simpson", "Virgil Simpson", "Tyler(Male 3rd Grader)", "Tyler's Brother", "Tyler's Father", "Tyler's Sister", "Ling Bouvier", "Chinese Spy", "Craig", "Kentucky Fried Panda", "Cookie Kwan", "Speed-E-Mart owner", "White Dragon", "Madam Wu", "Dutch policeman", "Moe Szyslak", "Milhouse Van Houten", "Bambi Petitbois", "Antoine Bouvier", "Bambi Bouvier", "Clancy Bouvier", "Dorothé Bouvier", "Jacqueline Bouvier", "JoJo Bouvier", "Victor Bouvier", "Victor Bouvier II", "Cesar", "Charlemagne Bouvier", "Cléo Bouvier", "Didi Bouvier", "Françoise Billout", "French Boy", "French Chef", "French Scientist", "Frédérique Trousseau", "Honoré Bouvier", "Jacques", "Mr. Lacoste", "Lalique Bouvier", "Mademoissele Meringue", "Marcel Bouvier", "Monique Bouvier", "Pierre Bouvier", "Police Officer (The Crepes of Wrath)", "Pépé Bouvier", "Ugolin", "Yves Bouvier", "Sebastian Cobb", "Ernst", "Fraumaker", "Fritz", "Green Day", "Hans (business man)", "Baron von Herzenberger", "Horst", "Walter Hotenhoffer", "Kaiser Wilhelm II", "Karl", "Colonel Klink", "Ludwig van Beethoven", "Lugash", "Mr. Zörker", "Mrs. Zörker", "Nelson Muntz", "Nuclear Physics Professor", "Gunter", "Üter Zörker", "Apu Nahasapeemapetilon Sr.", "Indian Nerd", "Jesminder Bhamra", "Jesminder Bhamra's father", "Kavi Nahasapeemapetilon", "Kwik-E-Mart President", "Manjula's Father", "Manjula's Mother", "Apu's Mother", "Nahasapeemapetilon Family", "The Nahasapeemapetilon Octuplets", "Anoop Nahasapeemapetilon", "Apu Nahasapeemapetilon", "Gheet Nahasapeemapetilon", "Jamshed Nahasapeemapetilon", "Manjula Nahasapeemapetilon", "Nabendu Nahasapeemapetilon", "Pahusacheta Nahasapeemapetilon", "Poonam Nahasapeemapetilon", "Pria Nahasapeemapetilon", "Sandeep Nahasapeemapetilon", "Sanjay Nahasapeemapetilon", "Sashi Nahasapeemapetilon", "Uma Nahasapeemapetilon", "The Nahasapeemapetilon Octuplets Octuplets", "Total stranger", "Colin", "Father Sean", "Groundskeeper Seamus", "Irish Boy Most Resembling a Potato", "Leprechaun", "Tom O'Flanagan", "Old Irish Man", "Don Castellaneta", "Christopher Columbus", "Anna Maria D'Amico", "Michael D'Amico", "Don Vittorio DiMaggio", "Fat Tony", "Fit Tony", "Enrico Irritazio", "Jimmy the Snitch", "Legs", "Louie (mafia)", "Luann Van Houten", "Luigi (Nintendo)", "Mario", "Nana Sophie Mussolini", "Luigi Risotto", "Frankie the Squealer", "Francesca Terwilliger", "Gino Terwilliger", "Johnny Tightlips", "Milhouse Van Houten", "Akira", "Cosine", "Emperor Akihito", "Gogo Yubari", "Kumiko", "Kumiko's father", "Master Sushi Chef", "Richie Sakai", "Mr. Sakamoto", "Mr. Sparkle", "Tina", "Toshiro", "Wink", "Bartie Ziff", "Mr. Bergstrom", "Brenda Weingarten", "Rachel Cohen", "Dorit", "Isabel Gutierrez", "Jakob", "Hyman Krustofsky", "Krusty the Clown", "Mark (Regarding Margie)", "Old Jewish Man", "Scott Weingarten", "Jay Sherman", "Sophie", "Dolph Starbeam", "Tracy", "Artie Ziff", "Amid bin Laden", "Bashir bin Laden", "Mina bin Laden", "Female Korean Artist 1 (couch gag)", "Female Korean Artist 2 (couch gag)", "Kim Jong-il (character)", "Male Korean Artist 1 (couch gag)", "Male Korean Artist 2 (couch gag)", "Male Korean Artist 3 (couch gag)", "Sun Moon", "Kearney Zzyzwicz, Jr.", "Keausley Zzyzwicz,Jr.", "Mrs. Zzyzwicz", "Little Moe Szyslak", "Moe Szyslak", "The Moe imposter", "Kearney Zzyzwicz", "Ronaldo (Blame It on Lisa)", "Ronaldo (character)", "Cristiano Ronaldo", "Ballet Teacher", "Rasputin the Friendly Russian", "Slava", "Viktor", "Zhenya", "Bumblebee Man", "Eduardo Barcelona", "El Puerco", "Emma", "José Flanders", "Isabel Gutierrez", "Pepi", "Señor Ding Dong", "Señor Fritatta", "Spanish Squeaky-Voiced Teen", "Señor Spielbergo", "Unnamed Latino Man", "Fernando Vidal", "Inga", "Sven Simpson", "The Swedish Chef"];
	//Add tags to selector
	for (each in families){
		families[each]=families[each] + ' Family';
		$("#tags ul").append('<li><a href="#families' + '">' + families[each] + '</a> Family' + '</li>');
	}
	$("#tags ul").append('<li><a href="#bart_enemies' + '">' + 'Bart Enemies' + '</a>' + '</li>');
	$("#tags ul").append('<li><a href="#second' + '">' + '2nd Grade Students' + '</a>' + '</li>');
	$("#tags ul").append('<li><a href="#fourth' + '">' + '4th Grade Students' + '</a>' + '</li>');
	$("#tags ul").append('<li><a href="#not_american' + '">' + 'Not American' + '</a>' + '</li>');
	//Handle the selected group when clicked
	$("#tags ul li a").click(function(selector) {
		var selector = [];
		var characters_select = [];
		type = this.href.split('#')[1]
		if (type == "families") selector.push(this.text.split(' Family')[0]);
		if (type == "bart_enemies") selector = bart_enemies;
		if (type == "second") selector = second_grade_student;
		if (type == "fourth") selector = fourth_grade_student;
		if (type == "not_american") selector = not_american;
		for (each in selector){
	  		//Obtain values from the db depending on the selection
	  		if (characters_DB({name:{like:selector[each]}}).get().length != 0)
	  		{
	  			if (type=='families') characters_select = characters_DB({name:{like:selector[each]}}).get()
			}
			if (characters_DB({page:{is:selector[each]}}).get().length != 0)
			{
				if (type!='families') characters_select.push(characters_DB({page:{is:selector[each]}}).get())
			}
		}
		console.log(selector);
		console.log(characters_select);
	});

	if(!$('#myCanvas').tagcanvas({
	  textColour: '#ff0000',
	  outlineColour: '#ff00ff',
	  reverse: true,
	  depth: 0.8,
	  initial: [-0.130, 0.200],
	  textHeight: 10,
	  maxSpeed: 0.05
	},'tags')) {
	  // something went wrong, hide the canvas container
	  $('#myCanvasContainer').hide();
	}
	//var groups = ["Simpsons Family", "Flanders Family", "Milhouse Family", "Quenley Family"]
	/*var margin = { top: 30, right: 20, bottom: 30, left: 50 },
    			width = 700, 
    			height = 200

    var svg = d3.select("body")
    			.append("div")
    			.attr("class","row")
    			.append("div")
    			.attr("class","col-md-8")
    			.append("svg")
    			.attr("class","svg_word")
    			.attr("width",width+margin.left+margin.right)
    			.attr("height",height+margin.top+margin.bottom)
    			.attr("class","selector")
    			.on("mouseover", function(d,i){
    				text.transition()
  					.attr("x",Math.random()*500)
  					.attr("y",Math.random()*150)
  					for (var i=0; i<4; i++){
  						d3.select(text[0][i])
  							.attr("font-size", Math.random()*20+10)
  							.transition()
  							.attr("x",Math.random()*500)
  							.attr("y",Math.random()*50)
  					}
    	}) 

    var text = svg.selectAll("text")
    	.data(groups)
    	.enter()
    	.append("text")
    	.text(function(d){
    		return d
    	})
    	.attr("font-size", function(){
    		return Math.random()*20+10;
    	})
    	.attr("x",function(){
    		return Math.random()*500;
    	})
    	.attr("y",function(){
    		return Math.random()*150;
    	})
    	.attr("transform", function(d,i){
    		return "rotate (" + Math.random()*50 + ")"
    	})
   	*/   	
}

