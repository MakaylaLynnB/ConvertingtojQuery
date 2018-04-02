$(document).ready(function(){
	$('#area').hover(
		function() {
         $(this).css("background-color", "green");
         alert("Close me to turn the box green.");
     }
     );

	$('#reset').click(
		function() {
			$('#area').css("background-color", "#953674");
		}
		);
});


	 