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
    fixHeightOnRows()

    $(window).resize(function() {
        fixHeightOnRows()
    })
})
