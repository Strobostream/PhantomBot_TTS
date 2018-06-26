//START TTS
		if (imageFile.substring(0,7) == "<voice>"){//Check if voice alert.
			var textToSpeak = imageFile.substring(7);//Remove "<voice>"
			//Pass text to window object.
			var speech = new SpeechSynthesisUtterance(textToSpeak);
			var voices = window.speechSynthesis.getVoices();
			speech.default = false;
			speech.voice = voices.filter(function(voice) { return voice.name == 'Google UK English Female'; })[0];
			speech.lang = 'en-GB'; //Also added as for some reason android devices used for testing loaded spanish language 
			speech.volume = 0.70;
			window.speechSynthesis.speak(speech);
			return;
		}
		//END TTS
