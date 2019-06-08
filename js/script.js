$(document).ready(function () {
    'use strict';

    // Sliders
    var left = $('#works #left');
    var right = $('#works #right');
    var slider = $('#works .slider');
    // Slider scroll delay in milliseconds
    var sliderDelay = 400;
    // Slider margin when scolling the elements
    var sliderMargin = 300;
    // Image Popup overlay
    var imagePopup = $('#i-love-you');

    // Toggle button visibility first
    toggleButtons();

    // Circle following mouse
     $(document).mousemove(function (e) {
         $('.pointer').css({ left: e.pageX, top: e.pageY });
     })

     // Ripple effect
     $('#home').ripples({
         dropRadius: 90,
         perturbance: 0.04,
     });

    // Full page of sections
    new SectionFade('main', {
        menu: '#menu',
        sectionSelector: '.sf',
        includeAnchor: true,
        delay: 700,
        scrollables: '.flexscroll'
    });

    // On click of "data-popup" attributes, open the image popup overlay
    $('[data-popup]').click(function () {
        var imageSrc = $(this).data('popup');
        var alt = $(this).attr('alt');

        // Set the attributes of the image popup
        imagePopup
            .find('img')
            .attr({
                src: imageSrc,
                alt: alt
            });

        // Show the image popup overlay
        imagePopup.show();
    });

    // On click of the close button, close the image popup overlay
    $('#i-love-you .close').click(function () {
        // Unset the attributes of the image popup
        imagePopup
            .find('img')
            .attr({
                src: '',
                alt: ''
            });

        // Hide the image popup overlay
        imagePopup.hide();
    });

    // Create a listener for key press
    $(document).keyup(function (e) {
        if (e.key === 'Escape') {
            $('#i-love-you .close').click();
        }
    });

    // Works left button press
    left.click(function () {
        var slider = $('#works .slider');
        var width = slider.width();

        // Animate the slider container to the left
        slider.animate({
            scrollLeft: '-=' + (width - sliderMargin)
        }, sliderDelay, 'swing', toggleButtons);
    });

    // Works right button press
    right.click(function () {
        var slider = $('#works .slider');
        var width = slider.width();

        // Animate the slider container to the right
        slider.animate({
            scrollLeft: '+=' + (width - sliderMargin)
        }, sliderDelay, 'swing', toggleButtons);
    });

    /**
     * Toggle the visibility of the left and right buttons based
     * on the scroll position of the slider
     */
    function toggleButtons() {
        var scrollWidth = slider[0].scrollWidth;
        var scrollLeft = slider.scrollLeft();
        var scrollPosition = parseInt(scrollWidth - scrollLeft);
        var innerWidth = parseInt(slider.innerWidth());

        // Show/Hide the left button
        if (slider.scrollLeft() > 0) {
            left.show();
        } else if (slider.scrollLeft() <= 0) {
            left.hide();
        }

        // Show/hide the right button
        if (scrollPosition > innerWidth) {
            right.show();
        } else if (scrollPosition == innerWidth) {
            right.hide();
        }
    }
});