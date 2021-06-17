// THIS IS FOR JAVASCRIPT PAGE

$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.top').addClass("sticky");
        }
        else{
            $('.top').removeClass("sticky");
        }
    })

    var typed = new Typed(".typing",{
        strings: ["Desinger","Freelancer","Awesome"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing1",{
        strings: ["Desinger","Freelancer","Awesome"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });


    var $grid = $('.item-details').isotope({
        // options
      });
      // filter items on button click
      $('.galary_button').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

});