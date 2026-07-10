document.addEventListener('DOMContentLoaded', () => {
    
    // --- STICKY HEADER ---
    const header = document.querySelector('header');
    const updateHeader = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', updateHeader);
    updateHeader();

    // --- MOBILE MENU TOGGLE ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if(mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'rgba(46, 46, 77, 0.98)';
            navMenu.style.padding = '1rem';
        });
    }

    // --- FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if(questionBtn) {
            questionBtn.addEventListener('click', () => {
                // Close others
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                // Toggle current
                item.classList.toggle('active');
            });
        }
    });

    // --- BOOKING MODAL LOGIC ---
    const modal = document.getElementById('bookingModal');
    const openBtns = document.querySelectorAll('.open-booking');
    const closeBtn = document.querySelector('.booking-close');
    const backBtn = document.getElementById('modalBackBtn');
    
    // Open modal
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            goToStep(1); // Always start at step 1
        });
    });

    // Close modal
    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Modal Steps Logic
    let currentStep = 1;

    window.goToStep = function(stepNum) {
        // Hide all steps
        document.querySelectorAll('.booking-step').forEach(step => step.classList.remove('active'));
        
        // Show target step
        document.getElementById(`step${stepNum}`).classList.add('active');
        currentStep = stepNum;

        // Manage Back Button visibility
        if (currentStep > 1) {
            backBtn.style.display = 'block';
        } else {
            backBtn.style.display = 'none';
        }
    };

    window.nextStep = function(stepNum) {
        goToStep(stepNum);
    };

    if(backBtn) {
        backBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                goToStep(currentStep - 1);
            }
        });
    }

    // --- LANGUAGE TRANSLATIONS FOR BOOKING MODAL ---
    let currentLanguage = 'sv'; // default

    const translations = {
        sv: {
            selectMeal: "Välj måltid",
            dinner: "Middag",
            selectGuestsTitle: "VÄLJ ANTAL PERSONER",
            childrenCountDefault: "Varav barn antal",
            children0: "0 Barn",
            children1: "1 Barn",
            children2: "2 Barn",
            time: "Tid",
            book: "BOKA",
            booked: "BOKAD!",
            login: "Logga in",
            days: ["MÅN", "TIS", "ONS", "TOR", "FRE", "LÖR", "SÖN"]
        },
        en: {
            selectMeal: "Select meal",
            dinner: "Dinner",
            selectGuestsTitle: "SELECT NUMBER OF GUESTS",
            childrenCountDefault: "Number of children",
            children0: "0 Children",
            children1: "1 Child",
            children2: "2 Children",
            time: "Time",
            book: "BOOK",
            booked: "BOOKED!",
            login: "Log in",
            days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
        }
    };

    function translateModal(lang) {
        // 1. Static keys
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // 2. Guest buttons count labels
        const guestBtns = document.querySelectorAll('.guest-btn');
        guestBtns.forEach(btn => {
            const count = btn.getAttribute('data-guests-count');
            if (count) {
                if (count === '1') {
                    btn.textContent = lang === 'sv' ? '1 person' : '1 guest';
                } else if (count === '9+') {
                    btn.textContent = lang === 'sv' ? '9+ personer' : '9+ guests';
                } else {
                    btn.textContent = lang === 'sv' ? `${count} personer` : `${count} guests`;
                }
            }
        });

        // 3. Guest count options inside step 3
        const guestCountSelect = document.getElementById('guestCountSelect');
        if (guestCountSelect) {
            Array.from(guestCountSelect.options).forEach(opt => {
                const val = opt.value;
                opt.textContent = lang === 'sv' ? (val === '1' ? '1 person' : `${val} personer`) : (val === '1' ? '1 guest' : `${val} guests`);
            });
        }

        // 4. Month title
        const monthTitle = document.getElementById('monthTitle');
        if (monthTitle) {
            const monthName = monthTitle.getAttribute('data-month-name');
            const year = monthTitle.getAttribute('data-year');
            if (monthName === 'JULI') {
                monthTitle.textContent = lang === 'sv' ? `JULI ${year}` : `JULY ${year}`;
            }
        }

        // 5. Day headers
        const dayHeaders = document.querySelectorAll('.cal-day-header');
        dayHeaders.forEach(header => {
            const dayNum = parseInt(header.getAttribute('data-day'));
            if (dayNum >= 1 && dayNum <= 7) {
                header.textContent = translations[lang].days[dayNum - 1];
            }
        });

        // 6. Selected summary values in steps 2 and 3
        const summaries = document.querySelectorAll('.selection-summary');
        summaries.forEach(sum => {
            sum.textContent = translations[lang].dinner;
        });
    }

    // --- LANGUAGE SWITCHER EVENT LISTENERS ---
    const pageLangSelect = document.querySelector('.lang-select');
    const langSwitchBtn = document.querySelector('.lang-switch-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const dropdownOptions = document.querySelectorAll('.lang-dropdown-option');

    function setLanguage(lang) {
        currentLanguage = lang;

        // Sync page switcher
        if (pageLangSelect) {
            pageLangSelect.value = lang;
        }

        // Sync modal switcher label
        const currentLangLabel = document.querySelector('.current-lang');
        if (currentLangLabel) {
            currentLangLabel.textContent = lang === 'sv' ? 'Swedish' : 'English';
        }

        // Sync modal switcher active list checkmarks
        dropdownOptions.forEach(opt => {
            const optLang = opt.getAttribute('data-lang');
            const checkIcon = opt.querySelector('.check-icon');
            if (optLang === lang) {
                opt.classList.add('active');
                if (checkIcon) checkIcon.style.display = 'inline';
            } else {
                opt.classList.remove('active');
                if (checkIcon) checkIcon.style.display = 'none';
            }
        });

        // Translate
        translateModal(lang);
    }

    if (pageLangSelect) {
        pageLangSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    if (langSwitchBtn && langDropdown) {
        langSwitchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });
        document.addEventListener('click', () => {
            langDropdown.classList.remove('show');
        });
    }

    dropdownOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = opt.getAttribute('data-lang');
            setLanguage(selectedLang);
            langDropdown.classList.remove('show');
        });
    });

    // Selection functions to pass data between steps
    window.selectGuests = function(num) {
        const suffix = currentLanguage === 'sv' ? (num === '9+' || num > 1 ? 'personer' : 'person') : (num === '9+' || num > 1 ? 'guests' : 'guest');
        document.getElementById('finalGuests').textContent = `${num} ${suffix}`;
        document.getElementById('guestCountSelect').value = num === '9+' ? 2 : num; // mockup logic
        nextStep(3);
    };

    window.selectDate = function(dateStr) {
        let displayDate = dateStr;
        if (currentLanguage === 'sv') {
            displayDate = dateStr.replace('July', 'Juli');
        } else {
            displayDate = dateStr.replace('Juli', 'July');
        }
        document.getElementById('finalDate').textContent = displayDate;
        nextStep(4);
    };

    // Final booking button simulation
    const bookBtns = document.querySelectorAll('.btn-book-time');
    bookBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.textContent;
            btn.textContent = translations[currentLanguage].booked;
            btn.style.background = '#4CAF50';
            setTimeout(() => {
                closeModal();
                btn.textContent = originalText;
                btn.style.background = 'var(--btn-blue)';
            }, 1500);
        });
    });

    // --- FOUNDER CAROUSEL LOGIC ---
    const carousels = document.querySelectorAll('.founder-carousel');
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-arrow.prev');
        const nextBtn = carousel.querySelector('.carousel-arrow.next');
        let slideIndex = 0;

        function showSlide(index) {
            if (index >= slides.length) slideIndex = 0;
            else if (index < 0) slideIndex = slides.length - 1;
            else slideIndex = index;

            slides.forEach((slide, i) => {
                if (i === slideIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            dots.forEach((dot, i) => {
                if (i === slideIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showSlide(slideIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showSlide(slideIndex + 1);
            });
        }

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const targetIndex = parseInt(dot.getAttribute('data-slide'));
                showSlide(targetIndex);
            });
        });
    });

});
