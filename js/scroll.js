$(document).scroll(function() {
    var scroll_top = $(document).scrollTop();
    var div_one_top = $('#about').position().top - 200;
    var div_two_top = $('#goal').position().top - 200;
    var div_three_top = $('#projects').position().top - 200;
    var div_four_top = $('#sponsors').position().top - 120;
    var div_five_top = $('#contact').position().top - 200;

    if (scroll_top > ($(window).height() - 100) && scroll_top < div_one_top) {
      //Home
      $('#aboutLink').css("background-color","transparent");
      $('#goalLink').css("background-color","transparent");
      $('#projectsLink').css("background-color","transparent");
      $('#sponsorsLink').css("background-color","transparent");
      $('#contactLink').css("background-color","transparent");

      $('.navbar-inverse').css("background-color","rgba(238,238,238,0.8)");
      $('.navbar-inverse').css("border-bottom-color","transparent");

    } else if(scroll_top > div_one_top && scroll_top < div_two_top) {
        //About
        $('#aboutLink').css("background-color","#009BCF");
        $('#goalLink').css("background-color","transparent");
        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

    } else if( scroll_top > div_two_top && scroll_top < div_three_top) {
        //Our Goal
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","#009BCF");
        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

    } else if( scroll_top > div_three_top && scroll_top < div_four_top) {
        //Projects
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","transparent");
        $('#projectsLink').css("background-color","#009BCF");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

    } else if( scroll_top > div_four_top && scroll_top < div_five_top) {
        //Sponsors
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","transparent");
        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","#009BCF");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

    } else if( scroll_top > div_five_top) {
        //Contact
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","transparent");
        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","#009BCF");

        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

    } else {
        //Home
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","transparent");
        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("background-color","rgba(238,238,238,0.8)");
        $('.navbar-inverse').css("border-bottom-color","transparent");
    }

});

//handles two separate nav bars

$(document).ready(function() {
  $('#mainNav a').on('click', function(){
    if ($(window).width() <= 752) $('.main-toggle').click() //bootstrap 3.x by Richard
  });
  $('#subNav a').on('click', function(){
    if ($(window).width() <= 752) $('.subnav-toggle').click() //bootstrap 3.x by Richard
  });

});

$(window).ready(function() {
  $('.loader').delay(800).fadeOut("slow");
});