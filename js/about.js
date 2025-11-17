$(document).ready(function () {
  var slide = $("#about-us_contents_img01, #about-us_contents_img02, #about-us_contents_img03");
  var container = $("#about-us_slider");

  function setEqual() {
    slide.stop(true).animate({ width: "33.3333%" }, 300);
    slide.find(".cover").css({ display: "block" });
  }


  slide.hover(function () {
    slide.not(this).stop(true).animate({ width: "20%" }, 700);
    $(this).stop(true).animate({ width: "60%" }, 700);
  }, function() {
    slide.not(this).stop(true).animate({ width: "33.33%" }, 700);
    $(this).stop(true).animate({ width: "33.34%" }, 1500);
  });


  container.on("mouseleave", function () {
    setEqual();
  });

  setEqual();
});
