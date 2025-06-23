const courseSlidesVI = [
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

const courseSlidesEN = [
    {
        video: 'vid_course_1.mp4',
        title: 'Short video "Speak Up"',
        group: 'Student group: Class of D20',
        subject: 'Subject: Media Project Management',
        desc: 'With the power of multimedia communication, students today don\'t just learn - they create the future. Don\'t fear challenges - keep creating, turn dreams into reality, and spread your own message to the world.',
        poster: 'thumb_speakup.png'
    },
    {
        video: 'vid_course_2.mp4',
        title: 'Short video "Who Will I Become If I Choose Multimedia Communication at PTIT?"',
        group: 'Student group: Class of D21',
        subject: 'Subject: Multimedia Scriptwriting',
        desc: 'As you begin a new journey, who do you want to become? With a high-quality, practice-oriented program and a team of experienced lecturers, PTIT’s Multimedia Communication program is where creative dreams are nurtured and brought to life.',
        poster: 'thumb_toiselaai.png'
    },
    {
        video: 'vid_course_3.mp4',
        title: 'Project "A Day Pressed on Paper"',
        group: 'Student group: Class of D21',
        subject: 'Subject: Multimedia Graphic Design Applications',
        desc: 'The project "A Day Pressed on Paper" was created to raise awareness and spread meaningful messages about self-love — especially to young people. When you live fully, those values, memories, and moments of happiness will be gently pressed into your life’s journey, staying with you forever.',
        poster: 'thumb_ngaydongtrengiay.png'
    },
    {
        video: 'vid_course_4.mp4',
        title: 'Project "The Tireless Wings of the Night"',
        group: 'Student group: Class of D21',
        subject: 'Subject: Audio & Video Production Applications',
        desc: 'While the city sleeps, life continues quietly at Long Biên Market — where hardworking women porters carry the extraordinary strength of resilience. This project is a heartfelt tribute and a deeply human perspective on the beauty of labor — raw, humble, yet profoundly moving.',
        poster: 'thumb_nhuncanhchim.png'
    }
];

// Xác định ngôn ngữ hiện tại dựa trên URL hoặc thuộc tính lang
function getCurrentLanguage() {
    const currentPath = window.location.pathname;
    const htmlLang = document.documentElement.lang;

    // Kiểm tra từ URL trước
    if (currentPath.includes('index-en.html') || currentPath.includes('/en/')) {
        return 'en';
    } else if (currentPath.includes('index.html') || htmlLang === 'vi') {
        return 'vi';
    }

    // Mặc định là tiếng Việt
    return 'vi';
}

// Chọn dữ liệu phù hợp dựa trên ngôn ngữ
const currentLang = getCurrentLanguage();
const courseSlides = currentLang === 'en' ? courseSlidesEN : courseSlidesVI;

// ======================================
// LANGUAGE SWITCHING LOGIC
// ======================================

function toggleDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    const arrow = document.getElementById('dropdown-arrow');

    if (!dropdown || !arrow) return;

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

// Hàm chuyển đổi ngôn ngữ chính
function switchLanguage(targetLang) {
    const currentLang = getCurrentLanguage();

    // Nếu đã ở ngôn ngữ được chọn thì không làm gì
    if (currentLang === targetLang) return;

    // Xác định URL đích
    let targetUrl;
    if (targetLang === 'en') {
        targetUrl = 'index-en.html';
    } else {
        targetUrl = 'index.html';
    }

    // Chuyển hướng
    window.location.href = targetUrl;
}

// Wrapper functions cho các nút trong dropdown
function setLang(lang) {
    if (lang === 'ENG') {
        switchLanguage('en');
    } else if (lang === 'VI') {
        switchLanguage('vi');
    }
}

// Deprecated - giữ lại để tương thích
function setLangWithStorage(lang) {
    setLang(lang);
}

// Xử lý sự kiện click bên ngoài dropdown
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('lang-dropdown');
    const langButton = event.target.closest('.group');

    if (!langButton && dropdown) {
        dropdown.classList.add('opacity-0', 'invisible');
        dropdown.classList.remove('opacity-100', 'visible');

        const arrow = document.getElementById('dropdown-arrow');
        if (arrow) {
            arrow.style.transform = 'rotate(0deg)';
        }
    }
});

