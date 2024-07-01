window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var links = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('section');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#49494a';
    } else {
        navbar.style.backgroundColor = '#333';
    }

    sections.forEach(section => {
        var rect = section.getBoundingClientRect();
        var top = rect.top;
        var bottom = rect.bottom;
        var id = section.getAttribute('id');

        if (top <= 60 && bottom >= 60) {
            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === id) {
                    link.classList.add('active');
                }
            });
        }
    });
});