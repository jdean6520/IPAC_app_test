/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         
         //This is code for itializing text input and checking
         
         
         var textWidth = null;
         var textHeight = null;
         
         var answer = sym.$("answer");
         answer.html("");
         inputAnswer = $('<input />').attr({'type':'text', 'value':'', 'id':'answer'});
         inputAnswer .css ('font-size', 12);
         inputAnswer .css ('width', textWidth);
         inputAnswer .css ('height', textHeight);
         inputAnswer .css ('background-color','#ffffff');
         inputAnswer .appendTo(answer);
         
         
         function checkAnswer(){
         
         //var rightAnswer = inputAnswer.attr('value');
         
         var rightAnswer = inputAnswer.val();
         if (rightAnswer == sym.getVariable("key"))
         {
         	sym.play();
         	answer.html("");
         	inputAnswer = $('<input />').attr({'type':'text', 'value':'', 'id':'answer'});
         	inputAnswer .css ('width', sym.getVariable("textWidth"));
         	inputAnswer .css ('height', sym.getVariable("textHeight"));
         	inputAnswer .css ('background-color','#ffffff');
         	inputAnswer .appendTo(answer);
         	console.log("correct");
         
         
         }
         }
         
         sym.$("answer").on('input', function(e){
                  checkAnswer();
         });
         
         
         
         
         
         
         
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90336, function(sym, e) {
         //Pause timeline, get current time as variable
         //sym.setVariable("interaction_start", sym.$("audio")[0].currentTime);
         sym.stopAll();
         sym.$("audio")[0].pause();
         
         //This captures size of textbox on stage and passes its Width and Height
         textWidth = sym.$("answer").width();
         textHeight = sym.$("answer").height();
         
         //DO NOT DELETE THIS SECTION!
         inputAnswer .css ('width', textWidth);
         inputAnswer .css ('height', textHeight);
         sym.setVariable("textWidth", sym.$("answer").width());
         sym.setVariable("textHeight", sym.$("answer").height());
         
         //Enter the correct answer to be place in the textbox
         sym.setVariable("key", ".95");
         
         //interaction clip (in)
         sym.getSymbol("interaction_ETF").play("in");
         
         
         
         

      });
      //Edge binding end
      
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_play_pause}", "touchend", function(sym, e) {
         
         if (sym.isPlaying()) {
         	sym.stop()
         	sym.$("audio")[0].pause();
         
         
         sym.getSymbol("play_pause").play("pause");
         
         
         
         
         
         
         
         
         } else {
         	sym.play()
         	sym.$("audio")[0].play();
         
         	sym.getSymbol("play_pause").play("play");
         
         
         
         }
         
         
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 97053, function(sym, e) {
         //Pause timeline, get current time as variable
         //sym.setVariable("interaction_start", sym.$("audio")[0].currentTime);
         sym.stopAll();
         sym.$("audio")[0].pause();
         
         sym.getSymbol("interaction_hitarea_right").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 97306, function(sym, e) {
         sym.stopAll();
         sym.getSymbol("interaction_hitarea_right").play("in");

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 102043, function(sym, e) {
         //Pause timeline, get current time as variable
         //sym.setVariable("interaction_start", sym.$("audio")[0].currentTime);
         sym.stopAll();
         sym.$("audio")[0].pause();
         
         sym.getSymbol("interaction_hitarea_right").play("in");
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 102356, function(sym, e) {
         sym.stopAll();
         sym.getSymbol("interaction_hitarea_right").play("in");
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 108000, function(sym, e) {
         //Pause timeline, get current time as variable
         //sym.setVariable("interaction_start", sym.$("audio")[0].currentTime);
         sym.stopAll();
         sym.$("audio")[0].pause();
         
         sym.getSymbol("interaction_hitarea_right").play("in");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 108313, function(sym, e) {
         sym.stopAll();
         sym.getSymbol("interaction_hitarea_right").play("in");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 113651, function(sym, e) {
         //Pause timeline, get current time as variable
         //sym.setVariable("interaction_start", sym.$("audio")[0].currentTime);
         sym.stopAll();
         sym.$("audio")[0].pause();
         
         sym.getSymbol("interaction_hitarea_right").play("in");
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 113951, function(sym, e) {
         sym.stopAll();
         sym.getSymbol("interaction_hitarea_right").play("in");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120600, function(sym, e) {
         //Pause timeline, get current time as variable
         //sym.setVariable("interaction_start", sym.$("audio")[0].currentTime);
         sym.stopAll();
         sym.$("audio")[0].pause();
         
         sym.getSymbol("interaction_hitarea_right").play("in");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 97500, function(sym, e) {
         //Recall where Interaction started and set timeline to that point
         //sym.$("audio")[0].currentTime = sym.getVariable("interaction_start");
         sym.$("audio")[0].currentTime = 97.053;
         sym.$("audio")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90500, function(sym, e) {
         //Recall where Interaction started and set timeline to that point
         //sym.$("audio")[0].currentTime = sym.getVariable("interaction_start");
         sym.$("audio")[0].currentTime = 90.336;
         sym.$("audio")[0].play();
         inputAnswer.blur();
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 102600, function(sym, e) {
         //Recall where Interaction started and set timeline to that point
         //sym.$("audio")[0].currentTime = sym.getVariable("interaction_start");
         sym.$("audio")[0].currentTime = 102.043;
         sym.$("audio")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 108644, function(sym, e) {
         //Recall where Interaction started and set timeline to that point
         //sym.$("audio")[0].currentTime = sym.getVariable("interaction_start");
         sym.$("audio")[0].currentTime = 108.000;
         sym.$("audio")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 114300, function(sym, e) {
         //Recall where Interaction started and set timeline to that point
         //sym.$("audio")[0].currentTime = sym.getVariable("interaction_start");
         sym.$("audio")[0].currentTime = 113.651;
         sym.$("audio")[0].play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120900, function(sym, e) {
         //Recall where Interaction started and set timeline to that point
         //sym.$("audio")[0].currentTime = sym.getVariable("interaction_start");
         sym.$("audio")[0].currentTime = 120.600;
         sym.$("audio")[0].play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 134245, function(sym, e) {
         //Pause timeline, get current time as variable
         //sym.setVariable("interaction_start", sym.$("audio")[0].currentTime);
         sym.stopAll();
         sym.$("audio")[0].pause();
         
         sym.getSymbol("interaction_hitarea_right").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 134442, function(sym, e) {
         //Recall where Interaction started and set timeline to that point
         //sym.$("audio")[0].currentTime = sym.getVariable("interaction_start");
         sym.$("audio")[0].currentTime = 134.245;
         sym.$("audio")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 192151, function(sym, e) {
         // insert code here
         sym.stopAll();
         // Pause an audio track 
         sym.$("audio")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hitarea}", "touchend", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'checkAns'
   (function(symbolName) {   
   
   })("checkAns");
   //Edge symbol end:'checkAns'

   //=========================================================
   
   //Edge symbol: 'interation_instruct'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("interaction_ETF");
   //Edge symbol end:'interaction_ETF'

   //=========================================================
   
   //Edge symbol: 'play_pause'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.getSymbol("pauseIndicator").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.getSymbol("pauseIndicator").stop(0);

      });
      //Edge binding end

   })("play_pause");
   //Edge symbol end:'play_pause'

   //=========================================================
   
   //Edge symbol: 'play_icon'
   (function(symbolName) {   
   
   })("play_icon");
   //Edge symbol end:'play_icon'

   //=========================================================
   
   //Edge symbol: 'pause_icon'
   (function(symbolName) {   
   
   })("pause_icon");
   //Edge symbol end:'pause_icon'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'interaction_ETF_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("interaction_hitarea_right");
   //Edge symbol end:'interaction_hitarea_right'

   //=========================================================
   
   //Edge symbol: 'hitarea'
   (function(symbolName) {   
   
   })("hitarea");
   //Edge symbol end:'hitarea'

   //=========================================================
   
   //Edge symbol: 'pauseIndicator'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("pauseIndicator");
   //Edge symbol end:'pauseIndicator'

})(jQuery, AdobeEdge, "slide_container");