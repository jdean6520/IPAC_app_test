// JavaScript Document
var currentPage = 0;

var pages = ["splash.html", "page1.html", "page2.html", "page3.html", "page4.html"];

$(function() {
	var contentFrame = document.getElementById("content_frame");
	contentFrame.src = "slides/splash.html";
	
	updateMenuItems();
	
	$("#course_map_block").hide();
	$("#transcript_block").hide();
	$("#resources_block").hide();
	$("#help_block").hide();
	// $("#user_info_block").hide();
	
	$("#course_map_button").click(function (){doToggle($("#course_map_block"));});
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
});

function doToggle(el) {
	$(".foldout_menu").not(el).slideUp();
	
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
	$("#slide_count").html((currentPage + 1) + " of " + slides.length);
}

function pageSwipe(direction) {
	if ((direction == "right") && (currentPage - 1 >= 0)) {
		$("#content_window").animate({left: window.innerWidth}, 500, function() {
			currentPage--;
			var contentFrame = document.getElementById("content_frame");
			contentFrame.src = "slides/" + pages[currentPage];
			updateMenuItems();
			returnPage("left");});
	}
	if ((direction == "left") && (currentPage + 1 < pages.length)) {
		$("#content_window").animate({left: -window.innerWidth}, 500, function() {
			currentPage++;
			var contentFrame = document.getElementById("content_frame");
			contentFrame.src = "slides/" + pages[currentPage];
			updateMenuItems();
			returnPage("right");});
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