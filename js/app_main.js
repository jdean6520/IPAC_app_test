// JavaScript Document
var currentPage = 0;
var helpPage = 0;

// TODO: Figure out how to get the slide count to reflect only the slides in the current lesson
// TODO: This variable gets populated with the course.xml value for page links
var pages = ["splash.html"];

$(function() {
	var contentFrame = document.getElementById("content_frame");
	contentFrame.src = "slides/splash.html";
	
	updateMenuItems();
	
	$("#course_map_block").hide();
	$("#transcript_block").hide();
	$("#resources_block").hide();
	$("#help_block").hide();
	// $("#user_info_block").hide();
	
	$('#sliderBar').hide();
	
	$("#course_map_button").click(function (){doToggle($("#course_map_block")); doPause();});
	$("#transcript_button").click(function (){doToggle($("#transcript_block"));});
	$("#resources_button").click(function (){doToggle($("#resources_block"));});
	$("#help_button").click(function (){doToggle($("#help_block"));});
	// $("#user_info_button").click(function (){doToggle($("#user_info_block"));});
	
	$.ajax({
		type: "GET",
		url: "course.xml",
		dataType: "xml",
		success: function (xml) { xmlParser(xml) }
	});
	
	// Checks for Edge stage progress and updates the position of the slider
	var timer = setInterval(updateSliderPosition, 1000);
	
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

	
	// If the app hasn't been opened before, show help slide
	if (localStorage.getItem("appOpened") != "true") {
		$("#help_button .triangle img").toggleClass("expanded");
		doToggle($('#help_block'));
	}
	
	// Store that the app has been opened
	localStorage.setItem("appOpened", "true");
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
	// TODO: There has to be a better way to do this...
	$(".foldout_menu").not(el).slideUp();
	
	if (el.is($('#course_map_block'))) {
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
	} else if (el.is($('#transcript_block'))) {
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
	}*/ else if (el.is($('#help_block'))) {
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
		
		if ($('#help_block').css('display') != 'block') {
			$('#menu_bar').animate({height: "100%"}, 1000);
		} else {
			var element = $('#menu_bar'),
			curHeight = element.height(),
			autoHeight = element.css('height', 'auto').height();
			element.height(curHeight).animate({height: autoHeight}, 1000);
		}
		helpPage = 0;
		$("#help_page1").css("left", "0");
		$("#help_page2").css("left", "100%");
		$("#help_page3").css("left", "100%");
	}
	
	el.slideToggle();
}

// Break xml down into course map
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
					listMarkup += '<li class="sub"><a href="#" onclick="changePage(\'' + subNodes[j].getAttribute('link') + '\')">' + subNodes[j].getAttribute('name') + "</a></li>";
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
}

function changePage(pageLink) {
	var contentFrame = document.getElementById("content_frame");
	contentFrame.src = "slides/" + pageLink;
	
	doToggle($("#course_map_block"));
	
	for (var i = 0; i < pages.length; i++) {
		if (pages[i] == pageLink) {
			currentPage = i;
			break;
		}
	}
	
	document.getElementById('content_frame').onload = function() {
		frameLoaded();
	}
}

function frameLoaded(direction) {
	if (document.getElementById('content_frame').contentWindow.AdobeEdge != undefined) {
			$('#sliderBar').show();
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
}

function updateMenuItems() {
	var transcriptMarkup = "";
	var resourcesMarkup = "";
	
	transcriptMarkup += "<h3>" + slides[currentPage].title + "</h3>";
	transcriptMarkup += "<p>" + slides[currentPage].transcript + "</p>";
	
	var resources = slides[currentPage].resources;
	
	for (var i = 0; i < resources.length; i++) {
		var resource = resources[i].split("|");
		resourcesMarkup += '<a href="' + resource[1] + '">' + resource[0] + '</a>';
	}
	
	$("#transcript_block").html(transcriptMarkup);
	$("#resources_block").html(resourcesMarkup);
	
	$("#lesson_title").html(slides[currentPage].title);
	
	if (currentPage != 0) {
		$("#slide_count").html((currentPage) + " of " + (slides.length - 1));
	} else {
		$("#sliderBar").hide();
		$("#slide_count").html("");
	}
}

function helpSwipe(direction) {
	if (direction == "right") {
		if (helpPage == 1) {
			$("#help_page1").animate({left: 0}, 500, function() {});		
			$("#help_page2").animate({left: window.innerWidth}, 500, function() {});
			helpPage--;
		} else if (helpPage == 2) {
			$("#help_page2").animate({left: 0}, 500, function() {});		
			$("#help_page3").animate({left: window.innerWidth}, 500, function() {});
			helpPage--;
		}		
	}
	if (direction == "left") {
		if (helpPage == 0) {
			$("#help_page1").animate({left: -window.innerWidth}, 500, function() {});		
			$("#help_page2").animate({left: 0}, 500, function() {});
			helpPage++;
		} else if (helpPage == 1) {
			$("#help_page2").animate({left: -window.innerWidth}, 500, function() {});		
			$("#help_page3").animate({left: 0}, 500, function() {});
			helpPage++;
		} else if (helpPage == 2) {
			doToggle($("#help_block"));
		}
	}
}

function pageSwipe(direction) {
	if ((direction == "right") && (currentPage >= 0)) {
		$("#content_window").animate({left: window.innerWidth}, 500, function() {
			currentPage--;
			var contentFrame = document.getElementById("content_frame");
			contentFrame.src = "slides/" + pages[currentPage];
			updateMenuItems();
			document.getElementById('content_frame').onload = function() {
				frameLoaded("left");
			};});
	}
	if ((direction == "left") && (currentPage < pages.length)) {
		$("#content_window").animate({left: -window.innerWidth}, 500, function() {
			currentPage++;
			var contentFrame = document.getElementById("content_frame");
			contentFrame.src = "slides/" + pages[currentPage];
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