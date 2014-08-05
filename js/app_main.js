// JavaScript Document
var currentPage = 0;

// TODO: Figure out how to get the slide count to reflect only the slides in the current lesson
// TODO: This variable gets populated with the course.xml value for page links
var pages = ["splash.html", "page1.html", "page2.html", "page3.html", "page4.html", "M2_L4.html"];

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
	
	$("#course_map_button").click(function (){flipTriangle($("#course_map_button .triangle img")); doToggle($("#course_map_block")); doPause();});
	$("#transcript_button").click(function (){flipTriangle($("#transcript_button .triangle img")); doToggle($("#transcript_block"));});
	$("#resources_button").click(function (){flipTriangle($("#resources_button .triangle img")); doToggle($("#resources_block"));});
	$("#help_button").click(function (){flipTriangle($("#help_button .triangle img")); doToggle($("#help_block"));});
	// $("#user_info_button").click(function (){flipTriangle($("#user_info_button .triangle img")); doToggle($("#user_info_block"));});
	
	$.ajax({
		type: "GET",
		url: "course.xml",
		dataType: "xml",
		success: function (xml) { xmlParser(xml) }
	});
	
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
			//Default is 75px, set to 0 for demo so any distance triggers swipe
		   threshold:75
		});
	}
	
	document.getElementById("sliderBar").addEventListener("input", function(){
       doSliderUpdate(this.value);
    });

	
	// If the app hasn't been opened before, show help slide
	if (localStorage.getItem("appOpened") != "true") {
		flipTriangle($("#help_button .triangle"));
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

function flipTriangle(el) {
	if(el.hasClass("expanded")) {
		el.removeClass("expanded");
		el.addClass("collapsed");
	} else {
		el.removeClass("collapsed");
		el.addClass("expanded");	
	}
}

function doToggle(el) {
	$(".foldout_menu").not(el).slideUp();
	
	if (el.is($('#help_block'))) {
		if ($('#help_block').css('display') != 'block') {
			$('#menu_bar').animate({height: "100%"}, 1000);
		} else {
			var element = $('#menu_bar'),
			curHeight = element.height(),
			autoHeight = element.css('height', 'auto').height();
			element.height(curHeight).animate({height: autoHeight}, 1000);
		}
	}
	
	el.slideToggle();
}

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
	
	$("#course_map_block").slideToggle();
	
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

function pageSwipe(direction) {
	if ((direction == "right") && (currentPage - 1 >= 0)) {
		$("#content_window").animate({left: window.innerWidth}, 500, function() {
			currentPage--;
			var contentFrame = document.getElementById("content_frame");
			contentFrame.src = "slides/" + pages[currentPage];
			updateMenuItems();
			document.getElementById('content_frame').onload = function() {
				frameLoaded("left");
			};});
	}
	if ((direction == "left") && (currentPage + 1 < pages.length)) {
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