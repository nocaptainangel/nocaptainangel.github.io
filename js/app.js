(function () {
    'use strict';

    // Banner words wrapper
    var wordsWrapper = $('.banner .words-wrapper');
    var words = wordsWrapper.find('b');
    var wordDelay = 1000;
    var wordIndex = 0;

    // Full page of sections
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });

    // Animate the banner words
    animateBannerWords();

    function animateBannerWords() {
        setTimeout(function () {
            wordsWrapper.animate({
                'width': 0
            },
            wordDelay,
            'swing',
            function () {
                var current = $(words[wordIndex]);
                current.addClass('hidden', '');

                if (wordIndex === words.length - 1) {
                    wordIndex = 0;
                } else {
                    wordIndex++;
                }

                var next = $(words[wordIndex]);
                next.removeClass('hidden');

                wordsWrapper.animate({
                    'width': next.width()
                },
                wordDelay,
                'swing',
                function () {
                    animateBannerWords();
                });
            });
        }, 2000);
    }

})();