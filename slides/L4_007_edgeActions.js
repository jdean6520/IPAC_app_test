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
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "${_play_pause}", "touchend", function(sym, e) {
         // insert code to be run when a user stops touching an object (for touch devices only)
         
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38524, function(sym, e) {
         // insert code here
         sym.stopAll();
         // Pause an audio track 
         sym.$("audio")[0].pause();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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

})(jQuery, AdobeEdge, "slide_container");