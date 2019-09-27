$(function() {
    $('div.navbar-collapse ul li a').click(function() {
        $('div.navbar-collapse').removeClass("show");
    });
    var removeBorder = function(o) {
        o.css("border-bottom", "transparent");
    }

    $(window).on('activate.bs.scrollspy', function(e, obj) {
        // console.log(obj.relatedTarget);
        $.each($("a.nav-link"), function(i, val) {
            if (obj.relatedTarget === $(this).attr("href")) {
                var col = $(this).css("color");
                $(this).css("border-bottom", "2px solid " + col);
            } else {
                removeBorder($(this));
            }
        });
    });

    $.each($("a.nav-link"), function(i, val) {

        if (val.text === "Portfolio") {
            $(this).css("color", "#31adde");
        } else if (val.text === "Skills") {
            $(this).css("color", "#4dca6f");
        } else if (val.text === "About") {
            $(this).css("color", "#ebf747");
        } else if (val.text === "Contact") {
            $(this).css("color", "pink");
        } else if (val.text === "Home") {
            $(this).css("color", "#ea6262");
        }
    });

});