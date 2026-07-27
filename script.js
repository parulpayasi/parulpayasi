// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});



// Simple scroll animation effect

const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });


},{threshold:0.2});



cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(30px)";
    card.style.transition="0.6s ease";

    observer.observe(card);

});



// Current year update in footer

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    "© " + new Date().getFullYear() +
    " Parul Payasi | Pharmacy Portfolio";

}
