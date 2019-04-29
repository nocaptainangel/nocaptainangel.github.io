$(document).ready(function () {
    'use strict';

    // Full page of sections
    new SectionFade('main', {
        menu: '#menu',
        sectionSelector: '.sf',
        includeAnchor: true
    });

   //Circle following mouse
    $(document).mousemove(function (e) {
        $('.pointer').css({ left: e.pageX, top: e.pageY });
    })

    //Ripple effect
    $('#home').ripples({
        dropRadius: 90,
        perturbance: 0.04,
    });
});