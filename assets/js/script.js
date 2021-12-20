$(document).ready(function() {

    // Añade el comportamiento smooth a todos los enlaces

    $("a").click(function() {
        var gato = this.hash

        $("html, body").animate({
                scrollTop: $(gato).offset().top
            },
            800
        )
    });

    $('[data-toggle="tooltip"]').tooltip()
})