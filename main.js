$(function(){
    $('#MudarTema').on('click', function(e){
        const tema = $('html');
        if(tema.attr('data-bs-theme') == 'dark'){
            tema.attr('data-bs-theme', 'light');
        }else{
            tema.attr('data-bs-theme', 'dark');
        }
        $('.material-symbols-outlined').toggleClass('dark');
        $('header').toggleClass('header-dark');
    })
})