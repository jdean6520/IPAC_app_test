// JavaScript Document
var currentPage = 0;
var currentLesson = 0;
var helpPage = 1;
var pagesVisited = [];

//localStorage.setItem("pages_visited", "0");

$(function() {
	var contentFrame = document.getElementById("content_frame");
	contentFrame.src = "slides/splash.html";
	
	$("#course_map_block").hide();
	$("#transcript_block").hide();
	$("#resources_block").hide();
	$("#help_block").hide();
	// $("#user_info_block").hide();
	
	$('#sliderBar').hide();
	$("#restart_btn").hide();
	
	$("#course_map_button").bind("touchend", function(){toggleCourseMap();});
	$("#transcript_button").bind("touchend", function (){doToggle($("#transcript_block"));});
	$("#resources_button").bind("touchend", function (){doToggle($("#resources_block"));});
	$("#help_button").bind("touchend", function (){toggleHelp();});
	// $("#user_info_button").bind("touchend", function (){doToggle($("#user_info_block"));});
	
	buildCourseMap();
	/* Depreciated XML handling
	$.ajax({
		type: "GET",
		url: "course.xml",
		dataType: "xml",
		success: function (xml) { xmlParser(xml) }
	});
	*/
	
	// Checks for Edge stage progress and updates the position of the slider
	var timer = setInterval(updateSliderPosition, 500);
	
	// Set up initial swipe behavior
	document.getElementById('content_frame').onload = function() {
		if (document.getElementById('content_frame').contentWindow.AdobeEdge != undefined) {
			$('#sliderBar').show();
		}
		var swiper = $('#content_frame').contents().find("body");
		swiper.swipe( {
			//Generic swipe handler for all directions
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
				pageSwipe(direction);
			},
		   threshold:75
		});
	}
	
	// Help lesson behavior
	var help_swiper = $('#help_block');
	help_swiper.swipe( {
		//Generic swipe handler for all directions
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			helpSwipe(direction);
		},
	   threshold:75
	});
	
	document.getElementById("sliderBar").addEventListener("input", function(){
       doSliderUpdate(this.value);
    });
	
	updateMenuItems();
	
	// If the app hasn't been opened before, show help slide
	if (localStorage.getItem("appOpened") != "true") {
		toggleHelp();
		
		localStorage.setItem("pages_visited", "0");
	}
	
	// Store that the app has been opened and retrieve memory of visited pages
	//localStorage.setItem("appOpened", "true");
	var pagesRetriever = JSON.parse(localStorage.getItem("pages_visited"));
	if (pagesRetriever.length != undefined) {
		for (var i = 0; i < pagesRetriever.length; i++) {
			pagesVisited.push(pagesRetriever[i]);
		}
	} else {
		pagesVisited.push(0);
	}
});

function doSliderUpdate(slideAmount) {
	if (document.getElementById('content_frame').contentWindow.AdobeEdge != undefined) {
		var stage = document.getElementById('content_frame').contentWindow.AdobeEdge.getComposition("slide_container");
		
		// Set stage and audio to play from time mark
		var timePosition = stage.getStage().getDuration() * (slideAmount / 100);
		stage.getStage().$("audio")[0].pause();
		stage.getStage().$("audio")[0].currentTime = timePosition / 1000;
		stage.getStage().$("audio")[0].play();
		stage.getStage().play(timePosition, true);
	}
}

function updateSliderPosition() {
	if (document.getElementById('content_frame').contentWindow.AdobeEdge != undefined) {
		var stage = document.getElementById('content_frame').contentWindow.AdobeEdge.getComposition("slide_container");
		
		var currentPosition = stage.getStage().getPosition();
		
		var sliderPosition = (currentPosition / stage.getStage().getDuration()) * 100;
		document.querySelector('input[id=sliderBar]').value = Math.round(sliderPosition);
	} else {
		$('#sliderBar').hide();
	}
}

function doPause() {
	if (document.getElementById('content_frame').contentWindow.AdobeEdge != undefined) {
		var stage = document.getElementById('content_frame').contentWindow.AdobeEdge.getComposition("slide_container");
		stage.getStage().stopAll();
		stage.getStage().$("audio")[0].pause();
	}
}

