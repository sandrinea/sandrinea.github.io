//fonction qui exécute un effet de déroulement lorsque que l on clique sur les onlets de la navbar ou le chevron du footer
$(function(){

    $(".navbar a, footer a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})

    });

})
