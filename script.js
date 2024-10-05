const messageText = `Sinh nhật vui vẻ!
Chúc bạn sẽ luôn tỏa sáng như ánh mặt trời,
mang lại niềm vui và ánh sáng cho những người xung quanh.
Hy vọng rằng năm mới sẽ đem đến cho bạn thật nhiều may mắn và hạnh phúc!`;

const messageLines = messageText.split('\n'); // Tách lời chúc thành từng dòng
let lineIndex = 0; // Chỉ số dòng hiện tại

function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.style.visibility = 'visible';
    messageElement.innerHTML = ''; // Đặt lại nội dung trước khi bắt đầu

    const interval = setInterval(() => {
        if (lineIndex < messageLines.length) {
            messageElement.innerHTML += messageLines[lineIndex] + '<br>'; // Thêm dòng mới
            lineIndex++;
        } else {
            clearInterval(interval); // Dừng khi đã hiển thị tất cả các dòng
        }
    }, 2000); // Thay đổi thời gian hiển thị giữa các dòng nếu cần
}

// Tạo bóng bay
function createBalloons() {
    const balloonContainer = document.querySelector('.balloons');
    for (let i = 0; i < 10; i++) { // Tạo 10 bóng bay
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên
        balloon.style.animationDelay = `${Math.random() * 5}s`; // Thời gian delay ngẫu nhiên
        balloonContainer.appendChild(balloon);
    }
}

// Gọi hàm để tạo bóng bay khi trang tải xong
window.onload = createBalloons;
