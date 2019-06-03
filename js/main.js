window.onload = (event) => {

    ////////////////////////////////////////
    // footer copyright auto update fn
    ////////////////////////////////////////
    const getYear = () => {
        const year = new Date().getFullYear();
        return document.getElementById('year').innerHTML = year;
    };

    getYear();


    ////////////////////////////////////////
    // gallery image button functions
    ////////////////////////////////////////
    const getGalleryImgs = () => {
        const galleryImgs = document.querySelectorAll('.gallery img');
        return Array.from(galleryImgs);
    }

    const toggleBorder = () => {
        const galleryImgs = getGalleryImgs();
        return galleryImgs.map( img => img.classList.toggle('border-fancy')); 
    }

    const imgReverse = () => {
        const galleryImgs = getGalleryImgs();
        const reverseImgs = galleryImgs.reverse();
        return reverseImgs.map(img => document.querySelector('.gallery').appendChild(img))
        
    }
    
    document.getElementById('border-toggle').addEventListener( 'click' || 'keydown', () => toggleBorder());
    document.getElementById('img-reverse').addEventListener( 'click' || 'keydown', () => imgReverse());
}; // end window.onload