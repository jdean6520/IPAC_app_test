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
         var answer = sym.$("answer");
         answer.html("");
         inputAnswer = $('<input />').attr({'type':'text', 'value':'', 'id':'answer'});
         inputAnswer .css ('font-size', 12);
         inputAnswer .css ('width', 48);
         inputAnswer .css ('height', 15);
         inputAnswer .css ('background-color','#ffffff');
         inputAnswer .appendTo(answer);
         sym.setVariable("key" , "");
      
      
         function checkAnswer(){
      
         //var rightAnswer = inputAnswer.attr('value');
      
         var rightAnswer = inputAnswer.val();
         if (rightAnswer == sym.getVariable("key"))
         {
         	sym.play();
         console.log("correct");
         }
         }
      
         sym.$("answer").on('input', function(e){
                  checkAnswer();
         });
      
      
      
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90936, function(sym, e) {
         sym.stopAll();
         sym.setVariable("key", ".95");
         sym.getSymbol("interaction_instruct").play("in");
      
      
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 91051, function(sym, e) {
         sym.getSymbol("interaction_instruct").play("out");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_play_pause}", "click", function(sym, e) {
      
         if (sym.isPlaying()) {
         	sym.stop()
         	console.log("Movie is paused");
         	sym.$("audio")[0].pause();
         	console.log("Audio is paused as well");
      
      
         sym.getSymbol("play_pause").play("pause");
      
      
      
      
      
      
      
      
         } else {
         	sym.play()
         	console.log("Movie is playing");
         	sym.$("audio")[0].play();
         	console.log("Audio is playing as well");
      
         	sym.getSymbol("play_pause").play("play");
      
      
      
         }
      
      
      
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

   })("interation_instruct");
   //Edge symbol end:'interation_instruct'

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

})(jQuery, AdobeEdge, "slide_container");