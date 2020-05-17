(function ($) {
    $(function () {
        //Materialize
        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready

    //Materialize    
    $('input#input_text, textarea#textarea1').characterCounter();

 
   
})(jQuery); // end of jQuery name space

$(document).ready(function () {
    //Boostrap
    $('.carousel').carousel();
    //Boostrap
    $('.fixed-action-btn').floatingActionButton();
    //Materialize
    $('.tap-target').tapTarget();
});
