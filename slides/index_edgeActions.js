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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pressMeBtn}", "mouseover", function(sym, e) {
         sym.getSymbol("pressMeBtn").stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pressMeBtn}", "mouseout", function(sym, e) {
         sym.getSymbol("pressMeBtn").stop("up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pressMeBtn}", "click", function(sym, e) {
         
         // Change the text in an element
         sym.$("TextTest").html("Hello World!");
         
         

      });
      //Edge binding end

      

      

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'textTest'
   (function(symbolName) {   
   
   })("textTest");
   //Edge symbol end:'textTest'

   //=========================================================
   
   //Edge symbol: 'pressMeBtn'
   (function(symbolName) {   
   
   })("pressMeBtn");
   //Edge symbol end:'pressMeBtn'

   //=========================================================
   
   //Edge symbol: 'swiper'
   (function(symbolName) {   
   
   })("swiper");
   //Edge symbol end:'swiper'

})(jQuery, AdobeEdge, "EDGE-70459846");