function doToggle(el) {
	$(".foldout_menu").not(el).slideUp();
	
	if (el.is($('#transcript_block'))) {
		$("#course_map_button").toggleClass("bottom-out", false);
		$("#transcript_button").toggleClass("bottom-out");
		$("#resources_button").toggleClass("bottom-out", false);
		$("#help_button").toggleClass("bottom-out", false);
		//$("#user_info_button").toggleClass("bottom-out", false);
		
		$("#course_map_button .triangle img").toggleClass("expanded", false);
		$("#transcript_button .triangle img").toggleClass("expanded");
		$("#resources_button .triangle img").toggleClass("expanded", false);
		$("#help_button .triangle img").toggleClass("expanded", false);
		//$("#user_info_button .triangle img").toggleClass("expanded", false);
	} else if (el.is($('#resources_block'))) {
		$("#course_map_button").toggleClass("bottom-out", false);
		$("#transcript_button").toggleClass("bottom-out", false);
		$("#resources_button").toggleClass("bottom-out");
		$("#help_button").toggleClass("bottom-out", false);
		//$("#user_info_button").toggleClass("bottom-out", false);
		
		$("#course_map_button .triangle img").toggleClass("expanded", false);
		$("#transcript_button .triangle img").toggleClass("expanded", false);
		$("#resources_button .triangle img").toggleClass("expanded");
		$("#help_button .triangle img").toggleClass("expanded", false);
		//$("#user_info_button .triangle img").toggleClass("expanded", false);
	} /*else if (el.is($('#user_info_block'))) {
		$("#course_map_button").toggleClass("bottom-out", false);
		$("#transcript_button").toggleClass("bottom-out", false);
		$("#resources_button").toggleClass("bottom-out", false);
		$("#help_button").toggleClass("bottom-out", false);
		//$("#user_info_button").toggleClass("bottom-out");
		
		$("#course_map_button .triangle img").toggleClass("expanded", false);
		$("#transcript_button .triangle img").toggleClass("expanded", false);
		$("#resources_button .triangle img").toggleClass("expanded", false);
		$("#help_button .triangle img").toggleClass("expanded");
		$("#user_info_button .triangle img").toggleClass("expanded", false);
	}*/
	
	el.slideToggle();
}

function toggleCourseMap() {	
	$(".foldout_menu").not($("#course_map_block")).slideUp();
	
	$("#course_map_button").toggleClass("bottom-out");
	$("#transcript_button").toggleClass("bottom-out", false);
	$("#resources_button").toggleClass("bottom-out", false);
	$("#help_button").toggleClass("bottom-out", false);
	//$("#user_info_button").toggleClass("bottom-out", false);
	
	$("#course_map_button .triangle img").toggleClass("expanded");
	$("#transcript_button .triangle img").toggleClass("expanded", false);
	$("#resources_button .triangle img").toggleClass("expanded", false);
	$("#help_button .triangle img").toggleClass("expanded", false);
	//$("#user_info_button .triangle img").toggleClass("expanded", false);
	
	$("#course_map_block").slideToggle();
	doPause();
}

function toggleHelp() {
	$(".foldout_menu").not($("#help_block")).slideUp();
	
	$("#course_map_button").toggleClass("bottom-out", false);
	$("#transcript_button").toggleClass("bottom-out", false);
	$("#resources_button").toggleClass("bottom-out", false);
	$("#help_button").toggleClass("bottom-out");
	//$("#user_info_button").toggleClass("bottom-out", false);
	
	$("#course_map_button .triangle img").toggleClass("expanded", false);
	$("#transcript_button .triangle img").toggleClass("expanded", false);
	$("#resources_button .triangle img").toggleClass("expanded", false);
	$("#help_button .triangle img").toggleClass("expanded");
	//$("#user_info_button .triangle img").toggleClass("expanded", false);
	
	$("#help_page1").css("left", "0");
	$("#help_page2").css("left", "100%");
	$("#help_page3").css("left", "100%");
	$("#help_page4").css("left", "100%");
	$("#help_page5").css("left", "100%");
	$("#help_page6").css("left", "100%");
	$("#help_page7").css("left", "100%");
	$("#help_page8").css("left", "100%");
	$("#help_page9").css("left", "100%");
	
	helpPage = 1;
	
	$("#help_block").toggle();
	doPause();
}

