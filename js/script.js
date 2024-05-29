/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'Pizza': {
		title: '',
		subtitle: "Click the 'Close' button to launch the minigame in a new tab. Do NOT close the original tab or you will lose your progress. Don't worry, the link is very safe, you can trust me 😇",
		body: `
			<p><a href='https://undank.github.io/pizza-minigame/' target="_blank"</a></p>
		`
	},
});



monogatari.action ('notification').notifications ({ // Define the notifications used in the game
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Nemzgatari VN Engine',
		icon: ''
	}
});

monogatari.action ('particles').particles ({ // Define the Particles JS Configurations used in the game
});

monogatari.action ('canvas').objects ({ // Define the canvas objects used in the game
});

monogatari.configuration ('credits', { // Credits of the people involved in the creation of this dogshit game
});

monogatari.assets ('gallery', { // Define the images that will be available on your game's image gallery
});

monogatari.assets ('music', { // Define the music used in the game.
	"birds": "birds.ogg",
	"subway": "subway.m4a",
	"fifa": "fifa.ogg",
	"sweden": "sweden.ogg",
	"pizzaog": "pizzaog.ogg",
	"greenpath": "greenpath.ogg",
	"burythelight8bit": "burythelight8bit.ogg",
	"londoncalling8bit": "londoncalling8bit.ogg",
	"gael8bit": "gael8bit.ogg",
	"victory": "victory2.m4a",
});

monogatari.assets ('voices', { // Define the voice files used in the game.
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	"dogbark1": "dogbark1.mp3",
	"dogbark2": "dogbark2.mp3",
	"dogbark3": "smalldogbark.mp3",
	"womanshortscream": "womanshortscream.mp3",
	"construction": "construction.mp3",
	"doorknock": "doorknock.mp3",
	"exclamation": "exclamation.ogg",
	"ds1moan1": "ds1moan1.m4a",
	"ds1moan2": "ds1moan2.m4a",
	"ds1womancry": "ds1womancry.ogg",
	"flatline": "flatline.m4a",
	"laughcrowd": "laughcrowd.m4a",
	"bonecrack": "bonecrack.m4a",
	"vineboom": "vine-boom.m4a",
	"cr7": "cr7.m4a",
	"messi": "messi.mp3",
	"compcharew": "compcharew.ogg",
	"compintro": "compintro.ogg",
	"compmoan": "compmoan.ogg",
	"windows10error": "windows10error.ogg",
	"cheers": "cheers.ogg",
	"hack": "hack.ogg",
	"alarm": "alarm.ogg",
});

// Define the videos used in the game.
monogatari.assets ('videos', {
	"controller": "controller.mp4",
	"canumikasa": "canumikasa.mp4",

});

// Define the images used in the game.
monogatari.assets ('images', {
	"elazerocar": "elazerocar.png",
	"titlescreen": "titlescreen.gif",
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"bedroommessy": "messybedroom.png",
	"Subway": "subwayinstore.jpg",
	"Park": "park.jpg",
	"FIFA": "fifa.png",
	"dist2twitch": "dist2twitch.png",
	"ERZip1": "ERzip1.png",
	"ERZip2": "ERzip2.png",
	"elatwitch": "elatwitch.png",
	"pizzabg": "pizzabg.png",
	"hobtwitch": "hobtwitch.png",
});


// Define the Characters
monogatari.characters({
	'y': {
		name: 'Nemz38',
		color: 'yellow'
	},
	'e': {
		Name: 'Subway Employee',
		Color: '#ffff9f',
		Images: {
			Normal: 'sub_emp_hap.png',
			Mad: 'sub_emp_mad.png'
		}
	},
	'undank': {
		Name: 'Undank',
		Color: '#C8A2C8',
	},
	'oldman': {
		name: 'Old Man',
		color: '#5bcaff',
		Images: {
			Normal: 'oldman.png'
		}
	},
	'bluey': {
		name: 'Bluey',
		color: '#5bcaff',
		Images: {
			Normal: 'bluey.png'
		}
	},
	'dog': {
		name: 'Dog',
		color: '#C4A484',
		Images: {
			Normal: 'dog.png'
		}
	},
	'walker': {
		name: 'Dog Walker',
		color: '#5bcaff',
		Images: {
			Normal: 'womandog_hap.png',
			Mad: 'womandog_mad.png'
		}
	},
	'ela': {
		name: 'Elajjaz',
		color: '#5bcaff',
		Images: {
			Normal: 'ela_normal.png',
			Pizza: 'ela_pizza.png',
			Mad: 'ela_kratos.png'
		}
	},
	'hob': {
		name: 'The_Happy_Hob',
		color: 'orange',
		Images: {
			Normal: 'hob_happy.png',
			Sword: 'hob_sword.png',
			Bald: 'hob_bald.png',
		}
	},
	'dist': {
		name: 'Distortion2',
		color: '#943F55',
		Images: {
			Normal: 'dist2.png',
			BF: 'distbf.png'
		}
	},
	'bing': {
		name: 'bing',
		color: '#5bcaff',
		Images: {
			Normal: 'bing.png'
		}
	},
	'zero': {
		name: 'Zero',
		color: '#5bcaff',
		Images: {
			Normal: 'zero_happy.png',
			Mario: 'zero_mario.png',
			Mad: 'zero_mad.png'
		}
	},
	'hellofresh': {
		name: 'Hello Fresh',
		color: '#5bcaff',
		Images: {
			Normal: 'hellofresh.png'
		}
	},
	'nordvpn': {
		name: 'Nord VPN',
		color: '#5bcaff',
		Images: {
			Normal: 'nordvpn.png'
		}
	},
	'displate': {
		name: 'Displate',
		color: '#5bcaff',
		Images: {
			Normal: 'displate.png'
		}
	},
	'herowars': {
		name: 'Hero Wars',
		color: '#5bcaff',
		Images: {
			Normal: 'herowars.png'
		}
	},


});
monogatari.storage ({
		    playedSubway: true,
		    playedWalk: true,
		    playedVocal: true,
		    playedController: true,
		    playedTidy: true,
		    playedDist: true,
		    playedEla: true,
		    playedHob: true,
		});

monogatari.script ({
	// The game starts here.
	'Start': [
		'stop music',
		{'Choice': {
	            'Dialog': 'undank Thanks for playtesting! Id like to know the following: any script/joke improvement suggestions, if shit doesnt make sense, identifying quiet/ear rape audio etc etc',
	            'Start': {
	                'Text': 'Start',
	                'Do': 'jump TrueStart',
	            },
	            'Debug': {
	                'Text': 'Debug',
	                'Do': 'jump DebugStart',
	            },
		    }
		},
	],
});
