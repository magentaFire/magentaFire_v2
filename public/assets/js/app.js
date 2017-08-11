$(document).ready(function () {
  $('.scrollspy').scrollSpy({
    scrollOffset: 50
  });
  
  $("#btnDemoReel").click(function(){
    window.open("https://vimeo.com/173952103", "blank");
  });
  
  $(document).scroll(despliegaMenu)

  function despliegaMenu(){
    if(window.scrollY >= 370){
      $("header").removeClass("nav-wrapper")
    }
    else{
      $("header").addClass("nav-wrapper")
    }
  };
});
