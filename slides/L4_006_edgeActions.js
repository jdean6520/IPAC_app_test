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

      Symbol.bindElementAction(compId, symbolName, "${_play_pause}", "touchend", function(sym, e) {
         
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
   
   //Edge symbol: 'pause_icon'
   (function(symbolName) {   
   
   })("pause_icon");
   //Edge symbol end:'pause_icon'

   //=========================================================
   
   //Edge symbol: 'play_icon'
   (function(symbolName) {   
   
   })("play_icon");
   //Edge symbol end:'play_icon'

})(jQuery, AdobeEdge, "slide_container");