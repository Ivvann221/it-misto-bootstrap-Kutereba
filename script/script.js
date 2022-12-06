
$('.header__burger').on('click', function(){
    $('.header__burger').toggleClass('active');
    $('.mobile').toggleClass('active');
    
  })
  
  $('.mobile__nav a').on('click', function(){
    $('.header__burger').toggleClass('active');

  })