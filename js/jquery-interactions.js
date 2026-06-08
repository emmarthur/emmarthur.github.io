/**
 * emmarthur.github.io - jQuery interactions
 * Module 08 patterns: $(document).ready, .on(), .addClass(), .removeClass()
 */

$(document).ready(function () {
  // Briefly highlight the target section when a navbar link is clicked
  $(".navbar .nav-link").on("click", function () {
    const targetId = $(this).attr("href");

    if (!targetId || !targetId.startsWith("#")) {
      return;
    }

    const $section = $(targetId);

    if ($section.length) {
      $section.addClass("section-nav-highlight");
      window.setTimeout(function () {
        $section.removeClass("section-nav-highlight");
      }, 1200);
    }
  });
});
