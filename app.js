$(document).ready(()=>{
    AOS.init();
    
    var elementOne = document.getElementById('circle-1');
    var elementOneHeight = elementOne.clientHeight;
    var elementTwo = document.getElementById("circle-2");
    var elementTwoHeight =  elementTwo.clientHeight;
    var elementThree = document.getElementById("circle-3");
    var elementThreeHeight =  elementThree.clientHeight;
    var elementFour = document.getElementById("circle-4");
    var elementFourHeight =  elementFour.clientHeight;
    var elementFive = document.getElementById("circle-5");
    var elementFiveHeight =  elementFive.clientHeight;
    var elementSix = document.getElementById("circle-6");
    var elementSixHeight =  elementSix.clientHeight;
    
    // listen for scroll event and call animate function
    document.addEventListener('scroll', animate);
    
    // check if element is in view
    function inView() {
      // get window height
      var windowHeight = window.innerHeight;
      // get number of pixels that the document is scrolled
      var scrollY = window.scrollY || window.pageYOffset;
      
      // get current scroll position (distance from the top of the page to the bottom of the current viewport)
      var scrollPosition = scrollY + windowHeight;
      // get element position (distance from the top of the page to the bottom of the element)
    //   var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    var elementOnePosition = elementOne.getBoundingClientRect().top + scrollY + elementOneHeight;
      var elementTwoPosition = elementTwo.getBoundingClientRect().top + scrollY + elementTwoHeight;
      var elementThreePosition = elementThree.getBoundingClientRect().top + scrollY + elementThreeHeight;
      var elementFourPosition = elementFour.getBoundingClientRect().top + scrollY + elementFourHeight;
      var elementFivePosition = elementFive.getBoundingClientRect().top + scrollY + elementFiveHeight;
      var elementSixPosition = elementSix.getBoundingClientRect().top + scrollY + elementSixHeight;
      // is scroll position greater than element position? (is element in view?)
      if (scrollPosition > elementOnePosition) {return true;}
      if (scrollPosition > elementTwoPosition) {return true;}
      if (scrollPosition > elementThreePosition) {return true;}
      if (scrollPosition > elementFourPosition) {return true;}
      if (scrollPosition > elementFivePosition) {return true;}
      if (scrollPosition > elementSixPosition) {return true;}
      return false;
    }
    
    // animate element when it is in view
    function animate() {
      // is element in view?
      if (inView()) {
          // element is in view, add class to element
        elementOne.classList.add('circle');
        elementTwo.classList.add('circle');
        elementThree.classList.add('circle');
        setTimeout(elementFour.classList.add('circle'),3000);
        setTimeout(elementFive.classList.add('circle'),3000);
        setTimeout(elementSix.classList.add('circle'),3000);
          
        //   elementFive.classList.add('circle');
        //   elementSix.classList.add('circle');
    
      }
    }
})