/* Break xml down into course map - depreciated
function xmlParser(xml)
{
	var nodes = xml.documentElement.childNodes;
	var courseMap = document.getElementById("course_map_block");
	var listMarkup = '<ul class="accordion"  id="accordion">';
	for (var i = 0; i < nodes.length; i++) {
		if(nodes[i].nodeName == "lesson") {
			listMarkup += '<li><a href="#">' + nodes[i].getAttribute('name') + "</a><ul>";
			var subNodes = nodes[i].childNodes;
			for (var j = 0; j < subNodes.length; j++) {
				if(subNodes[j].nodeName == "slide") {
					var linkclass = "sub";
					if (pagesVisited.indexOf(pages.length) != -1) {linkclass += " page-visited";}
					listMarkup += '<li id="' + pages.length + '" class="' + linkclass + '"><a href="#" onclick="changePage(\'' + subNodes[j].getAttribute('link') + '\')">' + subNodes[j].getAttribute('name') + "</a></li>";
					pages.push(subNodes[j].getAttribute('link'));
				}
			}
			listMarkup += "</ul>";
		}
	}
	listMarkup += "</li></ul>";
	courseMap.innerHTML = listMarkup;

	$('#accordion').dcAccordion({
				eventType: 'click',
				autoClose: false,
				saveState: false,
				disableLink: true,
				speed: 'fast',
				classActive: 'test',
				showCount: false
	});
}*/

function buildCourseMap() {
	var courseMap = document.getElementById("course_map_block");
	
	var listMarkup = '<ul class="accordion"  id="accordion">';
	for (var i = 0; i < slides.length; i++) {
		listMarkup += '<li><a href="#">' + slides[i].lesson_title + "</a><ul>";
		
		for (var j = 0; j < slides[i].slides.length; j++) {
			var linkclass = "sub";
			listMarkup += '<li id="' + (i+1) + '" class="' + linkclass + '"><a href="#" onclick="changePage(\'' + slides[i].slides[j].page_link + '\')">' + slides[i].slides[j].title + "</a></li>";
		}
		
		listMarkup += "</ul>";
	}
	
	listMarkup += "</li></ul>";
	courseMap.innerHTML = listMarkup;
	
	courseMap.innerHTML += '<span class="close_button" onclick="toggleCourseMap()"><img src="images/close_button.png"></span>';

	$('#accordion').dcAccordion({
				eventType: 'click',
				autoClose: false,
				saveState: false,
				disableLink: true,
				speed: 'fast',
				classActive: 'test',
				showCount: false
	});
}

function changePage(pageLink) {
	var contentFrame = document.getElementById("content_frame");
	contentFrame.src = "slides/" + pageLink;
	
	toggleCourseMap();
	
	for (var i = 0; i < slides.length; i++) {
		for (var j = 0; j < slides[i].slides.length; j++) {
			if (slides[i].slides[j].page_link == pageLink) {
				currentLesson = i;
				currentPage = j;
				break;
			}
		}
	}
	
	document.getElementById('content_frame').onload = function() {
		frameLoaded();
	}
}

function frameLoaded(direction) {
	if (document.getElementById('content_frame').contentWindow.AdobeEdge != undefined) {
		// This is where to put logic for when a lesson is shown
		$('#sliderBar').show();
		$("#restart_btn").show();
		$('.loaded').hide();
		$('.not_loaded').show();
		
		$("#restart_btn").bind("touchend", function() {
			console.log("resetting!");
			var stage = document.getElementById('content_frame').contentWindow.AdobeEdge.getComposition("slide_container");
			if(stage != undefined) {
				stage.getStage().$("audio")[0].currentTime = 0;
				stage.getStage().$("audio")[0].play();
				stage.getStage().play(0, true);
			}
		});
	}
	var swiper = $('#content_frame').contents().find("body");
		swiper.swipe( {
			//Generic swipe handler for all directions
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
				pageSwipe(direction);
			},
			//Default is 75px, set to 0 for demo so any distance triggers swipe
		   threshold:75
		});
		
	if (direction) {
		returnPage(direction);
	}
	
	updateMenuItems();
	
	/* - Inactive until JSON implementation finalized
	if (pagesVisited.indexOf(currentPage) == -1) {
		pagesVisited.push(currentPage);
		localStorage.setItem("pages_visited", JSON.stringify(pagesVisited));
		updateCourseMap();
	}*/
}

