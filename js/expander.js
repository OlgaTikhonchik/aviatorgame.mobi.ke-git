
// Expander
expanderList = document.querySelectorAll(".js-button-expander");

$(".js-button-expander").click(function (e) {
  var expandParent = $(this).parent();
  var expandTarget = $(expandParent).children(".js-expand-content");
  var expandButton = $(expandParent).children(".js-button-expander");

  for (var i = 0; i < expanderList.length; i++) {
    if (expanderList[i] == this) {
      for (var j = 0; j < expandTarget.length; j++) {
        if ($(expandTarget[j]).hasClass("expanded")) {
          $(expandParent).removeClass("active");
          $(expandTarget[j]).removeClass("expanded");
          $(expandButton).removeClass("active");
          $(expandTarget[j]).slideUp();
        } else {
          $(expandParent).addClass("active");
          $(expandButton).addClass("active");
          $(expandTarget[j]).addClass("expanded");
          $(expandTarget[j]).slideDown();
        }
      }
    }
  }
});


$(".js-button-expander--menu").on("mouseenter", function () {
  const expandParent = $(this).closest("li");
  const expandTarget = expandParent.find(".js-expand-content--menu");

  
  $(".js-expand-content--menu").not(expandTarget).stop(true, true).slideUp().removeClass("expanded");
  $(".js-button-expander--menu").not(this).removeClass("active");

  if (!expandTarget.hasClass("expanded")) {
    expandTarget.stop(true, true).slideDown().addClass("expanded");
    $(this).addClass("active");
  }
});


$(".js-expand-content--menu, .js-button-expander--menu").on("mouseleave", function () {
  setTimeout(() => {
    
    if (
      !$(".js-expand-content--menu:hover").length &&
      !$(".js-button-expander--menu:hover").length
    ) {
      $(".js-expand-content--menu").stop(true, true).slideUp().removeClass("expanded");
      $(".js-button-expander--menu").removeClass("active");
    }
  }, 200); 
});
