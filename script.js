const galleryCollection = document.getElementById('gallerycollection');


galleryCollection.addEventListener('wheel', (e) => {
  e.preventDefault();
  galleryCollection.scrollLeft += e.deltaY;
});

galleryCollection.addEventListener('wheel', (e) => {
  e.preventDefault();
  galleryCollection.animate({
    scrollLeft: galleryCollection.scrollLeft + e.deltaY
  }, {
    duration: 500,
    easing: 'ease-out'
  });
});

galleryCollection.addEventListener('wheel', (e) => {
  e.preventDefault();
  const scrollLeft = galleryCollection.scrollLeft + e.deltaY;
  const maxScrollLeft = galleryCollection.scrollWidth - galleryCollection.offsetWidth;
  galleryCollection.animate({
    scrollLeft: Math.min(Math.max(scrollLeft, 0), maxScrollLeft)
  }, {
    duration: 500,
    easing: 'ease-out'
  });
});





$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });

  $('.back-to-top').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});


const mainNavLinks = document.querySelectorAll('.main-nav a');

// Add an event listener to each link
mainNavLinks.forEach(link => {
  link.addEventListener('click', event => {
    const categoryId = link.getAttribute('href').replace('#', '');
    const category = document.getElementById(categoryId);
    const activeCategory = document.querySelector('.gallery-category.active');

    if (activeCategory) {
      activeCategory.classList.remove('active');
    }

    category.classList.add('active');
  });
});




// Add an event listener to the main navigation links
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', event => {
      event.preventDefault();
      const categoryId = link.getAttribute('href').replace('#', '');
      const category = document.getElementById(categoryId);
      const activeCategory = document.querySelector('.gallery-category.active');

      if (activeCategory) {
          activeCategory.classList.remove('active');
      }

      category.classList.add('active');
  });
});
