$(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });

    $('body').on('dblclick', 'u', function() {
        $(this).css('color', 'red');
    });

    $('.card-title').click(function() {
        $('.card-text').toggle();
    });
});