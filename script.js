
const courseSlides = [
    {
        video: 'vid_course_1.mp4',
        title: 'Video ngắn "Speak Up"',
        group: 'Nhóm sinh viên: Khóa D20',
        subject: 'Môn học: Quản lý dự án truyền thông',
        desc: 'Với sức mạnh của Truyền thông Đa phương tiện, sinh viên hôm nay không chỉ học, mà còn kiến tạo tương lai. Đừng ngại thử thách, hãy sáng tạo không ngừng để biến ước mơ thành hiện thực và lan tỏa thông điệp của chính mình.',
        poster: 'thumb_speakup.png'
    },
    {
        video: 'vid_course_2.mp4',
        title: 'Video ngắn "Tôi sẽ là ai khi chọn truyền thông Đa phương tiện PTIT"',
        group: 'Nhóm sinh viên: Khóa D21',
        subject: 'Môn học: Kịch bản đa phương tiện',
        desc: 'Bước vào một hành trình mới, bạn mong muốn mình sẽ trở thành ai? Với chương trình đào tạo chất lượng, giàu thực tiễn và đội ngũ giảng viên giàu kinh nghiệm, Truyền thông Đa phương tiện PTIT chính là nơi ươm mầm những giấc mơ sáng tạo.',
        poster: 'thumb_toiselaai.png'
    },
    {
        video: 'vid_course_3.mp4',
        title: 'Dự án "Ngày đọng trên giấy"',
        group: 'Nhóm sinh viên: Khóa D21',
        subject: 'Môn học: Ứng dụng đồ hoạ đa phương tiện',
        desc: 'Dự án "Ngày đọng trên giấy" ra đời với mong muốn tăng cường nhận thức và truyền tải đến mọi người, đặc biệt là các bạn trẻ những thông điệp ý nghĩa về yêu bản thân. Khi bạn sống một cách trọn vẹn, những giá trị, kỷ niệm, những niềm hạnh phúc ấy sẽ mãi "đọng" lại trong ký ức, trong cuộc đời này.',
        poster: 'thumb_ngaydongtrengiay.png'
    },
    {
        video: 'vid_course_4.mp4',
        title: 'Dự án "Những cánh chim đêm không mỏi"',
        group: 'Nhóm sinh viên: Khóa D21',
        subject: 'Môn học: Ứng dụng sản xuất Audio & Video',
        desc: 'Khi thành phố đã ngủ yên, ở chợ Long Biên vẫn có những con người lặng thầm miệt mài mưu sinh – những người phụ nữ cửu vạn mang trong mình sức mạnh phi thường của sự bền bỉ. Sản phẩm là lời tri ân, là góc nhìn nhân văn về vẻ đẹp lao động – mộc mạc nhưng xúc động.',
        poster: 'thumb_nhuncanhchim.png'
    }
];

// ======================================
function toggleDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    const arrow = document.getElementById('dropdown-arrow');

    if (dropdown.classList.contains('opacity-0')) {
        dropdown.classList.remove('opacity-0', 'invisible');
        dropdown.classList.add('opacity-100', 'visible');
        arrow.style.transform = 'rotate(180deg)';
    } else {
        dropdown.classList.add('opacity-0', 'invisible');
        dropdown.classList.remove('opacity-100', 'visible');
        arrow.style.transform = 'rotate(0deg)';
    }
}
function setLang(lang) {
    if (lang === 'ENG') {
        window.location.href = 'index-en.html';
    } else if (lang === 'VI') {
        window.location.href = 'index.html';
    }

    document.getElementById('selected-lang').textContent = lang;
}

function setLangWithStorage(lang) {
    if (lang === 'ENG') {
        window.location.href = 'index-en.html';
    } else if (lang === 'VI') {
        window.location.href = 'index.html';
    }
}

document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('lang-dropdown');
    const button = event.target.closest('.group');

    if (!button) {
        dropdown.classList.add('hidden');
    }
});

document.querySelector('.group').addEventListener('mouseenter', function () {
    document.getElementById('lang-dropdown').classList.remove('hidden');
});

