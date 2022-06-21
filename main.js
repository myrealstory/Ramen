
$(".sc-li").mouseover(function (event) {
    $(".t-shop").removeClass("btn-hide");
    $(".t-shop").addClass("btn-show");
});

$(".sc-li").mouseout(function (event) {
    $(".t-shop").removeClass("btn-show");
    $(".t-shop").addClass("btn-hide");
});

$(".sc-li2").mouseover(function (event) {
    $(".t-shop2").removeClass("btn-hide");
    $(".t-shop2").addClass("btn-show");
});

$(".sc-li2").mouseout(function (event) {
    $(".t-shop2").removeClass("btn-show");
    $(".t-shop2").addClass("btn-hide");
});

$(".sc-li3").mouseover(function (event) {
    $(".t-shop3").removeClass("btn-hide");
    $(".t-shop4").addClass("btn-show");
});

$(".sc-li3").mouseout(function (event) {
    $(".t-shop3").removeClass("btn-show");
    $(".t-shop3").addClass("btn-hide");
});

$(".sc-li4").mouseover(function (event) {
    $(".t-shop4").removeClass("btn-hide");
    $(".t-shop4").addClass("btn-show");
});

$(".sc-li4").mouseout(function (event) {
    $(".t-shop4").removeClass("btn-show");
    $(".t-shop4").addClass("btn-hide");
});
console.log($('.slidebox').width());

$(".slider-dots-area li").mouseenter(function () {
    console.log("hi", $(this).index());
    const moveX = $(this).index() * (-1 * $('.slidebox').width())+ "px";

    $("ul.slideul").css("transform", `translateX(${moveX})`);
    console.log(moveX);
    $(this)
        .css("background", "var(--main-bg-color)")
        .siblings()
        .css("background", "transparent");
});
