/*global $, console, alert */
$(function () {
    'use strict';  
    $('body').css('paddingTop', $('.navbar').innerHeight());
    
    $('.navbar-inverse li a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top + 1
        }, 1500);
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    //
    $(window).scroll(function () {
        $('.block').each(function () {
            if($(window).scrollTop() > $(this).offset().top) {
                var $block = $(this).attr('id');
                $('.navbar a').removeClass("active");
                $('.navbar a[data-value= "' + $block + '"]').addClass('active');
            }
        });
    });
    $(window).resize(function () {
        $('body').css('paddingTop', $('.navbar').innerHeight());
    })
    // when click on search sign will show input
    //when click any anchor will go no where
    $('a').click(function (e) {
        e.preventDefault();       
    });
    $('.icon-bar-right a .fa-search').click(function () {
        $('.icon-bar-right input').animate({
            opacity: 1
        }, 500, function () {
        $('.icon-bar-right input').animate({
            opacity: 0
        }, 7000)
        })
    });
    //mix it up 
    var mixer = mixitup('#container');
    // bootstrap carousel
    $('.carousel').carousel();
    
    // // swiper library
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      

    //     $grid.isotope({ filter: '.bullding' });

    //     // filter .alkali OR .alkaline-earth items
    //     $grid.isotope({ filter: '.interior' });

    //     // filter .metal AND .transition items
    //     $grid.isotope({ filter: '.construction' });

    //     // show all items
    //     $grid.isotope({ filter: '*' });
    // var $grid = $('.grid').isotope({
    //     // options
    //   });
    //   // filter items on button click
    //   $('.pro-nav ul li').on( 'click', function() {
    //     $('a').click(function (e) {
    //         e.preventDefault();
    //     })
    //     var filterValue = $(this).attr('data-filter');
    //     $grid.isotope({ filter: filterValue });
    //   });
   

});