// Xử lý hover cho dropdown (nếu có)
document.addEventListener('DOMContentLoaded', function () {
    const langGroup = document.querySelector('.group');

    if (langGroup) {
        langGroup.addEventListener('mouseenter', function () {
            const dropdown = document.getElementById('lang-dropdown');
            if (dropdown) {
                dropdown.classList.remove('hidden');
            }
        });

        langGroup.addEventListener('mouseleave', function () {
            const dropdown = document.getElementById('lang-dropdown');
            if (dropdown) {
                dropdown.classList.add('hidden');
            }
        });
    }
});

// ======================================
// COURSE SLIDER LOGIC
// ======================================

let currentCourse = 0;
let isSliding = false;

function renderCourseSlide(idx, direction = 0) {
    if (isSliding) return;
    isSliding = true;

    const wrap = document.querySelector('.course-slide-wrap');
    if (!wrap) {
        isSliding = false;
        return;
    }

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
            <video controls class='w-full h-full object-contain rounded-2xl' poster='${data.poster}'>
                <source src='${data.video}' type='video/mp4'>
                ${currentLang === 'en' ? 'Your browser does not support video.' : 'Trình duyệt của bạn không hỗ trợ video.'}
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
            if (oldSlide) oldSlide.classList.add('slide-out-left');
        } else if (direction === -1) {
            newSlide.classList.remove('slide-in-left');
            newSlide.classList.add('slide-active');
            if (oldSlide) oldSlide.classList.add('slide-out-right');
        }
    }, 10);

    setTimeout(() => {
        if (oldSlide && wrap.contains(oldSlide)) {
            wrap.removeChild(oldSlide);
        }
        isSliding = false;
    }, 500);
}

// Course navigation
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('course-prev');
    const nextBtn = document.getElementById('course-next');

    if (prevBtn) {
        prevBtn.onclick = function () {
            const prev = (currentCourse - 1 + courseSlides.length) % courseSlides.length;
            renderCourseSlide(prev, -1);
            currentCourse = prev;
        };
    }

    if (nextBtn) {
        nextBtn.onclick = function () {
            const next = (currentCourse + 1) % courseSlides.length;
            renderCourseSlide(next, 1);
            currentCourse = next;
        };
    }
});

// ======================================
// HEADER SCROLL LOGIC
// ======================================

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    const header = document.querySelector('header');
    if (!header) return;

    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop && st > header.offsetHeight) {
        header.style.top = `-${header.offsetHeight}px`;
    } else {
        header.style.top = "0";
    }

    lastScrollTop = st <= 0 ? 0 : st;
}, false);

// ======================================
// CLUB SLIDER LOGIC
// ======================================

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
    const getIdx = (offset) => (idx + offset + total) % total;
    const indices = [getIdx(-1), idx, getIdx(1)];

    const wrap = document.getElementById('club-slide');
    if (!wrap) return;

    wrap.innerHTML = indices.map((i, pos) => {
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

// Club navigation
document.addEventListener('DOMContentLoaded', function () {
    const clubPrevBtn = document.getElementById('club-prev');
    const clubNextBtn = document.getElementById('club-next');

    if (clubPrevBtn) {
        clubPrevBtn.onclick = function () {
            clubSlide(-1);
        };
    }

    if (clubNextBtn) {
        clubNextBtn.onclick = function () {
            clubSlide(1);
        };
    }
});

// Button back to top
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ======================================
// INITIALIZATION
// ======================================

window.addEventListener('DOMContentLoaded', () => {
    renderCourseSlide(currentCourse, 0);
    renderClubSlide(clubCurrent);
});