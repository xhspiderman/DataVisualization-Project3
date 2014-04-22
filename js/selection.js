//File to hold the selection code of the Simpsons Visualization Application
//authors: Alberto Gonzalez, Hao Xu date:April 2014

function selection(){
	//Fill the select bar
	var all_characters = []
	var group_select = [];
	for (var i = 0; i<characters.length; i++ ){
		all_characters.push(characters[i].page)
		$("#select select").append('<option value="' + characters[i].page + '">'+ characters[i].page + '</option>');
	}
	//define the selector
	$("select").multipleSelect({
	            filter: true,
	            placeholder: "Select characters",
	            onClick: function(view) {
	               	//console.log($("select").multipleSelect("getSelects","text"))
	               	group_select = $("select").multipleSelect("getSelects","text");
	               	for (each in group_select){
	               		length = $("select").multipleSelect("getSelects","text")[each].length
	               		group_select[each] = $("select").multipleSelect("getSelects","text")[each].slice(1,length);
	               	}
	               	Characters_to_show =  characters_episodes_DB({page:group_select});
	              	updateChar(Characters_to_show.get());
					plotMain();
					plotCo();
	            },
	            onOptgroupClick: function(view) {
	             	console.log($("select").multipleSelect("getSelects","text"))
	            } 
	});

	//Create the groups tags for the selector
	var families = ["Burns","Simpson","Mann","Bouvier","Wiggum","Flanders","Quimby's","Muntz","Shelbyville","Sherri and Terri","Terwilliger","Szyslak"];
	var bart_enemies = ["Anderson","Black Weasel","Sideshow Blob","Robert Terwilliger","Lucille Botzcowski","George Bush","Cadet leader","Cesar","Coach Krupt","David (Treehouse of Horror XVI)", "Dog (The Lastest Gun in the West)","Dorit","Dr. Demento (character)","Female Mail Carrier","Judge Constance Harm","Snake Jailbird","Jimbo Jones","Edna Krabappel","Lester","List of The Simpsons Game enemies","Math Book","Milhouse (Shelbyville)","Lord Montymort","Mr. Montone","Nelson Muntz","Platt","Shelbyville boy","Shelbyville lemonade boy's brother","Shelbyville Martin","Shelbyville Nelson","Sherri Mackleberry","Hugo Simpson II","Seymour Skinner","S cont.","Speed-E-Mart owner","Dolph Starbeam","Suzanne","Terri Mackleberry","Cecil Terwilliger","Francesca Terwilliger","Gino Terwilliger","Robert Terwilliger Sr.","The Fat in the Hat","Ticket Bouncer","Ugolin","Dame Judith Underdunk","White Weasel", "Devan Woosterfield", "Quenley Woosterfield"];
	var lisa_enemies =["Anderson", "Art teacher", "Robert Terwilliger", "Brown-haired girl", "Cadet leader", "Edmund", "Girl with ponytail", "Elizabeth Hoover", "Dewey Largo", "Lord Montymort", "Ms. Barr", "Ms. Cantwell", "Platt", "Francine Rhenquist", "Sara (Student)", "Suzanne", "The Fat in the Hat"]
	var second_grade_student = ["Sherri and Terri's sister", "Afro Girl", "Becky (Student)", "Black Weasel", "Blue Afro Hair Girl", "Britney Brockman", "Brown-haired boy", "Report Card", "Chuck (student)", "Cosine", "Coward", "Michael D'Amico", "E-mail", "E cont.", "Elizabeth Hoover's Students", "German Santa Girl", "Girl playing soccer", "Girl with necklace", "Hubert Wong", "Isabel Gutierrez", "Jake Boyman", "Lisa's Classmate 1", "Lisa, Jr.", "Lucas Bortner", "Janey Powell", "Rex (I Love Lisa)", "Francine Rhenquist", "Lisa Simpson","Tanya", "Allison Taylor", "Wanda", "Weasels", "White Kid", "White Weasel", "White-Haired Girl", "Alex Whitney", "Ralph Wiggum", "Yellow Kid"];
	var fourth_grade_student = ["Amy", "Audrey McConnell's Student 1", "Audrey McConnell's Student 2", "Audrey McConnell's Student 3", "Audrey McConnell's Students", "Adrian Belew", "Bashir bin Laden", "Bodhi", "Wendell Borton", "Boy with Bangs", "Boy with shades", "Brown Long Haired Girl", "Buck-toothed boy", "Buck-toothed girl", "Cool kid", "Cypress Creek Milhouse (A.K.A Milhouse look alike)", "Donny (The Debarted)", "Dr. Hibbert's Second Son", "Edna Krabappel's Students", "Ezekiel", "Female Twin", "Todd Flanders", "Girl with glasses", "Ishmael", "Jaffee", "Kevin (Stealing First Base)", "Lester", "Lewis Clark", "Lewis' lookalike", "Long-haired girl", "Male Twin", "Martin Prince", "Nikki McKenna", "Mike's Son", "Milhouse (Shelbyville)", "Nelson Muntz", "Nina Skalka", "Photo Girl", "Rex (Bart of Darkness)", "Richard", "Shelbyville boy", "Shelbyville lemonade boy's brother", "Shelbyville Martin", "Shelbyville Nelson", "Sherri Mackleberry", "Bart Simpson", "Bart Simpson, Jr.", "Smug Girl", "Sophie Jensen", "Samantha Stankey", "Terri Mackleberry", "Tommy", "Milhouse Van Houten", "Warren (Camper)", "Üter Zörker"];
	var not_american = ["Kentucky Fried Panda", "Kitenge", "Muntu", "Titi", "Titi's sister", "Dr. Egoyan", "Chuck Garabedian", "Maggie's Husband", "Seymour Skinner", "Little Moe Szyslak", "Moe Szyslak", "The Moe imposter", "Andy (Bart vs. Australia)", "Captain Kidney Pie", "Bruno Drundridge", "Tobias Drundridge", "Gus", "Helen Reddy", "Space Mutant Female Victim", "Space Mutant Male Victim", "Adolf Hitler", "The Homer imposter", "McBain", "Wolfgang Amadeus Mozart", "Mrs. Pommelhorse", "Arnold Schwarzenegger", "Rainier Wolfcastle", "Abbie Simpson", "Alan Moore (character)", "Alexander Graham Bell", "Alfred Hitchcock", "Nigel Bakerbutcher", "Billy Ocean", "Tony Blair (character)","The Bloodening", "Shary Bobbins", "Mr. Bont", "C. Ebenezer Burns", "David Byrne (character)", "Prince Charles", "Christmas Boy", "Colonel Custard", "Simon Cowell", "Arthur Crandall", "Declan Desmond", "Doctor Who", "Dr. Bartley", "Edmund", "Edwina", "Eliza Simpson (Treehouse of Horror XV)", "Queen Elizabeth II", "Emily Winthrop", "English Scientist", "Lord Thistlewick Flanders", "Gravedigger Billy", "Groundskeeper Willie", "George Harrison (character)", "Stephen Hawking (character)", "King Henry VIII", "Homer Fraud", "Hugh Parkfield", "Guy Incognito", "Jesminder Bhamra", "Jesminder Bhamra's father", "Jessica Simpson (character)", "Jessie Simpson", "Joan Bushwell", "Elton John (character)", "Judith Owen (character)", "Juliet Hobbes", "Horatio McCallister", "William MacDougal II", "Manchester United", "Mason Fairbanks", "C. W. McAllister", "Paul McCartney (character)", "Ian McKellen (character)", "Melvin Van Horne", "Mrs. Potts", "Nigel (manager)", "Northern Irish Leprechaun", "Mrs. Pennyfeather", "Harry Potter (character)", "Rex (I Love Lisa)", "Richard Dawkins (character)", "J. K. Rowling (character)", "William Shakespeare", "Shelbyville Elementary Groundskeeper", "Ringo Starr (character)", "Sussexton-Hamptonshire-Unleath", "Robert Terwilliger Sr.", "Tom Jones", "Total stranger", "The Who", "Sir Widebottom", "Willie's Mother","Abraham Simpson I", "Justin Bieber", "Canadian Flanders", "Canadian Nelson", "Frank Gehry (character)", "Gordy", "Johnny (Canadian)", "Justin Bieber (character)", "Man O' Pies", "Michael Ironside", "Milhoose", "Roofi", "Old Tut Simpson", "Orville Simpson", "Virgil Simpson", "Tyler(Male 3rd Grader)", "Tyler's Brother", "Tyler's Father", "Tyler's Sister", "Ling Bouvier", "Chinese Spy", "Craig", "Kentucky Fried Panda", "Cookie Kwan", "Speed-E-Mart owner", "White Dragon", "Madam Wu", "Dutch policeman", "Moe Szyslak", "Milhouse Van Houten", "Bambi Petitbois", "Antoine Bouvier", "Bambi Bouvier", "Clancy Bouvier", "Dorothé Bouvier", "Jacqueline Bouvier", "JoJo Bouvier", "Victor Bouvier", "Victor Bouvier II", "Cesar", "Charlemagne Bouvier", "Cléo Bouvier", "Didi Bouvier", "Françoise Billout", "French Boy", "French Chef", "French Scientist", "Frédérique Trousseau", "Honoré Bouvier", "Jacques", "Mr. Lacoste", "Lalique Bouvier", "Mademoissele Meringue", "Marcel Bouvier", "Monique Bouvier", "Pierre Bouvier", "Police Officer (The Crepes of Wrath)", "Pépé Bouvier", "Ugolin", "Yves Bouvier", "Sebastian Cobb", "Ernst", "Fraumaker", "Fritz", "Green Day", "Hans (business man)", "Baron von Herzenberger", "Horst", "Walter Hotenhoffer", "Kaiser Wilhelm II", "Karl", "Colonel Klink", "Ludwig van Beethoven", "Lugash", "Mr. Zörker", "Mrs. Zörker", "Nelson Muntz", "Nuclear Physics Professor", "Gunter", "Üter Zörker", "Apu Nahasapeemapetilon Sr.", "Indian Nerd", "Jesminder Bhamra", "Jesminder Bhamra's father", "Kavi Nahasapeemapetilon", "Kwik-E-Mart President", "Manjula's Father", "Manjula's Mother", "Apu's Mother", "Nahasapeemapetilon Family", "The Nahasapeemapetilon Octuplets", "Anoop Nahasapeemapetilon", "Apu Nahasapeemapetilon", "Gheet Nahasapeemapetilon", "Jamshed Nahasapeemapetilon", "Manjula Nahasapeemapetilon", "Nabendu Nahasapeemapetilon", "Pahusacheta Nahasapeemapetilon", "Poonam Nahasapeemapetilon", "Pria Nahasapeemapetilon", "Sandeep Nahasapeemapetilon", "Sanjay Nahasapeemapetilon", "Sashi Nahasapeemapetilon", "Uma Nahasapeemapetilon", "The Nahasapeemapetilon Octuplets Octuplets", "Total stranger", "Colin", "Father Sean", "Groundskeeper Seamus", "Irish Boy Most Resembling a Potato", "Leprechaun", "Tom O'Flanagan", "Old Irish Man", "Don Castellaneta", "Christopher Columbus", "Anna Maria D'Amico", "Michael D'Amico", "Don Vittorio DiMaggio", "Fat Tony", "Fit Tony", "Enrico Irritazio", "Jimmy the Snitch", "Legs", "Louie (mafia)", "Luann Van Houten", "Luigi (Nintendo)", "Mario", "Nana Sophie Mussolini", "Luigi Risotto", "Frankie the Squealer", "Francesca Terwilliger", "Gino Terwilliger", "Johnny Tightlips", "Milhouse Van Houten", "Akira", "Cosine", "Emperor Akihito", "Gogo Yubari", "Kumiko", "Kumiko's father", "Master Sushi Chef", "Richie Sakai", "Mr. Sakamoto", "Mr. Sparkle", "Tina", "Toshiro", "Wink", "Bartie Ziff", "Mr. Bergstrom", "Brenda Weingarten", "Rachel Cohen", "Dorit", "Isabel Gutierrez", "Jakob", "Hyman Krustofsky", "Krusty the Clown", "Mark (Regarding Margie)", "Old Jewish Man", "Scott Weingarten", "Jay Sherman", "Sophie", "Dolph Starbeam", "Tracy", "Artie Ziff", "Amid bin Laden", "Bashir bin Laden", "Mina bin Laden", "Female Korean Artist 1 (couch gag)", "Female Korean Artist 2 (couch gag)", "Kim Jong-il (character)", "Male Korean Artist 1 (couch gag)", "Male Korean Artist 2 (couch gag)", "Male Korean Artist 3 (couch gag)", "Sun Moon", "Kearney Zzyzwicz, Jr.", "Keausley Zzyzwicz,Jr.", "Mrs. Zzyzwicz", "Little Moe Szyslak", "Moe Szyslak", "The Moe imposter", "Kearney Zzyzwicz", "Ronaldo (Blame It on Lisa)", "Ronaldo (character)", "Cristiano Ronaldo", "Ballet Teacher", "Rasputin the Friendly Russian", "Slava", "Viktor", "Zhenya", "Bumblebee Man", "Eduardo Barcelona", "El Puerco", "Emma", "José Flanders", "Isabel Gutierrez", "Pepi", "Señor Ding Dong", "Señor Fritatta", "Spanish Squeaky-Voiced Teen", "Señor Spielbergo", "Unnamed Latino Man", "Fernando Vidal", "Inga", "Sven Simpson", "The Swedish Chef"];
	//Add tags to selector
	for (each in families){
		families[each]=families[each] + ' Family';
		$("#tags ul").append('<li><a href="#families" data-weight="10"' + '>' + families[each] + '</a>' + '</li>');
	}
	$("#tags ul").append('<li><a href="#bart_enemies" data-weight="30"' + '>' + 'Bart Enemies' + '</a>' + '</li>');
	$("#tags ul").append('<li><a href="#second" data-weight="11"' + '>' + '2nd Grade Students' + '</a>' + '</li>');
	$("#tags ul").append('<li><a href="#fourth" data-weight="8"' + '>' + '4th Grade Students' + '</a>' + '</li>');
	$("#tags ul").append('<li><a href="#not_american" data-weight="12" ' + '>' + 'Not American' + '</a>' + '</li>');
	$("#tags ul").append('<li><a href="#lisa_enemies" data-weight="20" ' + '>' + 'Lisa Enemies' + '</a>' + '</li>');
	$("#tags ul li a").click(function(selector) {
		//Handle the selected group when clicked
		var selector = [];
		var characters_select = [];
		type = this.href.split('#')[1]
		if (type == "families") selector.push(this.text.split(' Family')[0]);
		if (type == "bart_enemies") selector = bart_enemies;
		if (type == "second") selector = second_grade_student;
		if (type == "fourth") selector = fourth_grade_student;
		if (type == "not_american") selector = not_american;
		if (type =="lisa_enemies") selector = lisa_enemies;
		for (each in selector){
	  		//Obtain values from the db depending on the selection
            var tempQuery_name = characters_episodes_DB({name:{like:selector[each]}})
            var tempQuery_page = characters_episodes_DB({page:{is:selector[each]}})

	  		if (tempQuery_name.get().length != 0)
	  		{
	  			if (type=='families') characters_select.push(tempQuery_name.get())
			}
			if (tempQuery_page.get().length != 0)
			{
				if (type!='families') characters_select.push(tempQuery_page.get())
			}
		}
		//Fill selector with data
		//clear actual group_select
		group_select = []
		for (each in characters_select[0]){
			for (selection in characters_select){
				group_select.push(characters_select[selection][each].page)
			}
		}
		$("select").multipleSelect("setSelects", [])
		$("select").multipleSelect("setSelects", group_select)
		// This changes the global characters to show variable
		Characters_to_show =  characters_episodes_DB({page:group_select});
		//Initialize the cards 
		updateChar(Characters_to_show.get());
		plotMain();
		plotCo();
	});

	var gradient = {
		0:    '#f00', // red
		0.33: '#ff0', // yellow
		0.66: '#0f0', // green
		1:    '#00f'  // blue
	};

	if(!$('#myCanvas').tagcanvas({
	  textColour: '#fffff',
	  outlineColour: 'green',
	  outlineMethod: 'colour',
	  outlineThickness: 5,
	  minBrightness:0,
	  maxBrightness:0.5,
	  reverse: true,
	  depth: 0.8,
	  zoom: 1.5,
	  wheelZoom: false,
	  initial: [-0.130, 0.100],
	  textHeight: 10,
	  shadow: "#fff00",
	  shuffleTags: true,
	  decel:1, //We don't stop the rotating canvas when going out
	  maxSpeed: 0.05
	},'tags')) {
	  // something went wrong, hide the canvas container
	  $('#myCanvasContainer').hide();
	}
};
