$(function () {
  $(".status-button:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
});



var time_to_complete = 0;
var load_progress = 0;
var loading_interval;

// Cache jQuery:
var loading_text = $('#loading-progress');
var loading_screen = $('.loading-screen');

function beginLoading(time_to_complete) {
  load_progress = 0;

  // Interval to simulate loading.
  loading_interval = setInterval(function () {
    load_progress++;
    loading_text.html(load_progress + '%');

    // Add different stages to the loading screen.
    if (load_progress > 20) loading_screen.addClass('loading-stage-1');
    if (load_progress > 40) loading_screen.addClass('loading-stage-2');
    if (load_progress > 60) loading_screen.addClass('loading-stage-3');
    if (load_progress > 80) loading_screen.addClass('loading-stage-4');

    if (load_progress >= 100) {
      loading_screen.addClass('loading-stage-5');
      finishLoading();
    }

  }, time_to_complete / 100);
}

function finishLoading() {
  loading_text.html('<a style="color:#7CFC00" >LEC</a>');
  clearInterval(loading_interval);
  // Add final stage after short delay.
  setTimeout(function () {
    loading_screen.addClass('loading-stage-6');
  }, 250);
}

// Reset button
$(document).ready(function () {
  $('.reset-button').click(function (event) {
    event.preventDefault();
    loading_screen.removeClass('loading-stage-1 loading-stage-2 loading-stage-3 loading-stage-4 loading-stage-5 loading-stage-6');
    beginLoading(000);
  });
});

beginLoading(000);