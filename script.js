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
        circle.style.stroke = "#605dba"; // Màu stroke khi cuộn xuống
    } else {
        scrollToTopBtn.style.display = "none"; // Ẩn nút
        scrollToTopBtn.classList.remove("show-circle"); // Xóa hiệu ứng vòng tròn
        circle.style.stroke = "#605dba"; // Màu mặc định
    }
};

// Cuộn về đầu trang khi nhấn nút
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form gửi đi mặc định
    window.location.href = '#'; // Chuyển hướng tới YouTube
  });
