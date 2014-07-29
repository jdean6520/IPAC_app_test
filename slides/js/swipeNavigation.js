// JavaScript Document
$("#slide_container").swipe( {
	//Generic swipe handler for all directions
	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		parent.pageSwipe(direction);
	},
	//Default is 75px, set to 0 for demo so any distance triggers swipe
   threshold:75
});