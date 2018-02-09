// Define the sounds used in the game.
var sound = {

}

// Define the videos used in the game.
var videos = {

}

// Define the images used in the game.
var images = {

}

// Define the backgrounds for each scene.
var scenes = {
	"home": "home.png",
	"office1": "office1.png",
	"bossjob0": "bossjob0.png",
	"job": "job.png"
}

// Define the Characters
var characters = {
	"y": {
		"Name": "You",
		"Color": "#5bcaff",
		"Directory": "You",
        "Images":{ // Images Identifier for the "Show" statement.
            "Normal": "usernormal.png",
            "Sad": "usersad.png",
            "Flirt": "userflirt.png",
            "Supprised":"userup.png",
            "Happy": "userhappy.png",
            "Face": "usernormal.png",
      }  
	},

	"u": {
		"Name": "Unknown",
		"Color": "#5bcaff"
	},

	"r": {
		"Name": "Jenny",
		"Color": "#5bcaff",
		"Directory": "Jenny",
        "Images":{ // Images Identifier for the "Show" statement.
            "Normal": "secnormal.png",
            "Sad": "secsad.png",
            "Flirt": "secflirt.png",
            "Supprised":"secup.png",
            "Happy": "sechappy.png",
            "Face": "secnormal.png",
      }  
	},

	"b": {
		"Name": "Alexis",
		"Color": "#5bcaff"
	}
}

var script = {
	// The game starts here.
"Start": [
		"notify Welcome",
		{"Input": {
				"Text": "What is your full name?",
				"Validation": function(input) {
					return input.trim().length > 0;
				},
				"Save": function(input) {
					storage.player.Name = input;
				},
				"Warning": "You must enter a name!"
			}
		},
		"scene home",
		"Monday. 7:00 AM - alarm buzz sound",
		"Time to get up. After all, this could be the most important day in my life.",
		"show y Normal at right",
		"y (Awaaaw( yawn)I'm not used to waking up in the morning. Im not lazy dont get me wrong its just I`m not used to...)",
		"y (Yeah this one looks good and formal).", 
		"y (Ok I`m all set and ready to kick some ass. Ups there will be no kicking ass, better straighten up my thoughts).",
		"show y Supprised at right",
		"y (That reminds me, I still own a substantial sum of money to those Russian mob brothers. Yikes...( hard to swallow)).",
		{"Choice": {
				"Dialog": "y (Mafia guys will...)",
				"They will never find me": {
					"Text": "They will never find me",
					"Do": "jump No"
				},
				"They are mafia, they already know where I live.": {
					"Text": "They are mafia, they already know where i live.",
					"Do": "jump Yes"
				}
			}
		}
	],

	"Yes": [
		"show y Normal at right",
		"y (I will play it cool when they come knocking on my door.)",
		
		"jump continue"
	],

	"No": [
		"show y Normal at right",
		"y (Yeah those two morons will never find me!)",

		
		"jump continue"
	],
	"continue": [
	
		"scene job with fadeIn",
		"show y Happy at right",
		"y (Ohh I forgot to tell you. I`m a lawyer :)",
		
		"y (Ok, i have just finnished the law school and dont have a working experience but still...)",
    
    	"y (I`m a lawyer!)",
    	"show y Normal at right",
    	"y (Ok deep breath, man up and lets go to job interview).",
    
   		"y (I mean how hard can it be( why do i feel that i should never had said that).",
   		
    	"scene office1 with fadeIn",
    	
   		"y (Aaa( cough) khm...hm Good morning! I`m here for the interview!)",
    
    	"show y Supprised at right",
    
   		"y (She`s just staring at me... Ohh what should i say, maybe this is part of the interview. ( I`m starting to sweat).)",
   		
   		"u And your name honey?.",
    
    
    
    	"y (Ohh yeah i forgot. How stupid of me).",
    
    	"y Yes, my name is {{player.Name}} and I am here for the job interview.",
    
    	"u You see honey it`s not that difficult to properly introduce yourself.",
    
    
    
    	"r My name is Jenny Black and I work here as a receptionist. Please call me miss Jenny!.",
    
    
    	"y Ok, nice to meet you miss Jenny.",
    
	    
    	"r So while we wait exactly 8:00AM tell me something about yourself.",
    
    	"y Sure!",
    
    	"y I have just finished law school with exceptional grades.",
    
    	"y Before that I was a Professional Athlete playing Football for about 3 years, hence, my college scholarship.",
    
    	"y And here I am...",
    
    
    
    	 "r Wow know I understand why you are so handsome.",
     
   		 "r Brains and muscles, I like that in a man.", 
    
   		 "y (Hmm i think I`ve impressed her. Touchdown( he,he I had to say it).",
    
   		 "r I`m a big fan of healthy living. Maybe you`ve noticed?",
    
   		 "y (Guess I was too nervuos to look at her properly. She`s stunning. Such a firm body and tight skin. She must be in her early 40`s).",
    
   		 "y (But her body is just perfect. Really defined muscles).",
    
   		 "y (Ohh god I`m getting thurned on just looking at her right now! I will mess up my interview!!! Better concentrate on a job ahaid).",
   		 {"Choice": {
				"Dialog": "r Maybe you`ve noticed?",
				"Yes": {
					"Text": "You really look like you`re in a proper shape.",
					
					"Do": "jump Yes"
				},
				"No": {
					"Text": "I am too busy to notice.",
					
					"Do": "jump No"
					
				}
			}
		}
	],
	"Yes": [
		"hide y",
		"show r Happy at right",
		"r Thank you so much. As a matter of fact I practice fitness and yoga every day.",
		"hide r",
		"show y Normal at right",
		"y Its really obvious",
		"jump continue2"
	],

	"No": [
		"hide y",
		"show r Sad at right",
		"r Huh, guess you didn`t notice!",
   		"jump continue2"
   	],
	"continue2": [
		"r Ok its time know. Let me ring the boss",
    
    
    
    	"y (Know I can see her full body and figure. I think her body is tighter than mine.",
    	"y (Just stunning women. Better not to think about her right know because im feeling like I will get an erection...)",
    
    
    
    	"r Follow me this way, handsome...",
    
    	"y Yes miss Jenny...",
    
    	"y (You can do whatever you want with me miss Jenny.)",
    
    	"r Did you say something?",
    
   		"y Huh No!",
    
   		"y (I didn`t said it out loud, did I?!?)",
    
    
    
   		"r You can wait in a conference room. Boss will be with you any minute now.",
    
    
    
   		"r Good luck, and dont mess this up. I really like you!",
    
    
    
   		"y (Ok, I`m alone now. Time to sort out my thoughts. Ahh I knew I forgot something).",
   		"y (I forgot to masturbate this morning. Thats why Im so tense right know.)", 
   		"y (She`se just an average women and I act like I never saw such a sexy and flirty... damn!)",
    
    	"y (My hormones are all boiling know. Deep breathing, and sad thoughts. Thats more like it.)",
    
    
    	"y (Ohh god not more of them. I promise I will go to church more regulary from today. Just bring me some ugly bi**t*s).",
    
   		"y (Maybe she`s not here for me. ( its obvious she`s the Boss Lady))."
	]
}