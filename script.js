const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');

btn.addEventListener("click", ()=> {
    search.classList.toggle("active");
    input.focus();
});

//Google Search Functionality
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

//When button is clicked
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        input.value = '';
    }
});

//When Enter key is pressed
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
            input.value = '';
        };
    }
});