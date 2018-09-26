
// JavaScript Document
var uppg4height = $("#uppg4-box").height()
var uppg4width = $("#uppg4-box").width()

console.log(uppg4height);
console.log(uppg4width);

$("#uppg4-box").html("H: " + uppg4height + " W: " + uppg4width);


$(function(){
	
	$("p").addClass("uppg3class");
	
	var uppg4height = $("#uppg4-box").height();
	
	console.log(uppg4height);
	
	
	$("#uppg5-btn").click(function(){
		$("#uppg5-box").show("slow");
		
	});
	
	$("#uppg6-btn").click(function(){
		$("#uppg6-box").addClass("uppg6-class");
		
	});
	
	$("#uppg7-btn").click(function(){
		$("#uppg7-box").animate({
			width: "+=100px",
			height: "+=100px",
			opacity: 0.5
		}, 200);
			
	
	});
	
});
