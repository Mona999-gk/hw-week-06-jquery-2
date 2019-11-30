$ (Document).ready(function(){
// Exercise 1
// fadeIn
$("p").hide();
$( "#clicker" ).click(function() {
$("#secret").fadeIn("slow");
    });
$("#clicker").click(function(){
$("#secret").toggle();
});
// Sliddown
 $( "#clicker" ).click(function() {
    $( "#secret" ).slideDown("slow");
    });
 
// FadeinToggle and FadeoutTooggle
$( "#clicker" ).click(function() {
$( ".secret"  ).fadeinToggle( "slow");
    });

$( "#clicker" ).click(function() {
$( ".secret" ).fadeoutToggle( "slow");
    });

// Exercise 2
$( "#clicker" ).click(function() {
$(".secret").slideup("slow");
    });
 
// Exercise 3
$( "#clicker" ).click(function() {
$("img").attr('src','img.gif');
    });

});
