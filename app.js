const closeBtn = document.getElementById('close-button');
const openBtn = document.getElementById('open-button');
const mainHeader = document.querySelector('.main-header');
const mobileMenu = document.querySelector('.mobile-menu');
const dropdownLinks = [
    ...document.querySelectorAll('.mobile-menu .dropdown-links'),
];
const fastSearchLink = document.getElementById('fast-search');
const searchIconButton = document.getElementById('search-icon-button');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const searchOptions = document.querySelector('.search-options');
const searchOptionsInput = document.querySelector('.search-options input');
const searchSubmitLink = document.getElementById('search-submit');
const exitOptionsButton = document.getElementById('exit');

window.addEventListener('resize', function () {
    const windowSize = window.innerWidth;
    if (windowSize >= 768 && this.document.body.classList.contains('open')) {
        this.document.body.classList.remove('open');
        hideSearchOptions();
    }
});

console.log(searchOptionsInput.value);

searchSubmitLink.addEventListener('click', function (event) {
    if (searchOptionsInput.value) {
        window.open(
            `https://www.google.com/search?q=${searchOptionsInput.value}`,
            '_blank'
        );
    }
});

exitOptionsButton.addEventListener('click', () => {
    closeMenu();
    hideSearchOptions();
});

searchIconButton.addEventListener('click', function () {
    if (!document.body.classList.contains('open')) {
        return;
    }
    this.classList.add('active');
    mobileMenuWrapper.style.visibility = 'hidden';
    searchOptions.style.display = 'block';
});

fastSearchLink.addEventListener('click', (event) => {
    event.preventDefault();
    mobileMenu.classList.add('fast-search-open');
});
closeBtn.addEventListener('click', () => {
    document.body.style.overflowY = null;
    document.body.classList.remove('open');
    hideSearchOptions();
});

openBtn.addEventListener('click', () => {
    mainHeader.style.position = '';
    document.body.style.overflowY = 'hidden';
    document.body.classList.add('open');
    removeMenuWrapperVisible();
});

function closeMenu() {
    document.body.classList.remove('open');
}

function hideSearchOptions() {
    searchOptions.style.display = 'none';
}
function showSearchOptions() {
    searchOptions.style.display = 'block';
}
function removeMenuWrapperVisible() {
    mobileMenuWrapper.style.visibility = null;
}
