$(function(){
    $(".contacts-wrap .tab_item").not(":first").hide();
    $(".contacts-wrap .tab").click(function() {
    	$(".contacts-wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
    	$(".contacts-wrap .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".header-tabs__wrap .tab_item").not(":first").hide();
    $(".header-tabs__wrap .tab").click(function() {
    	$(".header-tabs__wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
    	$(".header-tabs__wrap .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".cont-wrap .tab_item").not(":first").hide();
    $(".cont-wrap .tab").click(function() {
        $(".cont-wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".cont-wrap .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".footer-item__wrap .tab_item").not(":first").hide();
    $(".footer-item__wrap .tab").click(function() {
        $(".footer-item__wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".footer-item__wrap .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // STELLAR.JS

    $('#stellar_preview').stellar();
    $.stellar({
        responsive: true,
        horizontalOffset: 60
    });


    //OWL-CAROUSEL
    $('.owl-carousel').owlCarousel({
        responsive: {
            0 : {
                items: 1,
                nav : true
            },
            navText: ''
        },
        navText: ''
    });

    //Magnific Popup

    $('.popup').magnificPopup({
        type: 'image'
    });

    //Modal

        /* Modals
        ====================================*/

        $(".js-modal").each(function() {
            var modalWidth = $(this).innerWidth() / 2;

            $(this).css({
                "marginLeft": "-" + modalWidth + "px"
            });
        });

        $(".js-show-modal").on("click", function(e) {

            e.preventDefault();

            var currentModal = $(this).attr("href");

            $(currentModal).fadeIn(500);
            $("body").append("<div class='overlay' id='js-overlay'></div>").addClass("open-modal");

        });


        $(".js-modal-close").on("click", function(e) {

            e.preventDefault();
            
            $(".js-modal").fadeOut(100);
            $("body").removeClass("open-modal");
            $("#js-overlay").remove();

        });


        $("body").on("click", "#js-overlay", function() {
            $(".js-modal").fadeOut(100);
            $("body").removeClass("open-modal");
            $("#js-overlay").remove();
        });



});

$(window).load(function () {
   $(".header-tabs .header-tabs__wrap").animated("flipInY", "fadeOut");
   $('.header-slogan__title').animated('fadeInRight', 'fadeOut');
   $('.header-slogan__descr').animated('fadeInLeft', 'fadeOut');
   $('.profi__title').animated('flipInY', 'fadeOut');
   $('.contents__profi').animated('flipInY', 'fadeOut');
   $('.sidebar__profi').animated('flipInX', 'fadeOut');
   $('.profi-item .profi-pic').animated('zoomInLeft', 'fadeOut');
   $('.profi-item .profi-text').animated('zoomInRight', 'fadeOut');
   $('.footer-item__title').animated('fadeInRight', 'fadeOut');
   $('.footer-item__descr').animated('fadeInLeft', 'fadeOut');
   $('.cont__header .cont__title').animated('flipInY', 'fadeOut');
   $('.cont__header .tabs').animated('flipInX', 'fadeOut');
   $('.red-sec__content .red-sec__title').animated('zoomInLeft', 'fadeOut');
   $('.red-sec__content .red-sec__footer').animated('zoomInRight', 'fadeOut');
});