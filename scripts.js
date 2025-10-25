document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            e.preventDefault();


            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {

                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Mengurangi tinggi header agar tidak tertutup
                    behavior: 'smooth'
                });
            }
        });
    });


    const sections = document.querySelectorAll('section');
    const headerHeight = document.querySelector('header').offsetHeight;

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 100) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });


});