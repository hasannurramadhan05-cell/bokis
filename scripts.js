/**
 * File: script.js
 * Deskripsi: Menambahkan interaktivitas dasar pada website portofolio.
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Fungsionalitas Smooth Scrolling (Scroll Halus)
    // Membuat transisi scroll menjadi halus ketika mengklik tautan navigasi
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Mencegah perilaku default (melompat langsung)
            e.preventDefault();

            // Mendapatkan ID target dari atribut href (misalnya '#beranda')
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Melakukan scroll halus ke elemen target
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Mengurangi tinggi header agar tidak tertutup
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Fungsionalitas Navigasi Responsif (Toggle Menu)
    // Walaupun belum ada tombol menu di HTML, ini adalah persiapan untuk tampilan mobile.
    // Jika Anda menambahkan tombol di HTML, Anda bisa mengaktifkan bagian ini.
    // const menuToggle = document.querySelector('.menu-toggle'); // Ganti dengan selector tombol Anda
    // const nav = document.querySelector('nav ul');

    /*
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            // Anda perlu menambahkan CSS yang sesuai untuk .nav-active
        });
    }
    */
    
    // 3. Menambahkan Efek Aktif pada Navigasi saat Scroll
    const sections = document.querySelectorAll('section');
    const headerHeight = document.querySelector('header').offsetHeight;

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionHeight = section.clientHeight;

            // Jika posisi scroll berada di dalam batas seksi
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

    // Anda perlu menambahkan style CSS ini agar terlihat:
    // nav ul li a.active {
    //     color: #ffcc00 !important; /* Contoh warna aktif */
    //     border-bottom: 2px solid #ffcc00 !important;
    // }
});