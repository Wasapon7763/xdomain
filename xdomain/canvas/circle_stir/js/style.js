$(function () {
    sizing();
    init();
    $(window).resize(function() {
        sizing();
        init();
    });
});
function sizing(){
    $('#cnvs').attr({height:$('#wrapper').height()});
    $('#cnvs').attr({width:$('#wrapper').width()});
};
