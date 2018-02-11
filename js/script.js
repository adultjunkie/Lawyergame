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
	"recept01": "recept01.png",
	"bossjob0": "bossjob0.png",
	"bossjob00": "bossjob00.png",
	"bosso1": "bosso1.png",
	"bosso2": "bosso2.png",
	"bosso3": "bosso3.png",
	"bosso4": "bosso4.png",
	"job": "job.png",
	"myroom": "myroom.png",
	"myoffice": "myoffice.png",
	"lisaoffice01": "lisaoffice01.png",
	"flat": "flat.png",
	"flat01": "flat01.png",
	"jennyflat01": "jennyflat01.png",
	"jennyflat02": "jennyflat02.png",
	"jennyflat03": "jennyflat03.png",
	"lisacar01": "lisacar01.png",
	"lisaclothes01": "lisaclothes01.png",
	"daughterkiss": "daughterkiss.png",
	"shoes01": "shoes01.png",
	"shoes02": "shoes02.png",
	"clothes": "clothes.png",
	"recept02": "recept02.png"
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
            "Tough": "usertough.png",
            "Supprised":"userup.png",
            "Happy": "userhappy.png",
            "Face": "usernormal.png",
      }  
	},
	"r": {
		"Name": "Jenny",
		"Color": "#5bcaff",
		"Directory": "Jenny",
        "Images":{ // Images Identifier for the "Show" statement.
            "Normal": "jennynormal.png",
            "Sad": "jennysad.png",
            "Flirt": "jennyflirt.png",
            "Supprised":"jennyup.png",
            "Happy": "jennyhappy.png",
            "Face": "jennynormal.png",
      }  
	},
	"a": {
		"Name": "Alexis",
		"Color": "#5bcaff",
		"Directory": "Boss",
        "Images":{ // Images Identifier for the "Show" statement.
            "Normal": "bossnormal.png",
            "Sad": "bosssad.png",
            "Flirt": "bossflirt.png",
            "Supprised":"bossup.png",
            "Happy": "bosshappy.png",
            "Face": "bossnormal.png",
      }  
	},
	"l": {
		"Name": "Lisa",
		"Color": "#5bcaff",
		"Directory": "Lisa",
        "Images":{ // Images Identifier for the "Show" statement.
            "Normal": "lisanormal.png",
            "Sad": "lisasad.png",
            "Flirt": "lisaflirt.png",
            "Supprised": "lisaup.png",
            "Happy": "lisahappy.png",
            "Face": "lisanormal.png",
      }  
	},
	
	"u": {
		"Name": "Unknown",
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
		"scene myroom",
		"Monday. 7:00 AM - alarm buzz sound",
		"Time to get up. After all, this could be the most important day in my life.",
		"show y Supprised at right",
		"y (Awaaaw( yawn)I'm not used to waking up in the morning. Im not lazy dont get me wrong its just I`m not used to...)",
		"Choosing the clothes",
		"y (Yeah this one looks good and formal).", 
		"show y Flirt at right",
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
		"show y Tough at right",
		"y (Yeah those two morons will never find me!)",

		
		"jump continue"
	],
	"continue": [
	
		"scene job with fadeIn",
		"show y Happy at right",
		"y (Ohh I forgot to tell you. I`m a lawyer :)",
		
		"y (Ok, I have just finnished the law school and dont have a working experience but still...)",
    
    	"y (I`m a lawyer!)",
    	"show y Normal at right",
    	"y (Ok deep breath, man up and lets go to job interview).",
    
   		"y (I mean how hard can it be( why do i feel that i should never had said that).",
   		
    	"scene recept01 with fadeIn",
    	
    	"show y Normal at right",
   		"y (Aaa( cough) khm...hm Good morning! I`m here for the interview!)",
    
    	"show y Supprised at right",
    
   		"y (She`s just staring at me... Ohh what should I say, maybe this is part of the interview. ( I`m starting to sweat).)",
   		
   		"hide y",
   		"show r Flirt at right",
   		"u And your name honey?",
    
    
    	"hide r",
    	"show y Supprised at right",
    	"y (Ohh yeah I forgot. How stupid of me).",
    
    	"y Yes, my name is {{player.Name}} and I am here for the job interview.",
    	"hide y",
    	"show r Normal at right",
    	"u You see honey it`s not that difficult to properly introduce yourself.",
    
    
    
    	"r My name is Jenny Black and I work here as a receptionist. Please call me miss Jenny!.",
    
    	"hide r",
    	"show y Happy at right",
    	"y Ok, nice to meet you miss Jenny.",
    
	    "hide y",
	    "show r Normal at right",
    	"r So while we wait exactly 8:00AM tell me something about yourself.",
    	"hide r",
    	"show y Normal at right",
    	"y Sure!",
    
    	"y I have just finished law school with exceptional grades.",
    
    	"y Before that I was a Professional Athlete playing Football for about 3 years, hence, my college scholarship.",
    
    	"y And here I am...",
    
    	"hide y",
    	"show r Flirt at right",
    
    	 "r Wow know I understand why you are so handsome.",
     
   		 "r Brains and muscles, I like that in a man.", 
   		 "hide r",
   		 "show y Happy at right",
    
   		 "y (Hmm I think I`ve impressed her. Touchdown( he,he I had to say it).",
    	 "hide y",
    	 "show r Flirt at right",
   		 "r I`m a big fan of healthy living. Maybe you`ve noticed?",
   		 "hide r",
   		 
   		 "show y Normal at right",
    
   		 "y (Guess I was too nervuos to look at her properly. She`s stunning. Such a firm body and tight skin. She must be in her early 40`s).",
    
   		 "y (But her body is just perfect. Really defined muscles).",
    
   		 "y (Ohh god I`m getting thurned on just looking at her right now! I will mess up my interview!!! Better concentrate on a job ahaid).",
   		 "hide y",
   		 "show r Flirt at right",
   		 {"Choice": {
   		 		
				"Dialog": "r Maybe you`ve noticed?",
				"Yes": {
					"Text": "You really look like you`re in a proper shape.",
					
					"Do": "jump Yes2"
				},
				"No": {
					"Text": "I am too busy to notice.",
					
					"Do": "jump No2"
					
				}
			}
		}
	],
	"Yes2": [
		"hide y",
		"show r Happy at right",
		"r Thank you so much. As a matter of fact I practice fitness and yoga every day.",
		"hide r",
		"show y Normal at right",
		"y Its really obvious",
		"jump continue2"
	],

	"No2": [
		"hide y",
		"show r Sad at right",
		"r Huh, guess you didn`t notice!",
   		"jump continue2"
   	],
	"continue2": [
		"hide y",
		"show r Normal at right",
		"r Ok its time know. Let me ring the boss",
		
		"hide r",
		"show y Normal at right",
		"scene recept02",
    	"show y Normal at right",
    
    
    	"y (Know I can see her full body and figure. I think her body is tighter than mine.",
    	"y (Just stunning women. Better not to think about her right know because im feeling like I will get an erection...)",
    
    	"hide y",
    	"show r Flirt at right",
    
    	"r Follow me this way, handsome...",
    	"hide r",
    	"show y Flirt at right",
    	"y Yes miss Jenny...",
    
    	"y (You can do whatever you want with me miss Jenny.)",
    	"hide y",
    	
    	"show r Supprised at right",
    	
    	"r Did you say something?",
    	"hide r",
    	"show y Supprised at right",
    	
   		"y Huh No!",
    
   		"y (I didn`t said it out loud, did I?!?)",
    
    	"hide y",
    	"show r Normal at right",
    
   		"r You can wait in a conference room. Boss will be with you any minute now.",
    
    	"show r Flirt at right",
    
   		"r Good luck, and dont mess this up. I really like you!",
    
    	"hide r",
    	"scene bossjob0",
    	"show y Normal at right",
   		"y (Ok, I`m alone now. Time to sort out my thoughts. Ahh I knew I forgot something).",
   		"show y Tough at right",
   		"y (I forgot to masturbate this morning. Thats why I`m so tense right know.)", 
   		"y (She`se just an average women and I act like I never saw such a sexy and flirty... damn!)",
    
    	"y (My hormones are all boiling know. Deep breathing, and sad thoughts. Thats more like it.)",
    
    	"show y Normal at right",
    
    	"y (Ohh god not more of them. I promise I will go to church more regulary from today. Just bring me some ugly bi**t*s).",
    
   		"y (Maybe she`s not here for me. ( its obvious she`s the Boss Lady)).",
   		"scene bossjob00",
   		"show a Normal at right",
   		"u You must be Mr. {{player.Name}}?",
   		"hide a", 
   		"show y Supprised at right",
   		 {"Choice": {
   		 		
				"Dialog": "y Ok what now?",
				"Yes": {
					"Text": "Act nervously and kiss her hand( duhh)",
					
					"Do": "jump Yes3"
				},
				"No": {
					"Text": "Act cool and shake her hand firmly",
					
					"Do": "jump No3"
					
				}
			}
		}
	],
	"Yes3": [
		"hide y",
		"scene bosso4",
		"show a Supprised at right",
		"a Wow what a gentleman. It`s so rear these days",
		"hide a",
		"show y Normal at right",
		"y You`re welcome, ms. ?",
		"hide y",
		"show a Flirt at right",
		"a Nice to meet you, My name is Alexis Hass and I`m a director in this firm. You can call me miss. Alexis.",
		"hide a",
		"show y Flirt at right",
        "y Pleasure is all mine miss. Alexis but I preffer to call you mrs. Hass if thats ok? ( mhhm mhm licking my lips).",
        "hide y",
        "show a Flirt at right",
        "a Whatever you wish...( ohhh I have a lot on my mind right now).", 
		"jump continue3"
	],

	"No3": [
		"hide a",
		"show y Normal at right",
		"y Yes I am, ms. ?",
		"hide y",
		"show a Happy at right",
        "a Nice to meet you, My name is Alexis Hass and I`m a director in this firm. You can call me mrs. Hass.",
        "hide a",
        "show y Flirt at right",
        "y Nice to meet you boss khm..., I mean, mrs. Hass.",
   		"jump continue3"
   	],
	"continue3": [
		"hide y",
		"scene bossjob00",
		"show a Flirt at right",
		"a Please lets go to my office for official interview.",
		"hide a",
		"show y Flirt at right",
		
        "y Lead the way( ohh that sounds nice).",
        
        "scene bosso1",
        "show y Supprised at right",

   		"y  Miss Ass!! almighty... God please tell me I didnt say that loud. Please just this time...?!?",
   		"hide y",
   		
   		"show a Normal at right",
    
   		"a Make yourself comfortable on that chair while I grab your CV.",
   		 
   		"hide a",
   		"show y Normal at right", 
    
  		"y (Oh god thank you soo much. I cant belive this day. Its like everything is against me... Look at her!)",
    	"show y Tough at right",
   		"y (No way this women will be my boss. I will get fired so fast like I`m running back. Wait I was... damn).",
    
   		"y (Her ass is huge, its out of proportion of her body. Like those sisters on TV what was their names( yeah like I dont remember ;) )",
    
   		"y (Better say something, this is getting akward.)",
    
  		"y Sure mrs. Hass take your time( really thats all I came up with- uhhh).",
  		 
  		
  		"show y Normal at right",
  		"y (Ohh no, no... too late..., I got a massive boner. Uhhh glad I`m sitting right now. Please just dont ask me to stand.)",
  		
    	"scene bosso2",
    	"show a Normal at right",
    	"a Ok, I got it. Now lets sit and do this.",
    	"hide a",
    	"show y Normal at right",
    	
   		"y (Seriously - leaning against that desk. Showing that... that massive... beautiful.. meat in front of me. Nicely played.)",
    
        "y (This women is dangerous in a good and a bad way. Maybe she is trying to confuse me, to see how I react in tense situations.)",
    
    	"y (Thats it, use your logic. You will be interviewing all kind of beautifull ladyies every day on your new job. You must think straight.)",
   
    
    	"y (She is reading alot. I`m getting nervous right now.)",
    	"hide y",
    	"show a Normal at right",
    
    	" a ...former football player...serious knee injury...best grades...Hmmm so you had to end sports career and decided to become lawyer. Is that right?.",
    	"hide a",
    	"show y Tough at right",
    
        "y Yes that is about right, I mean in short, yes.",
        "hide y",
        "show a Flirt at right",
    
        "a Ok, since you were such a good student then my next couple of questions would be easy for you.",
        
        "hide a",
        "show y Normal at right",
    
    	"y (I knew it. Test. Ok, not an issue, I now everything about law... I wont lie I`m that good.",
    
    	"y Shoot!",
    	"scene bosso3",
    	"show a Normal at right",
    	
    	"a Ok first question!",
    	
  		 {"Choice": {
   		 		
				"Dialog": "You are arrested.  Do you?",
				"Correct": {
					"Text": "Refuse to say anything at all.",
					
					"Do": "jump Q2"
				},
				"Wrong": {
					"Text": "Give an interview to put your side of things on the record.",
					
					"Do": "jump Fail"
					
				},
				"Wrong2": {
					"Text": "Tell them why you are innocent but not put anything in writing.",
					
					"Do": "jump Fail"
					
				}
			}
		}
	],
   	"Q2": [
   		
   		{"Choice": {
   		 		
				"Dialog": "A serious crime carrying a penalty of more than 1 year in prison is?",
				"Correct": {
					"Text": "Misdemeanor",
					
					"Do": "jump Fail"
				},
				"Wrong": {
					"Text": "Felony",
					
					"Do": "jump Q3"
					
				},
				"Wrong2": {
					"Text": "Verdict",
					
					"Do": "jump Fail"
					
					
				}
			}
		}
	],
	"Q3": [
	
   		{"Choice": {
   		 		
				"Dialog": "You want to make a simple will. Is it good enough to?",
				"Correct": {
					"Text": "Use a Do it yourself will form from the newsagent.",
					
					"Do": "jump Fail"
				},
				"Wrong": {
					"Text": "Go to the expense of getting legal advice",
					
					"Do": "jump Daughterjob"
					
				},
				"Wrong2": {
					"Text": "Write it down on a piece of paper and tell your children what you want to do.",
					
					"Do": "jump Fail"
					
				}
			}
		}
	],
   	"Fail": [
   		  "scene bosso2",
   		  "show a Normal at right",
   		  "a Well, you deffinetely need to refresh your memory.",
     
   		  "a Ok, no need to worry. Tomorrow is a new day. I suggest you go home and rest.",
     
   		  "a Now on your way out, go right to the end of the hall and you will find your new office.",
     
    	  "a You have an impressive resime and consider yourself hired.",
    	  "hide a",
    	  "show y Sad at right",
     
   		  "y Well thank you. I am thrilled to be working for you.",
   		  "hide y",
   		  "show a Happy at right",
     
    	  "a Great. I will see you tomorrow morning at 8:00AM sharp. Goodbye!",
    	  "hide a",
    	  "show y Sad at right",
     
    	  "y (Well that test didn`t go well as expected. But still i`m hired. Is it because of my looks. Hmm i dont think so.)",
     
   		  "y (Well no matther, lets go to my office right now.)",
     
    	  "scene myoffice",
    	  "show y Normal at right",
    
    	  "y (Hmm not bad. A desk, printer, computer, everything I need basically.)",
     
    	  "y (I wonder what my first assigment will be.)",
    	  
    	  "jump homeday1"
      
     ],
    	  
     "Daughterjob": [
     	  "scene bosso2",
     	  "show a Happy at right",
     	  "a Wow impressive. This test was too easy for you I guess.",
     	  
     	  "a Well consider yourself hired and better yet I`m giving you your first assigment right now!",
     	  "hide a",
     	  "show y Happy at right",
       
          "y Huh great. I`m ready.",
          "hide y",
          "show a Flirt at right",
          
          "a Excellent. This assigment is very important to me so dont mess this one up.",
    
          "a Now on your way out, go right to the end of the hall and you will find your new office.",
                                                                                                  
          "a Your assigment will be ready in a couple of minutes. I have a faith in you. Goodbye!",
          
          "hide a",
          
          "show y Tough at right",
                                                                                      
          "y I`m a team player, you can count on me. Goodbye!",
             
          "scene myoffice",
          "show y Normal at right",
          
          "y (Hmm not bad. A desk, printer, computer, everything I need basically.)",
             
          "y (Wow and what about my new boss. She looks strict but she`s actually kind.",
          "y (I`m certan that my first assigment will be the bomb.",
        
          "scene lisaoffice01",
          
          "show y Supprised at right",
          
          "y (Aaaa a nuclear bomb. Am I color blind or this, this statue in front of me wears pink dress. Pink!!!.",
          "hide y", 
          "show l Happy at right",
          
          "u Hi! I can see you`re stunned by my presence. Let me break the ice and introduce myslef!.",
          "hide l",
          "show y Normal at right",
          
          "y (Stunned?, I`m shocked - blasted away. I dont really mind that she has extra few pounds on her, but her outfit. It`s hilarious.",
          "hide y",
          "show l Flirt at right",
          
          "l My name is miss Lisa Hass, and yes I`m a daughter of Mrs. Hass, your boss. He he( giggles).",
		  "hide l",
		  "show y Tough at right",
		          
          "y (Ohhh I get it now. She`s a spoiled little brat thats why she looks like this. It makes sense. Rich parents - spoiled kids.",
          
           {"Choice": {
   		 		
				"Dialog": "Ok what should I do now?",
				"Kiss1": {
					"Text": "Do a stupid thing and kiss her hand!",
					
					"Do": "jump Kiss"
				},
				"Nokiss2": {
					"Text": "Act cool and shake her hand firmly",
					
					"Do": "jump Nokiss"
				}
			}
		}
	],
   	"Nokiss": [
   			"hide y", 
   			"show l Sad at right",
     		"l (Uhh he didnt kissed my hand.) Ohh I mean nice to meet you!",
     		"hide l",
     		"show y Tough at right",
            "y Nice to meet you too, miss Lisa!",
            "jump continue4"
          ],
    "Kiss": [
    		"hide y", 
    		"show l Supprised at right",
     		"l (OMG he kissed my hand.) Khm I mean what a gentleman. He he( giggling).",
     		"hide l",
     		"show y Normal at right",
            "y You`re welcome, miss. Lisa.",
            "y (Ohh god I hate myself now. I was the most popular guy in college and now I`m kissing spoild kids hands.",
            "show y Sad at right",
            "y (Where did my life went wrong??",
            "jump continue4"
           ],
	"continue4": [
		"show y Normal at right",
		"y (I still dont get it why is she in my office and how did she now that I`m here.", 
		"y (She must be kind it seems and greets all new employees this way.( sooo naive).", 
        "hide y",
        "show l Flirt at right",  
          
        "l Ok, now your welcome suprise. I`m your first assigment. Ta daaaa...",
        "hide l",
        "show y Supprised at right",
        "y Omg no, nooooo.( slapped my forehad). (My first assigment and I have to babbysit spoiled brat...)", 
          
        "y Uhhh, ahhh I mean what a suprise.",
        "hide y",
        "show l Happy at right",
          
        "l I now right? Lets not waste any more time. We`re going shopping... he he( giggles).",
        "hide l",
        "show y Sad at right",
          
        "y (This is the worst day of my life. Period. Wait, the day of my knee injury was the worst. This is the second worst day of my life.)",
          
        "y Uhh hooorey!( Unenthusiastically) lets go!",
          
        "scene lisacar01", 
        "show y Supprised at right",
        
        "y (What the hell. A pink car!!! She`s so rich that she can match a cars paint with her outfit.", 
        
        "y (Or maybe she has a thing for pink color.)",
        "hide y",
        "show l Happy at right",
        
        "l Well what do you think? This is my baby.",
        "hide l",
        "show y Normal at right",
        
        "y (Wait a second. I didnt have a chance to look at her properly.", 
        
        "y (She`s chubby I know. But look at her skirt. Is that a giant ass or just her skirt not following her contour.", 
        
        "show y Tough at right",
        
        "y (That does looks like an ass. No way, my dick is playing tricks with my mind.)",
        
        "hide y",
        "show l Flirt at right",
        
        "l Are you just checking my big trunk?( giggles)",
        "hide l",
        "show y Supprised at right",
        
        "y Huh what no.. I was just admiring the car... hehe( busted).", 
        
        "y (My god her hands look like they are touching her body and not her skirt.", 
        
        "y (Is it possible that her ass is that big!!! Better clear my thoughts, she will notice my rising erection.", 
        "hide y",
        "show l Flirt at right",
        
        "l You can drive my baby, you big Ape. Just be gentle with her. Its her first time with someone else but me! heeh( giggles).", 
        "hide l",
        "show y Supprised at right",
        
        "y )Huhh what did she just said?!. We better leave right now.)",
        "show y Normal at right",
        "y Ok time to go to the shopping mall.",
        "hide y",
        
        "After a short ride and unpleasant music from the car stereo( lady gaga, katy perry...etc) we finally arrive at the mall.",
         
        "scene shoes01",
        "show y Tough at right",
        
        "y (This place is huge. I`m gonna be stuck here all day.)",
        "hide y",
        "show l Happy at right",                       
                               
        "l First stop, my favorite, the shoes shop. Yay...",
        
        "l I`m gonna pick some shoes and you`re gonna tell me if they look good on me! Wait here!",
        "hide l",
        "show y Sad at right", 
                                    
        "y (This day will never end.)",
                                             
        "scene shoes02",
        
        "show l Flirt at right",
                    
        "l Sooo, what do you think? Do you like them?",
        "hide l",
        "show y Tough at right",
        "y (Wow, actually she`s kind of sexy when I look at her legs. And that ass...", 
        
         {"Choice": {
   		 		
				"Dialog": "Better answer this question right!.",
				"Shoesy": {
					"Text": "Say that shoes look really sexy on her legs",
					
					"Do": "jump shoesy"
				},
				"Shoesn": {
					"Text": "That shoes look really fancy!",
					
					"Do": "jump shoesn"
				}
			}
		}
	],
	"shoesy": [
				"hide y",
				"show l Happy at right",
				"l Ohh my. I am blushing. (giggling).",
				"l You know today I`m wearing panties so you can have a closer look, dont be shy.",
				"hide l",
				"show y Supprised at right",
              	"y Uhh ohhh thats ok I can see it from here. I`m not shy he he( embarrassed).",
               	"y (If I continue saying something like that I will get in deep trouble.",
               	"hide y",
               	"show l Flirt at right",
               	"l Well, thank you. I will buy them. He he( giggles).",
               	"jump continue5"
     ],
	"shoesn": [
				"hide y", 
				"show l Happy at right",
               	"l Well thank you. I will buy them. He he( giggles).",
               	"jump continue5"
           ],
	"continue5": [
		"hide y",
		"show l Happy at right",
		"l Ok, last stop - clothes shop. Yaaay.",
		
		"scene clothes",
        "hide l",
        "show y Tough at right",
        
        "y (Yaaaay...)",
        
        "y (Thank good, last shop for today.)",
        
        
        "y (Hmmm that jeans look good on her. She`s not that fat actually. It must be her skirt.)",
        "hide y",
        "show l Flirt at right",
        
        "l Well, how do I look? Wait dont asnwer me. Look now?.",
        
        "scene lisaclothes01",
        "show y Supprised at right",
        
        "y (Sweet mother of god!!!)",
        
        "y (My suspicions are confirmed. She has a giant ass. There is no mistake, she is a daughter of Mrs. Hass after all.)",
        "hide y", 
        "show l Flirt at right", 
        
        "l So do you like what you see. he he ( giggles).",
        "hide l", 
        "show y Tough at right",
        
        "y (God that pants are gonna birst any second know. ( that would be hilarious actually).",
        
        "y (I know one thing thats gonna burst also. My boner!!!.)", 
        
        "y Better end this quickly or she will notice.)",
        "show y Normal at right",
        
        "y Yeah it looks great on you. Are we finnished?", 
        "hide y", 
        "show l Flirt at right", 
        
        "l Ohh well yes, shopping is over. You can take me back to office. But before that - a kiss!!!.",
        "hide l", 
        "show y Tough at right",
        
        "y (Ok, thats normal. Girls like these kind of thing.)",
        
        "y Sure...",
        "hide y", 
        "scene daughterkiss",
        
        "show l Flirt at right",
        
        "l Right here on my cheeks. No funny business, he he(giggles).",
        
        "hide l", 
        "show y Supprised at right", 
        
        
        "y (What the hell....!?)",
        
        
        "hide y", 
        
        "She grabbed my head and kissed me on my lips. This is so embarrassing.",
        "show l Happy at right", 
        
        "l Ooopss my mistake. he he( giggling). Lets go now.",
        
        "jump homeday1"
      ],
	"homeday1": [
		 "scene job", 
		 "show y Normal at right", 
		 
		 "y Ok time to go home. I need a litle rest and time to gather my thoughts",
     
    	 "y (I hope there will be no more suprises for today.( yeah like thats gonna happen he he).",
       	 "scene flat", 
     	
      	 "show y Tough at right", 
     	
     
   		  "y (Ohh man i was so hungry. Finnally had time to eat. And I eat a lot.)",
   		  
   		  "y (I`m a big guy after all. Ohh that reminds me. I forgot to tell something important he he( evil laugh).",
     	  "show y Happy at right", 
    	  "y (Those Russians that I own money to, well its for illegal anabolics that I used to buy from them...",
     
    	  "y (He he I know. It`s not a big deal actually. Money wise is maybe 2-3 month pay, well... I lie maybe 6 months worth of pay.",
     
    	  "y (And health wise its ok also. I needed a way to increase my muscle size. And I did what everyone else is doing. Using steroids.",
     
		  "y (And we are talking about high tech, state of the art anabolics here.", 
		  
		  "y (Those Russians know their stuff. It`s just bad that I dont have good genes and that my knees are like glass.)", 
		  "show y Normal at right", 
		     
    	  "y (Anyhow its time for me for to take my afternoon nap.)",
    	  
     	  "scene myroom",
     	  
     	  "Just as I was sinking to wonderfull world of dreams( mhhhm my personel harem) I was suddenly woken up by loud knocking on my door.",
     	  
     	  "scene flat01",
     	  "show y Supprised at right", 
     	  
  		   "y Uhh yes who is it?.",
     	  "hide y",
     	  
   		   "r Its me, Jenny your cute receptionist.",
     
    	  "scene jennyflat01",
    	  
    	  "show y Tough at right",
     
    	  "y Wow, what a nice suprise. (I didn`t see it coming. She is just stunning.)",
     
   		  "y Jenny its nice to see you. What a suprise!.",
     	  "hide y", 
     	  "show r Happy at right",
     	  	
   		  "r It`s miss Jenny for you( laughes). I decided to welcome you to our city and brought you a present - bottle of wine.", 
   		  "hide r", 
   		  "show y Normal at right",
   		  
   		  "y (Thank you, you are so sweat. Please cum inside( I would cum inside you if you are using pill that is he he).", 
          "hide y",
          
    	  "We kissed on cheek...", 
          "show y Tough at right",
          
    	  "y Welcome to my humble new home",
          "hide y",
          "show r Flirt at right",
                                      
   		  "r Yeah, its humble all right. Let me put my bag here.",
     
    	  "hide r",
                                                            
    	  "Just as she bent to put her bag on table I took a closer look on her body.",
                                                                                 
           "show y Normal at right",                                                             
     
    	  "y (Wow, just look at those ass and legs. You can clearly see that she puts alot of time and effort on her looks.)",
    	  
   		  "y (I wonder how firm her ass actually is. I`m so tempted now to just grab her butt with my hands. I better play it safe actually.)",
   		  
     	  "show y Flirt at right",
     	  
    	   "y Please take a seat. Make yourself comfortable.", 
    	   
           "hide y",
           
           "scene jennyflat02",
           
           "show r Flirt at right",
           
  		   "r Thank you.", 
     
    
     		"show r Normal at right",
     		
    		"r So how was your day? How did the intervew thing went?.", 
     		"hide r",
     		"show y Happy at right",
     		
    		"y Yeah everything went great. ( I smiled )." ,
     
   		   "y (Let me sit next to her so I can look at her body closely. One thought came up on my mind. Those breast are got to be fake. I mean implants.)",
     		
   		   "y (I have been with a lot of cheerleaders in my college days so I`m an expert when it comes to boobs.)",
     
    	   "y (But it`s so hard to guess when you are not holding them in you`re hands... Naturals are soo soft and tender. Nothing beats natural tits.)", 
     		"hide y", 
     		"show r Flirt at right",
     		
    	   "r Let me tie my shoe laces.", 
     
    
     	  "hide r",
     	  "show y Normal at right",
     	  
   		  "y (Hmm they look fake definitely. I can`t be 100 percent sure.)",
          "hide y", 
          "show r Flirt at right", 
          
   		  "r So {{player.Name}}, do you have something for drink or you`re gonna stair at my boobs all day.",
     	  "hide r", 
     	  "show y Supprised at right", 
     	  
  		   "y What, no I didnt( blushing).",
     		"hide y", 
     		"show r Flirt at right",
     		
   		  "r Ohh that is so sweet. Get me a glass of wine, honey.",
     		"hide r", 
     		"show y Normal at right",
     		
   		  "y Uhh sure. One glass of wine coming right up.", 
     
    
     		"hide y", 
     		"show r Sad at right", 
     		
  		   "r So, that is why you ended football career. So sad.", 
     		"hide r", 
     		"show y Sad at right", 
     		
   		   "y Yeah, heartbreaking.( chicks love this sentimental moments).",
     		"hide y", 
     		"show r Normal at right", 
  		   "r Ok, lets change subject. I wanna show you something. Aaaa!!!(opens mouth wide).",
     
     		"scene jennyflat03",
     		
     		"show r Happy at right", 
     		
   		   "r Do you like it?.", 
   		   
     		"hide r", 
     		"show y Supprised at right",
     		
   		   "y Ohh god yes.... I mean ( coughing) thats great. I love piercing on a girl.",
     		"hide y", 
     		"show r Flirt at right", 
     		
   		   "r Ohh dont know if I`m a girl more like an old aunt.",
     		"hide r", 
     		"show y Flirt at right", 
     		
  		   "y What?, no way. You look like you are in you`re early 30`s. ( lying so badly).",
  		   
  		   "scene jennyflat02",
  		   
     		"hide y", 
     		"show r Happy at right", 
     		
  		   "r You are so sweet... and cute heheeh",
     		"hide r", 
     		"show y Tough at right", 
     		
   		   "y (Well she does look that actually.)",
     		"hide y", 
     		"show r Flirt at right", 
     		
  		   "r Well I`m gonna take off this boots, they are killing me and use your bathroom if thats ok?",
     
           "show r Normal at right", 
                                                
  		   "r Hello, earth to {{player.Name}}, are you still with us honey?.",
      		"hide r", 
      		"show y Supprised at right", 
      		
   		  "y Huhh, yeah. You go right ahead...",
     		"show y Normal at right", 
     		
   		  "y (Wow, what legs. Stunning... This day is finally getting better.)",
     
    	  "scene flat01",
   		  "y (Let me just wait untill she comes back, and I will make my move.)",
     
   		  "Buzzing sound. Vibrates.",
     		"show y Supprised at right", 
   		  "y Ohh shit my phone rings. What a moment for a call.",
   		  "hide y", 
   		  "You have come to the end of this version of the game!",
   		  "For the news and latest games follow me on my website or patreon.com/adultjunkie",
   		  "Please consider supporting my work.", 
   		  "Thank you for playing."
	]
}