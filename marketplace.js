/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
if(searchBtn) {
    searchBtn.addEventListener('click', () =>{
        search.classList.add('show-search')
    })
}

/* Search hidden */
if(searchClose) {
    searchClose.addEventListener('click', () =>{
        search.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
if(loginBtn) {
    loginBtn.addEventListener('click', () =>{
        login.classList.add('show-login')
    })
}

/* Login hidden */
if(loginClose) {
    loginClose.addEventListener('click', () =>{
        login.classList.remove('show-login')
    })
}
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll("#Ser .box");
    const loadMoreButton = document.getElementById("loadMore");
    let visibleBoxes = 4; // Initially show 8 cards (2 rows of 4 columns)
 
    function showMoreBoxes() {
        for (let i = 0; i < boxes.length; i++) {
            if (i < visibleBoxes) {
                boxes[i].style.display = "flex";
            } else {
                boxes[i].style.display = "none";
            }
        }
 
        // Hide the Load More button if all boxes are shown
        if (visibleBoxes >= boxes.length) {
            loadMoreButton.style.display = "none";
        }
    }
 
    loadMoreButton.addEventListener("click", function() {
        visibleBoxes += 4; // Show 8 more cards when clicking "Load More"
        showMoreBoxes();
    });
 
    // Initial call to show only the first 8 cards
    showMoreBoxes();
 });
 