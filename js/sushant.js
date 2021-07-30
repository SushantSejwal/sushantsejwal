$(function () {
    $(".toggle-btn").on("click", function () {

        if ($(".ul-li").hasClass("active")) {
            $(".ul-li").removeClass("active");
        } 
        else {
            $(".ul-li").addClass("active");

        }
    })

});

