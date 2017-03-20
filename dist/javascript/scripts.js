$(window).on("load", function() {
    function changeBottomMarginOnProjectPage() {
      var targetMargin = $(".grid .gutter-sizer").width();
      $(".grid img").css("margin-bottom", targetMargin);
    }


    if ($('.grid .grid-item').length > 0) {
      var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer'
        }
      });
      $grid.on('arrangeComplete', changeBottomMarginOnProjectPage);
      $grid.on('arrangeComplete', showIsotope);

      var oldMedLarge = $("body").width() >= 768;

      $(window).resize(function() {
        var newMedLarge = $("body").width() >= 768;
        if (oldMedLarge != newMedLarge) {
          $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            percentPosition: true,
            masonry: {
              columnWidth: '.grid-sizer',
              gutter: '.gutter-sizer'
            }
          });
        }
      });
    }

    if ($(".grid").length > 0) {
      changeBottomMarginOnProjectPage();
    }
})
