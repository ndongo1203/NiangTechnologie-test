const teachers = [
    {
        name: "Mark Wilson",
        description: "I love Teaching",
        image: "images/author-image1.jpg",
        socials: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            instagram: "https://instagram.com"
        }
    },
    {
        name: "Catherine",
        description: "Education is the key",
        image: "images/author-image2.jpg",
        socials: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com"
        }
    },
    {
        name: "Jessie Ca",
        description: "I like Online Courses",
        image: "images/author-image3.jpg",
        socials: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com"
        }
    },
    {
        name: "Andrew Bert",
        description: "Learning is fun",
        image: "images/author-image4.jpg",
        socials: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com"
        }
    }
];

function initializeCards() {
    const container = document.querySelector('.cards-container');

    teachers.forEach(teacher => {

        const card = document.createElement('div');
        card.classList.add('card');

        // Contenu du carte
        card.innerHTML = `
            <div class="card-image">
                <img src="${teacher.image}" alt="${teacher.name}">
            </div>
            <div class="card-content">
                <h4>${teacher.name}</h4>
                <p>${teacher.description}</p>
                <div class="icons">
                    <a href="${teacher.socials.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="${teacher.socials.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="${teacher.socials.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="${teacher.socials.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initializeCards);
