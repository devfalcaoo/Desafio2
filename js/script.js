$(document).ready(function(){

        var owl = $('.owl-carousel');

          owl.owlCarousel({
                center:true,
                items:1,
                loop:true,
                margin:20,
                lazyLoad: true,
                autoplay: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                autoplayHoverPause: true,
                autoplayTimeout: 4000,
                navIcon: ['img/seta-esquerda (1).png", "img/seta-direita(1).png'],
                responsive:{
                  0:{
                    items:1
                  },
                  600:{
                    items:2
                  },
                  1200:{
                    items:3
                  }
                }
          });

          $(".prev").on("click", function(){

            owl.trigger('prev.owl.carousel');

          });

          $(".next").on("click", function(){

            owl.trigger('next.owl.carousel');

          });

       });