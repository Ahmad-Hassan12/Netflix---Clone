// JavaScript to handle left and right button scrolling
document.querySelector('.left-btn').addEventListener('click', () => {
    document.querySelector('.horizontal-scroll').scrollBy({
      left: -200, // Adjust scroll distance
      behavior: 'smooth',
    });
  });
  
  document.querySelector('.right-btn').addEventListener('click', () => {
    document.querySelector('.horizontal-scroll').scrollBy({
      left: 200, // Adjust scroll distance
      behavior: 'smooth',
    });
  });

  

