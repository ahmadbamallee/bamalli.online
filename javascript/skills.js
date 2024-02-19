
function animateProgressBars() {
    var progressBars = document.querySelectorAll('.progress');
    var windowHeight = window.innerHeight;
  
    for (var i = 0; i < progressBars.length; i++) {
      var progressBar = progressBars[i];
      var progressPercentage = parseInt(progressBar.style.width, 10);
      var progressBarPosition = progressBar.getBoundingClientRect().top;
  
      if (progressBarPosition < windowHeight) {
        progressBar.style.width = progressPercentage + '%';
      }
    }
  }
  
 
  window.addEventListener('load', animateProgressBars);
  window.addEventListener('scroll', animateProgressBars);
  