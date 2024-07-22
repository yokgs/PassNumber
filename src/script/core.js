$(document).ready(function () {
    let NUMBERS = "1234567890", CHARS = "qwertyuiopasdfghjklzxcvbnm";
    let PARAMETERS = {
        charsets: {
            normal: CHARS+NUMBERS,
            easy: NUMBERS,
            hard: CHARS+NUMBERS+"AZERTYUIOPQSDFGHJKLMWXCVBN",
        },
        size: {
            normal: 8,
            easy: 8,
            hard: 16,
        }
    };
    var mode = "normal";
    var auto = "on";

    $(".n").show();
    $(".d").hide();
    var w = $(window).width();
    var wo = (w / 2) - 7.5;
    $(".ag").width(wo)
    $(".b").hide();
    $("#overlay").hide();
    $(".c").hide();

    $("#setting").click(function () {
        $(".c").removeClass("t");
        $(".c").fadeIn(700);
        $("#overlay").fadeIn(700);
    })

    $("#legacy").click(function () {
        document.location.replace('/legacy.html')
    })
    
    $(".ad").click(function () {
        open("https://twitter.com/Y_OKGs/")
    })
    $(".ab").click(function () {
        open("https://github/yokgs/")
    })
    $(".ac").click(function () {
        open("https://www.instagram.com/y.okg/")
    })
    $("#us").click(function () {
        $(".b").removeClass("t");
        $(".b").fadeIn(700);
        $("#overlay").fadeIn(700);
    })
    $(".s").click(function () {
        $("#overlay").hide();
        $(".b").addClass("t");
        $(".b").fadeOut(700);
    })
    $(".s").click(function () {
        $("#overlay").hide();
        $(".c").addClass("t");
        $(".c").fadeOut(700);
    })
    $("#overlay").hover(function () {
        $("#overlay").hide();
        $(".b").addClass("t");
        $(".b").fadeOut(700);
        $(".c").addClass("t");
        $(".c").fadeOut(700);
    })
    var m = 8;
    $(".f").click(function () {
        if (m > 8) {
            $(".i").html(m - 1)
            $(".e").removeClass("j");
            $(".e").removeClass("r");
            if (m == 9) {
                $(".f").addClass("h");
            }
            else {
                $(".f").removeClass("h")
            }
            $(".g").removeClass("h");
            setTimeout(function () { $(".e").addClass("j"); }, 90)
            return m = m - 1;
        }
    })
    $(".g").click(function () {
        if (m < 20) {
            $(".i").html(m + 1)
            $(".e").removeClass("j");
            $(".e").removeClass("r");
            if (m == 19) {
                $(".g").addClass("h");
            }
            else {
                $(".g").removeClass("h")
            }
            $(".f").removeClass("h")
            setTimeout(function () { $(".e").addClass("j"); }, 90)
            return m = m + 1;
        }
    })

    $(".l").click(function () {
        var d = $(".l").attr("data");
        if (d == "1") {
            $(".l").attr("data", "0");
            $(".d").hide();
            $(".g").removeClass("q");
            $(".f").removeClass("p");
            $(".e").removeClass("r");
            $(".n").fadeIn().addClass("r");
            return auto = "on";
        }
        if (d == "0") {
            $(".l").attr("data", "1");
            $(".n").hide().removeClass("r");
            $(".d").fadeIn();
            $(".g").addClass("q");
            $(".f").addClass("p");
            $(".e").addClass("r");
            return auto = "off";
        }
    })

    $(".al").click(function () {
        $(".al").addClass("am");
        $(".aj").removeClass("am");
        $(".ak").removeClass("am");
        return mode = "hard";
    })
    $(".aj").click(function () {
        $(".aj").addClass("am");
        $(".ak").removeClass("am");
        $(".al").removeClass("am");
        return mode = "easy";
    })
    $(".ak").click(function () {
        $(".ak").addClass("am");
        $(".aj").removeClass("am");
        $(".al").removeClass("am");
        return mode = "normal";
    })

    $('#number').focus(function(){
        $(this).attr("type", "number");
    })

    $('#number').blur(function(){
        $(this).attr("type", "password");
    })

    $("#play").click(function () {

        var a = $("#number").val() || 0;

        var L = auto == "on" ? PARAMETERS.size[mode] : m;

        var x = "";
        var res = "";
    
        var res = parseInt(a).toString(2).split('').reverse().join('').replace(/^0+/, '0') || 0;
        
        for (let i = 0; i < L; i++) {
            var nextChar = parseInt(res, res[0] == "0" ? 8 : 10) % PARAMETERS.charsets[mode].length;
            x += PARAMETERS.charsets[mode][nextChar];
            console.log(parseInt(res).toString(2).split('').reverse().join('').replace(/^0+/, '0') || 0);
            res = (parseInt(res) + 2).toString(2).split('').reverse().join('').replace(/^0+/, '0') || 0;
            console.log(res);
        }

        $(".a").remove();
        if (x == "") {
            $("body").append("<div class='a'>empty</div>");
        }
        else {
            navigator.clipboard.writeText(x).then(function () {
                alert("Text copied to clipboard");
            }).catch(function (error) { return false; });
            $("body").append("<div class='a'>" + x + "</div>");
        }
    })

})
