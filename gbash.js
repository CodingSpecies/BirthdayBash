$(document).ready(function () {
    $(".control").hide();
    $(".c").hover(function () {
        $(".control").show();
    }, function () {
        $(".control").hide();
    });
});