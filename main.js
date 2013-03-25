$(document).ready(function(){
    
    $('#filter').on('change', function(){

        var filter_opt = $(this).val();

        // mostrem tts
        if(filter_opt == 'all') {
            $('article').fadeIn('slow');

        } else {  

            $('article').each(function() {

                if(!$(this).hasClass(filter_opt)) {
                    $(this).fadeOut('fast');
                } else {
                    $(this).fadeIn('slow');
                }

            });
        }

    });

});