
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


mainNavLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const categoryId = link.getAttribute('href').replace('#', '');
    const category = document.getElementById(categoryId);
    const activeCategory = document.querySelector('.all-project.active');

    if (activeCategory) {
      activeCategory.classList.remove('active');
    }

    category.classList.add('active');
    category.scrollIntoView({ behavior: 'smooth' }); // Add this line
  });
});

