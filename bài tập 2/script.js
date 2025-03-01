document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".background");

    // Mở menu + overlay
    menuToggle.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn chặn reload trang
        mobileMenu.style.left = "0";
        overlay.classList.add("active");
    });

    // Đóng menu + overlay
    function closeMenu() {
        mobileMenu.style.left = "-100%";
        overlay.classList.remove("active");
    }

    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu); // Đóng khi click ra ngoài
});


// Toggle menu khi click
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".toggle-dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Chỉ tìm sub-submenu con trực tiếp của phần tử được click
            const subMenu = this.nextElementSibling;

            // Đóng tất cả sub-submenu trừ cái đang mở
            document.querySelectorAll(".sub-submenu").forEach((menu) => {
                if (menu !== subMenu) {
                    menu.style.display = "none";
                }
            });

            // Toggle hiển thị submenu con
            if (subMenu) {
                subMenu.style.display = subMenu.style.display === "flex" ? "none" : "flex";
            }
        });
    });
});





document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
        }
    });
});


const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const dropdown = link.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    });
    link.addEventListener('mouseleave', () => {
        const dropdown = link.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    });
});


window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var triggerHeight = 100; // Độ cao cần cuộn trước khi navbar cố định

    if (window.scrollY > triggerHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const circle = document.querySelector("#scrollToTopBtn svg circle");

// Hàm kiểm tra vị trí cuộn và thay đổi màu sắc vòng tròn
window.onscroll = function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    // Hiển thị nút và thay đổi màu sắc của vòng tròn khi cuộn
    if (scrollPosition > 100) {
        scrollToTopBtn.style.display = "block"; // Hiển thị nút
        scrollToTopBtn.classList.add("show-circle");  // Hiệu ứng vòng tròn
        let dashOffset = 159.513 - (scrollPosition / document.documentElement.scrollHeight) * 162.513;
        circle.style.strokeDashoffset = dashOffset; // Thay đổi độ dài vòng tròn
        circle.style.stroke = "rgb(51, 152, 230)"; // Màu stroke khi cuộn xuống
    } else {
        scrollToTopBtn.style.display = "none"; // Ẩn nút
        scrollToTopBtn.classList.remove("show-circle"); // Xóa hiệu ứng vòng tròn
        circle.style.stroke = "rgb(130, 141, 149)"; // Màu mặc định
    }
};

// Cuộn về đầu trang khi nhấn nút
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};







const ctx = document.getElementById('timeSavedChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [80, 20],
                    backgroundColor: ['#e91e63', '#f8f9fa'],
                    borderWidth: 0
                }]
            },
            options: {
                rotation: -90,
                circumference: 180,
                cutout: '70%',
                responsive: true,
                maintainAspectRatio: false
            }
        });
    


