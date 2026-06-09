/**
 * emmarthur.github.io — jquery-interactions.js
 * I added this file in Step 15 to meet the jQuery requirement from class.
 * Patterns I used: $(document).ready, .on(), .addClass(), .removeClass()
 */

$(document).ready(function () {
  // I flash an orange outline on the target section when a navbar link is clicked.
  $(".navbar .nav-link").on("click", function () {
    const targetId = $(this).attr("href");

    // I only handle in-page hash links (e.g. #about), not external URLs.
    if (!targetId || !targetId.startsWith("#")) {
      return;
    }

    const $section = $(targetId);

    if ($section.length) {
      // I add the highlight class defined in css/styles.css (.section-nav-highlight).
      $section.addClass("section-nav-highlight");
      // I remove the class after 1.2 seconds so the flash is brief.
      window.setTimeout(function () {
        $section.removeClass("section-nav-highlight");
      }, 1200);
    }
  });
});
