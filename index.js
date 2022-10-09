function myFunction1(){
    var sun = document.getElementById('sun')
    var moon = document.getElementById('moon')
    var carousel = document.querySelector('.carousel-site')
    var farm = document.querySelector('.farm')
    var welcome = document.querySelector('.welcome')
    var feature = document.querySelector('.w3l-features')
    
   
    var lightContent = document.getElementsByClassName('light-content')
    
    var darkBg = document.getElementsByClassName('dark-bg')

    moon.style.display = "none"
    sun.style.display = "block"
    carousel.style.background = "#222222"
    farm.style.color = "#0b0d0e"
    welcome.style.color = "#ffffff"
    feature.style.background = "#222222"
    
    for( var j = 0; j<darkBg.length;j++){
        darkBg[j].style.backgroundColor = "#222222"
    }
    for( var i = 0; i<lightContent.length;i++){
        lightContent[i].style.color = "#ffffff"
    }
    
    
  }
  function myFunction2(){
    var sun = document.getElementById('sun')
    var moon = document.getElementById('moon')
    var carousel = document.querySelector('.carousel-site')
    var farm = document.querySelector('.farm')
    var welcome = document.querySelector('.welcome')
    var feature = document.querySelector('.w3l-features')
    var lightContent = document.getElementsByClassName('light-content')
     var darkBg = document.getElementsByClassName('dark-bg')


    sun.style.display = "none"
    moon.style.display = "block"
    carousel.style.background = "#ffffff"
    farm.style.color = "#f4f4f4"
    welcome.style.color = "#222222"
    feature.style.background = "#ffffff"
    
    for( var j = 0; j<darkBg.length;j++){
        darkBg[j].style.backgroundColor = "#ffffff"
    }
    for( var i = 0; i<lightContent.length;i++){
        lightContent[i].style.color = "#222222"
    }
  }
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header")
    
    header.classList.toggle("sticky",window.scrollY > 0)
   
  })