function updateMenuItems() {
	var transcriptMarkup = "";
	var resourcesMarkup = "";
	
	transcriptMarkup += "<h3>" + slides[currentLesson].slides[currentPage].title + "</h3>";
	transcriptMarkup += "<p>" + slides[currentLesson].slides[currentPage].transcript + "</p>";
	
	var resources = slides[currentLesson].slides[currentPage].resources;
	
	for (var i = 0; i < resources.length; i++) {
		var resource = resources[i].split("|");
		resourcesMarkup += '<a href="' + resource[1] + '" target="_blank">' + resource[0] + '</a>';
	}
	
	$("#transcript_block").html(transcriptMarkup + '<span id="close_transcript" class="close_button"><img src="images/close_button.png"></span>');
	$("#resources_block").html(resourcesMarkup + '<span id="close_resources" class="close_button"><img src="images/close_button.png"></span>');
	$("#close_transcript").bind("touchend", function (){doToggle($("#transcript_block"));});
	$("#close_resources").bind("touchend", function (){doToggle($("#resources_block"));});
	
	
	var cropTitle = slides[currentLesson].slides[currentPage].title;
	if (cropTitle.length > 50) {
		cropTitle = cropTitle.substring(0, 49);
		cropTitle += "...";
	}
	$("#lesson_title").html(cropTitle);
	
	if (currentLesson != 0) {
		$("#slide_count").html((currentPage+1) + " of " + (slides[currentLesson].slides.length));
	} else {
		$("#sliderBar").hide();
		$("#slide_count").html("");
	}
}

function helpSwipe(direction) {	
	if (direction == "left") {	
		// If there is a next help page, do swipe
		var helpPageSelector = "#help_page" + helpPage.toString();
		if($(helpPageSelector).next().is("#help_close_btn") == false) {
			$(helpPageSelector).animate({left: -window.innerWidth}, 500, function() {});
			$(helpPageSelector).next().animate({left: 0}, 500, function() {});
			
			helpPage++;
		} else {
			toggleHelp();
		}
	} else if (direction == "right") {
		// If there is a previous help page, do swipe
		var helpPageSelector = "#help_page" + helpPage.toString();
		if($(helpPageSelector).prev().length > 0) {
			$(helpPageSelector).animate({left: window.innerWidth}, 500, function() {});
			$(helpPageSelector).prev().animate({left: 0}, 500, function() {});
			
			helpPage--;
		}
	}
}

function pageSwipe(direction) {
	// TODO: Upadte this to account for sliding back and forth between lessons
	if ((direction == "left") && (currentPage == 0) && (currentLesson == 0)) {
		$("#content_window").animate({left: -window.innerWidth}, 500, function() {
			currentLesson++;
			var contentFrame = document.getElementById("content_frame");
			contentFrame.src = "slides/" + slides[currentLesson].slides[currentPage].page_link;
			updateMenuItems();
			document.getElementById('content_frame').onload = function() {
				frameLoaded("right");
		};});
	}
	if ((direction == "right") && (currentPage > 0)) {
		$("#content_window").animate({left: window.innerWidth}, 500, function() {
			currentPage--;
			var contentFrame = document.getElementById("content_frame");
			contentFrame.src = "slides/" + slides[currentLesson].slides[currentPage].page_link;
			updateMenuItems();
			document.getElementById('content_frame').onload = function() {
				frameLoaded("left");
			};});
	}
	if ((direction == "left") && (currentPage < slides[currentLesson].slides.length - 1)) {
		$("#content_window").animate({left: -window.innerWidth}, 500, function() {
			currentPage++;
			var contentFrame = document.getElementById("content_frame");
			contentFrame.src = "slides/" + slides[currentLesson].slides[currentPage].page_link;
			updateMenuItems();
			document.getElementById('content_frame').onload = function() {				
				frameLoaded("right");
			};});
	}
}

function returnPage(direction) {
	if (direction == "left") {
		$("#content_window").css("left", -window.innerWidth);
		$("#content_window").animate({left: 0}, 500, function() {});
	} else {
		$("#content_window").css("left", window.innerWidth);
		$("#content_window").animate({left: 0}, 500, function() {});
	}
}

function updateCourseMap() {
	// TODO: Open coursemap to current node, reduce opacity slightly on visited nodes
	var pagesRetriever = JSON.parse(localStorage.getItem("pages_visited"));
	
	/* - Pending JSON rewrite
	for (var i = 0; i < pagesRetriever.length; i++) {
		console.log(pagesRetriever[i]);
		var id = "#" + pagesRetriever[i].toString();
		$(id).addClass("page-visited");
	}*/
}