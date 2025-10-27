// === 1. Плавное появление секций при скролле ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.section').forEach(sec => observer.observe(sec));

// === 2. Анимация логотипа при загрузке ===
window.addEventListener('load', () => {
  const logo = document.querySelector('.logo img');
  logo.style.transform = 'scale(1.2)';
  logo.style.transition = 'transform 0.8s ease';
  setTimeout(() => logo.style.transform = 'scale(1)', 800);
});

// === 3. Плавное появление кнопки "Get Started" ===
const btn = document.querySelector('.btn-secondary');
btn.style.opacity = 0;
window.addEventListener('load', () => {
  setTimeout(() => {
    btn.style.transition = 'opacity 1s ease';
    btn.style.opacity = 1;
  }, 700);
});

// === 4. Пульсация иконок сервисов ===
document.querySelectorAll('.service-card img').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2)';
    icon.style.transition = 'transform 0.3s ease';
  });
  icon.addEventListener('mouseleave', () => icon.style.transform = 'scale(1)');
});

// === 5. Подсветка карточек проектов при наведении ===
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.transition = 'transform 0.3s ease';
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
  });
});

// === 6. Плавное появление меню при открытии ===
const navBtn = document.querySelector('[data-nav-toggler]');
const nav = document.querySelector('[data-navbar]');
navBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  nav.style.transition = 'all 0.4s ease';
});

// === 7. "Печатающийся" текст в hero ===
const title = document.querySelector('.hero-content h1');
const fullText = title.textContent;
title.textContent = '';
let i = 0;
function type() {
  if (i < fullText.length) {
    title.textContent += fullText.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
window.addEventListener('load', type);

// === 8. Анимация появления изображений при скролле ===
document.querySelectorAll('img').forEach(img => {
  img.style.opacity = 0;
  observer.observe(img);
});
document.head.insertAdjacentHTML('beforeend', `
<style>
.visible { opacity: 1 !important; transform: translateY(0) !important; transition: all 0.8s ease; }
.section, img { opacity: 0; transform: translateY(40px); transition: all 0.8s ease; }
</style>
`);

// === 9. Анимация социальных иконок в футере ===
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'rotate(10deg) scale(1.2)';
    link.style.transition = 'transform 0.3s ease';
  });
  link.addEventListener('mouseleave', () => link.style.transform = 'rotate(0deg) scale(1)');
});
