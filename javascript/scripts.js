$(window).on("load", function() {
    function fixHeightOnRows() {
        var rows = $(".two,.three")

        function normalizeRow(index, row) {
            console.log("Normalize the row!", row)
            var images = $(row).find('.scale')
            console.log("Normalize the row!", images)

            var imageSmallest = images[0]

            function findSmallest(index, image) {
                console.log($(image).height())
                if ($(image).height() < $(imageSmallest).height()) {
                    imageSmallest = image
                }
            }
            $(images).each(findSmallest)
            console.log($(imageSmallest).height())
            $(images).closest(".crop-height").css("max-height", $(imageSmallest).height())
        }
        rows.each(normalizeRow)
    }
    //fixHeightOnRows()

    //$(window).resize(function() {
    //    fixHeightOnRows()
    //})
    
    $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer'
      }
    });

    var header = $("#fixed-nav .navbar-nav");
    $(document).scroll(function(e) {
        if($(this).scrollTop() > $(".navbar-nav").position().top) {
            header.css({"position" : "fixed", "top" : "0"});
        } else {
            header.css("position", "relative");
        }
    });
})
