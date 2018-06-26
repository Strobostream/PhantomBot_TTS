//ROUGH TTS SYSTEM PHANTOMBOT   https://community.phantombot.tv/uploads/default/original/1X/cefcb68897097dadb2a16c3dc548543770b3384a.js
var TTS = {
    speak: function(inputText){//Define function getting & playing TTS
	var speechText = "<voice>" + inputText;
	//Post speech text.
	$.say(speechText);
	$.panelsocketserver.alertImage(speechText);
    }
};
//Adding text to speech to PhantomBot
(function(){
    //Define cost of shouting:
    var PRICE = 10;
    //Define function calling tts.
    function speak(textToSpeak){
	TTS.speak(textToSpeak);
    }
    //Bind tts to a command.
    $.bind('command',function(event){
	var command = event.getCommand(),
	    inputText = event.getArgs()[0];
	//Check command.
	if (command.equalsIgnoreCase('shout')){
	    speak(inputText);
	}
    });
	//Register command.
	$.bind('initReady',function(){
	    if($.bot.isModuleEnabled('./systems/speakSystem.js')){
		$.registerChatCommand('./systems/speakSystem.js','shout',PRICE);
	    }
	});
})();
