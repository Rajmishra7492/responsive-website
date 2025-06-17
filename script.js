// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('.sidebar');

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// Mobile menu functionality
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    sidebar.classList.toggle('active');
    
    // Update icon
    const icon = mobileMenuBtn.querySelector('i');
    icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && !e.target.closest('.sidebar')) {
        navLinks.classList.remove('active');
        sidebar.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
    }
});

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
const themeIcon = themeToggle.querySelector('i');
themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

// Search functionality
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Clear search when input is cleared
searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            card.style.display = 'block';
        });
    }
}); 