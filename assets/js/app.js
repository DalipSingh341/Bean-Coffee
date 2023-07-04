$(".text_slider").slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  fade: true,
  autoplay: false,
  arrow: true,
  dots: false,

  // prevArrow: $(".previous"),
  // nextArrow: $(".Next_Btn"),
});

// back-to top//
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// // pre-loader//
setTimeout(() => {
  const box = document.getElementById("box");

  box.style.display = "none";

  document.body.classList.remove("overflow-hidden");
}, 1000);

var btn = $("#button");

// scroll//
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#dynamic").addClass("newClass");
  } else {
    $("#dynamic").removeClass("newClass");
  }
});
