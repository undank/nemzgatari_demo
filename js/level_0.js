monogatari.script ({
	'DebugStart' : [
		'stop music',
		'show scene #000000 with fadeIn',
		'play music burythelight8bit loop with fadeIn',
		'show image titlescreen at image-centertop with fadeIn',
		{'Choice': {
	            'Dialog': 'undank Thanks for playtesting! Id like to know the following: any script/joke improvement suggestions, if shit doesnt make sense, identifying ear rape audio etc etc',
	            'LevelOne': {
	                'Text': 'Level 1',
	                'Do': 'jump LevelOne',
	            },
	            'LevelTwo': {
	                'Text': 'Level 2',
	                'Do': 'jump LevelTwo',
	            },
	            'LevelThree': {
	                'Text': 'Level 3',
	                'Do': 'jump LevelThree',
	            },
		    }
		},
	],
	'TrueStart' : [
		'stop music',
		'show scene #000000 with fadeIn',
		'play music burythelight8bit loop with fadeIn',
		'show image titlescreen at image-centertop with fadeIn',
		{'Choice': {
	            'Dialog': 'undank To advance through the game, press the space key or click. Settings are at the bottom right of the screen and can be accessed any time during the game.',
	            'LevelOne': {
	                'Text': 'New Game',
	                'Do': 'jump LevelOne',
	            },
		    }
		},
	],
});