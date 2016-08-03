$(function(){
    $("#open").click(function(){
				$(this).toggleClass("active");
        $("#sidebar").toggleClass("active");
        return false;
    });
});
