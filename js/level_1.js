monogatari.script ({
	// The Game Continues!!
	'LevelOne': [
		'stop music',
		'play sound alarm',
		'show scene #000000 with fadeIn',
		'y Damn, overslept again....',
		"y Hmm... looks like I am running low on funds.",
		"y All my sponsors and Twitch subs have abandoned me.... But why?",
		"y Maybe I should stream and get some donos...",
		'show scene bedroommessy with fadeIn',
		"y Well... maybe I will stream later.",
		"y I have got far more important things to do!",
		'jump LevelOneChoiceMenu',
	],

	'LevelOneChoiceMenu': [
		'stop music',
		'show background bedroommessy',
		{'Conditional': {
		    'Condition': function () {
		        return !monogatari.storage('playedSubway') && !monogatari.storage('playedWalk') && !monogatari.storage('playedVocal'); // && !monogatari.storage('playedController');
		    },
		    'False': 'next',
		    'True': "y Enough fooling around... it's time to stream! Chat needs me!"
		}},

	    {
	        'Choice': {
	            'Dialog': 'y What should I do?',
	            'Subway': {
	                'Text': 'Get Subway',
	                'Do': 'jump SubwayPath',
	                'Condition': function () {
	                    return monogatari.storage('playedSubway');
	                }
	            },
	            'Walk Bluey': {
	                'Text': 'Walk Bluey',
	                'Do': 'jump WalkPath',
	                'Condition': function () {
	                    return monogatari.storage('playedWalk');
	                }
	            },
	            'Vocal Practice': {
	                'Text': 'Vocal Practice',
	                'Do': 'jump VocalPath',
	                'Condition': function () {
	                    return monogatari.storage('playedVocal');
	                }
	            },
	            'Controller Practice': {
	                'Text': 'Controller Practice',
	                'Do': 'jump ControllerPath',
	                'Condition': function () {
	                    return monogatari.storage('playedController');
	                }
	            },
	            'Next Level': { 
	                'Text': 'Start stream',
	                'Do': 'jump PreLevelTwo',
	                'Condition': function () { // Check if all L1 activities have been played
	                    return !monogatari.storage('playedSubway') && !monogatari.storage('playedWalk') && !monogatari.storage('playedVocal'); // && !monogatari.storage('playedController');
	            	}
            	}
	        },
	    },
	],

	'WalkPath': [
		function markWalkAsPlayed() {
		    monogatari.storage({
		        playedWalk: false
		    });
		},
		'show scene #000000 with fadeIn',
		"y Let's go for a walk Blowey--I mean Bluey.",
		'play music birds',
		'show scene Park with fadeIn',
		'show character bluey Normal center with fadeIn',
		"y What a beautiful day! Isn't that right Bluey?",
		'play sound dogbark3',
		"bluey Woof!",
		'hide character bluey with fadeOut',
		'show character walker Normal with fadeIn at center',
		"Down the path, a woman walking a dog is heading towards you...",
		"y (Oh my god, she's beautiful.... what should I do? Gotta get this right...)",
		'show character walker Normal move character-centerright duration 1s',
		{'Choice': {
			'Dialog': "What should I do?",
			'Rizz': {
				'Text': 'Rizz',
				'Do': "jump DogRizz",
			},
			'Fight': {
				'Text': 'Fight',
				'Do': 'jump DogFight'
			},
		}
		},
		
	],

	'DogFight': [
		'hide character walker with fadeOut',
		'show character dog Normal with fadeIn',
		'play sound dogbark1',
		"dog Woof?",
		'y Think you are too good for me? I will show you!',
		'You wildly swing a haymaker, missing the dog completely.',
		'y I can kill a lynx!',
		'You collapse to the floor, pathetically.',
		'jump WalkEnd'
	],

	'DogRizz': [
		'hide character walker with fadeOut',
		'show character dog Normal with fadeIn',
		"y Wow you're gorgeous! Are you single?",
		'play sound dogbark1',
		"dog Woof?",
		"y I give really good strokes......",
		'hide character dog',
		'show character bluey Normal center with fadeIn',
		'play sound dogbark3',
		"bluey Woof?",
		'Bluey is getting jealous.',
		'hide character bluey with fadeOut',
		'show character dog Normal with fadeIn',
		"y (Sweating profusely)... I bet you love peanut butter...",
		'jump WalkEnd'
	],

	'WalkEnd':[
		'play sound dogbark2',
		"dog Whimper.... Woof! Woof!",
		'hide character dog',
		'play sound ds1womancry',
		'show character walker Mad center with fadeIn with shake',
		"walker Ahh! What is wrong with you?!",
		"walker Get away from Peppah, or I will call the police!",
		'show scene #000000 with fadeIn',
		"y Let's get out of here, Blow- I mean Bluey...",
		'jump LevelOneChoiceMenu'
	],

	'SubwayPath': [
		function markSubwayAsPlayed() {
		    monogatari.storage({
		        playedSubway: false
		    });
		},
		'show scene #000000 with fadeIn',
		'Heading to Subway...',
		'play music subway loop',
		'show scene Subway with fadeIn',
		'y Hey, so I will have my usual please, but go easy on the southwest sauce this time---',
		'show character e Normal center with fadeIn',
		"e Hi! I am sorry Sir, but I just started working here today, so I don't know your usual order...",
		'y Well, my name is Nemz. Kind of a big deal in here.',
		'y You will get used to seeing me around!',
		'show character e Mad center',
		'e Right...',
		'show character e Normal center',
		'e Okay Nemz, what is your usual?',
		'y Sigh, you better remember this....',
		"y Italian Bread - I don't want seeds because I'm not gay---",
		'show character e Mad center',
		'e ...',
		"y Turkey Breast, Ham, Pepperjack Cheese---",
		"y Toasted on the 6 inch setting please---",
		"y And make sure it's only for 15 seconds otherwise that shit will burn---",
		"y Lettuce, Tomato, Red oni---",
		'hide character e Normal center with fadeOut',
		'stop music subway with fade 3',
		"Suddenly, you hear something behind you...",
		"play sound ds1moan1",
		"show character oldman Normal center with shake",
		"oldman Hnnnnnnnggghhhhhhhh!!!",
		'hide character oldman with fadeOut',
		'play sound womanshortscream',
		'show character e Mad with fadeIn with shake',
		"e Oh my God! That man is having a heart attack!",
		"e Can anyone help him?",
		'hide character e with fadeOut',
		'show character oldman Normal with fadeIn at character-centerleft',
		{
			'Choice': {
				'Dialog': "What should I do???",
				'Help': {
					'Text': 'Help Him',
					'Do': "jump SubwayHelp",
				},
				'TellAJoke': {
					'Text': 'Tell a Joke',
					'Do': 'jump SubwayJoke',
				},
			}
		},
		'show scene #000000 with fadeIn',
		'...',
		'jump LevelOneChoiceMenu'
	],

	'SubwayHelp': [
		'You perform CPR on the old man.',
		"play sound bonecrack",
		"play sound ds1moan2",
		'show character oldman Normal with shake',
		"oldman Agghhh!!!",
		'play sound flatline',
		"You break his ribs. He was killed instantly.",
		'jump SubwayEnd',
	],

	'SubwayJoke': [
		'hide character oldman with fadeOut',
		'show character e Mad center with fadeIn',
		'e Does anyone know CPR?!',
		'y I do! In fact, I know the whole alphabet!',
		'play sound laughcrowd',
		'show character e Normal center',
		"Everyone in Subway laughed at your joke. No one died of cringe.",
		'...',
		'stop music subway',
		'hide character e with fadeOut',
		'play sound flatline',
		'show character oldman Normal center with fadeIn',
		'The old man has died.',
		'jump SubwayEnd',
	],

	'SubwayEnd': [
		'hide character oldman with fadeOut',
		'...',
		'show character e Mad center with fadeIn',
		'e ...',
		'y ...',
		'e ...',
		'y ...',
		'e ...',
		"y Is my fucking sub ready to go yet?!",
		'show scene #000000 with fadeIn',
		'Finally! Took her long enough... I better head back home.',
		'jump LevelOneChoiceMenu'
	],

	'VocalPath': [
		function markTidyAsPlayed() {
		    monogatari.storage({
		        playedVocal: false
		    });
		},
		'y I should do some vocal practice before I start streaming...',
		'y Time to practice my Charews!',
		'play sound compcharew',
		'y ***Chaaarrreeeewwwwwwwww noises***',
		'stop sound compcharew',
		"y Time to practice my intro!",
		'play sound compintro',
		'y ***Yoooooooooooooooooooo Noises***',
		'stop sound compintro',
		"y Time to practice my iconic moans!",
		'play sound compmoan',
		'y ***Nonce noises***',
		'stop sound compmoan',
		"y Nice, all warmed up now!",
		'jump LevelOneChoiceMenu'
	],

	'ControllerPath': [
		function markControllerAsPlayed() {
		    monogatari.storage({
		        playedController: false
		    });
		},
		'y Time to practice using my controller!',
		'show video controller immersive with close',
		function toggleTextBoxDisplay() {
		    const textBox = document.querySelector('text-box[data-component="text-box"][data-speaking="narrator"]');
		    if (textBox) {
		        textBox.style.display = 'none';
		    }
		},
		"y Nice, all warmed up now!",
		'jump LevelOneChoiceMenu'
	],

	'TidyRoom': [
		function markTidyAsPlayed() {
		    monogatari.storage({
		        playedTidy: false
		    });
		},
		'y I guess its about time I tidied this room...',
		'play sound construction',
		'show scene #000000 with fadeIn',
		'y ...',
		'show scene bedroomtidy with fadeIn',
		'y Much better!',
		'show scene #000000 with fadeIn',
		'A short time later...',
		'jump LevelOneChoiceMenu'
	],

	'PreLevelTwo': [
		'play sound vineboom',
		"y What?! My stream key has been stolen!",
		'play sound vineboom',
		"y Who could have taken it???",
		'play sound doorknock',
		"???: Ashley, it's dinner time!",
		"y Okay Mum, I will be down in a minute!",
		'show scene #000000 with fadeIn',
		"y I guess I will try to find my stream key tomorrow...",
		'...',
		'jump LevelTwo'
	],
});