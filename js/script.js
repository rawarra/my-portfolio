// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.className =
        menuIcon.className === 'fa-solid fa-bars'
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';

    navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate')
        }

        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate')
        }

    });

    //sticky header
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// remove the toggle icons when click navbar links scroll 

 menuIcon.className =
        menuIcon.className.remove === 'fa-solid fa-bars'
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';

    navbar.classList.remove('active');

}


// project 
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filterValue = button.dataset.filter;

            projectCards.forEach(card => {

                const category = card.dataset.category;

                if (filterValue === "all" || category === filterValue) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }

            });
        });

    });