document.querySelector('.group').addEventListener('mouseleave', function () {
    document.getElementById('lang-dropdown').classList.add('hidden');
});
// ======================================
let currentCourse = 0;
let isSliding = false;
function renderCourseSlide(idx, direction = 0) {
    if (isSliding) return;
    isSliding = true;
    const wrap = document.querySelector('.course-slide-wrap');
    const oldSlide = document.getElementById('course-slide');
    const newSlide = document.createElement('div');
    newSlide.className = 'flex items-center justify-center gap-12 rounded-3xl course-slide-anim';
    newSlide.id = 'course-slide';
    if (direction === 1) newSlide.classList.add('slide-in-right');
    else if (direction === -1) newSlide.classList.add('slide-in-left');
    else newSlide.classList.add('slide-active');
    const data = courseSlides[idx];
    newSlide.innerHTML = `
                <div class='flex-shrink-0 w-[622px] h-[350px] flex items-center justify-center bg-black rounded-2xl'>
                    <video controls class='w-full h-full object-contain rounded-2xl'  poster='${data.poster}'>
                        <source src='${data.video}' type='video/mp4'>
                        Trình duyệt của bạn không hỗ trợ video.
                    </video>
                </div>
                <div class='text-left max-w-xl'>
                    <h3 class='text-white text-4xl font-extrabold mb-4'>${data.title}</h3>
                    <div class='text-white text-xl font-semibold mb-2'>${data.group}</div>
                    <div class='text-white text-lg mb-2'>${data.subject}</div>
                    <p class='text-white text-lg leading-relaxed font-base'>${data.desc}</p>
                </div>
            `;
    wrap.appendChild(newSlide);
    setTimeout(() => {
        if (direction === 1) {
            newSlide.classList.remove('slide-in-right');
            newSlide.classList.add('slide-active');
            oldSlide.classList.add('slide-out-left');
        } else if (direction === -1) {
            newSlide.classList.remove('slide-in-left');
            newSlide.classList.add('slide-active');
            oldSlide.classList.add('slide-out-right');
        }
    }, 10);
    setTimeout(() => {
        if (wrap.contains(oldSlide)) wrap.removeChild(oldSlide);
        isSliding = false;
    }, 500);
}
document.getElementById('course-prev').onclick = function () {
    const prev = (currentCourse - 1 + courseSlides.length) % courseSlides.length;
    renderCourseSlide(prev, -1);
    currentCourse = prev;
};
document.getElementById('course-next').onclick = function () {
    const next = (currentCourse + 1) % courseSlides.length;
    renderCourseSlide(next, 1);
    currentCourse = next;
};
window.addEventListener('DOMContentLoaded', () => renderCourseSlide(currentCourse, 0));
let lastScrollTop = 0;
const header = document.querySelector('header');
window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop && st > header.offsetHeight) {
        header.style.top = `-${header.offsetHeight}px`;
    } else {
        header.style.top = "0";
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);
const clubVideos = [
    { src: 'vid_club_1.mp4', poster: 'thumb_1.png' },
    { src: 'vid_club_2.mp4', poster: 'thumb_2.png' },
    { src: 'vid_club_3.mp4', poster: 'thumb_3.png' },
    { src: 'vid_club_4.mp4', poster: 'thumb_4.png' },
    { src: 'vid_club_5.mp4', poster: 'thumb_5.png' }
];
let clubCurrent = 0;
let isClubSliding = false;
function renderClubSlide(idx) {
    const total = clubVideos.length;
    // Lấy 1 video trước, 1 video sau và video hiện tại
    const getIdx = (offset) => (idx + offset + total) % total;
    const indices = [getIdx(-1), idx, getIdx(1)];
    const wrap = document.getElementById('club-slide');
    wrap.innerHTML = indices.map((i, pos) => {
        // Vị trí: 0,2 là nhỏ mờ; 1 là lớn rõ
        let size = '', opacity = '', extra = '';
        if (pos === 0 || pos === 2) {
            size = 'w-[320px] h-[180px]';
            opacity = 'opacity-60 scale-95';
        } else {
            size = 'w-[533px] h-[300px]';
            opacity = 'opacity-100 scale-100';
            extra = 'border border-orange-200 shadow-2xl';
        }
        return `
                    <div class="club-flex-slide ${size} ${opacity} bg-white/80 rounded-2xl shadow-lg flex items-center justify-center mx-2 ${extra}">
                        <video src="${clubVideos[i].src}" poster="${clubVideos[i].poster}" ${pos === 1 ? 'controls' : ''} class="w-full h-full object-contain rounded-2xl ${pos !== 1 ? 'pointer-events-none' : ''}" ${pos !== 1 ? 'tabindex="-1"' : ''}></video>
                    </div>
                `;
    }).join('');
}
function clubSlide(direction) {
    if (isClubSliding) return;
    isClubSliding = true;
    setTimeout(() => {
        clubCurrent = direction === 1
            ? (clubCurrent + 1) % clubVideos.length
            : (clubCurrent - 1 + clubVideos.length) % clubVideos.length;
        renderClubSlide(clubCurrent);
        isClubSliding = false;
    }, 400);
}
document.getElementById('club-prev').onclick = function () {
    clubSlide(-1);
};
document.getElementById('club-next').onclick = function () {
    clubSlide(1);
};
window.addEventListener('DOMContentLoaded', () => renderClubSlide(clubCurrent));


