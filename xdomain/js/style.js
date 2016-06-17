$(function () {
    sizing();
    clearInterval(interval);
    init();
    $(window).resize(function() {
        sizing();
        clearInterval(interval);
        init();
    });
});
$(function(){
    $("#info").click(function(){
				$(this).toggleClass("active");
        $("#sidebar").toggleClass("active");
        return false;
    });
});
function sizing(){
    $('#cnvs').attr({height:$('#wrapper').height()});
    $('#cnvs').attr({width:$('#wrapper').width()});
};
function showTriangle(i){
  var $=document.getElementsByName("about");
}
