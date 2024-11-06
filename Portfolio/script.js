const sideMenu = document.querySelector("#sideMenu");
const navbar = document.querySelector("nav");
const navlinks = document.querySelector("nav ul");
function openMenu() {
    sideMenu.style.transform = "translate(-16rem)"
}

function closeMenu() {
    sideMenu.style.transform = "translate(16rem)"
}


window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navbar.classList.remove('bg-white','shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
    else {
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20')
        navbar.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
})

//------------------darkmode and light mode-------////

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
    matchMedia('(prefers-color-scheme:dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    }
    else {
        localStorage.theme = 'light';
    }
}


  

