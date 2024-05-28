$(document).ready(function(){
    var animationTriggered = false;
    var width = ['45%', '57%', '65%', '67%', '78%', '56%'];
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

      // Adjust the opacity based on scroll position
      // You can customize the opacity change as needed
      var targetOpacity = 1 - (scrollDistance / 2000); // Adjust divisor as needed

      // Ensure the opacity stays within the range of 0 to 1
        targetOpacity = Math.max(0, Math.min(1, targetOpacity));

      // Apply the new opacity to the target element
        $('.navbar').css('opacity', targetOpacity);
        if(!animationTriggered && isElementInView($('.progress-bar'))) {
            $('.progress-bar').each(function(index) {
            var delay = index * 200; // Adjust the delay between animations
            var $element = $(this);
            var widths = width[index];
            setTimeout(function() {
                $element.animate({
                    width: widths
                }, 1000); // Duration of animation in milliseconds
            }, delay);
        });
        animationTriggered = true;
        }
    });
    
});

function isElementInView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}