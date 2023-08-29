// Get all vlog cards
// Get elements you want to interact with
const featuredVlog = document.querySelector('.featured-vlog');
const latestVlogs = document.querySelector('.latest-vlogs');
const vlogCards = document.querySelectorAll('.vlog-card');

// Add click event to featured vlog
featuredVlog.addEventListener('click', () => {
    // Toggle a class to expand the featured vlog
    featuredVlog.classList.toggle('expanded');
});

// Add click event to each vlog card in the latest vlogs section
vlogCards.forEach((vlogCard) => {
    vlogCard.addEventListener('click', () => {
        // Toggle a class to display more information
        vlogCard.classList.toggle('expanded');
    });
});
// Get elements you want to interact with
const featuredVlog = document.querySelector('.featured-vlog');
const latestVlogs = document.querySelector('.latest-vlogs');
const vlogCards = document.querySelectorAll('.vlog-card');
const loadMoreButton = document.querySelector('.load-more-button');

// Simulate fetching more vlogs from a server
const fetchMoreVlogs = () => {
    // You can replace this with actual API requests
    const newVlogs = [
        { title: "New Vlog 1", description: "Description of new vlog 1", image: "cover-fv.jpg" },
        { title: "New Vlog 2", description: "Description of new vlog 2", image: "hero-image.jpg" },
        // Add more vlogs as needed
    ];

    return newVlogs;
};

// Add click event to featured vlog
featuredVlog.addEventListener('click', () => {
    featuredVlog.classList.toggle('expanded');
});

// Add click event to each vlog card in the latest vlogs section
vlogCards.forEach((vlogCard) => {
    vlogCard.addEventListener('click', () => {
        vlogCard.classList.toggle('expanded');
    });
});

// Load more vlogs when the "Load More" button is clicked
loadMoreButton.addEventListener('click', () => {
    const newVlogs = fetchMoreVlogs();
    
    newVlogs.forEach((vlog) => {
        const newVlogCard = document.createElement('article');
        newVlogCard.classList.add('vlog-card');
        newVlogCard.innerHTML = `
            <img src="${hero-image.jpg}" alt="${vlog.title}">
            <h3>${vlog.title}</h3>
            <p>${vlog.description}</p>
            <a href="#" class="watch-button">Watch Now</a>
        `;
        
        latestVlogs.appendChild(newVlogCard);
        vlogCards.push(newVlogCard);
    });
});
// ... (previous code)

// Function to open video page
const openVideoPage = (title, description, videoUrl) => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="css/styles.css">
            <title>${title}</title>
        </head>
        <body>
            <header>
                <h1>${title}</h1>
            </header>
            <section class="video-section">
                <div class="video-container">
                    <video controls>
                        <source src="${image.jpg}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="description">
                    <h2>Description</h2>
                    <p>${description}</p>
                </div>
            </section>
            <footer>
                <p>&copy; ${new Date().getFullYear()} Amazing Vlog. All rights reserved.</p>
            </footer>
        </body>
        </html>
    `);
};

// Add click event to "Watch Now" buttons
const watchButtons = document.querySelectorAll('.watch-button');
watchButtons.forEach((watchButton, index) => {
    watchButton.addEventListener('click', () => {
        const vlogCard = vlogCards[index];
        const title = vlogCard.querySelector('h3').textContent;
        const description = vlogCard.querySelector('p').textContent;
        const videoUrl = "your-video-url.mp4"; // Replace with actual video URL
        openVideoPage(title, description, videoUrl);
    });
});
// ... (previous code)

// Function to open video page
const openVideoPage = (title, description, videoUrl) => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="css/styles.css">
            <title>${title}</title>
        </head>
        <body>
            <header>
                <h1>${title}</h1>
            </header>
            <section class="video-section">
                <div class="video-container">
                    <video controls>
                        <source src="${videoUrl}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="description">
                    <h2>Description</h2>
                    <p>${description}</p>
                </div>
            </section>
            <footer>
                <p>&copy; ${new Date().getFullYear()} Amazing Vlog. All rights reserved.</p>
            </footer>
        </body>
        </html>
    `);
};

// Add click event to "Watch Now" buttons
watchButtons.forEach((watchButton, index) => {
    watchButton.addEventListener('click', () => {
        const vlogCard = vlogCards[index];
        const title = vlogCard.querySelector('h3').textContent;
        const description = vlogCard.querySelector('p').textContent;
        const videoUrl = "your-video-url.mp4"; // Replace with actual video URL
        openVideoPage(title, description, videoUrl);
    });
});
