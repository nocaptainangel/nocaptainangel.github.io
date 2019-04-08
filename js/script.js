(function () {
    'use strict';

    //Ripple effect
    $('#home').ripples({
        dropRadius: 80,
        perturbance: 0.04,
    });

    //Circle following mouse
    $(document).mousemove(function(e){
        $('.pointer').css({left:e.pageX, top:e.pageY});
    })

})();