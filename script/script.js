const largePhoto = document.querySelector('[data-typ-obrazu="cel"]');
const titlePhoto = document.querySelector('[data-typ-obrazu="tytuł"]');
let frame = document.querySelector('[data-typ-obrazu="ramka"]');
const switchPhoto = document.querySelector('[data-typ-obrazu="wyzwalacz"]');
const classHidden = "hidden-image";
const keyEsc = 27;
const tinyImage = 'tiny-image';

function changePhoto(photoUrl, title) {
    largePhoto.setAttribute("src", photoUrl);
    titlePhoto.textContent = title;
}

changePhoto("assets/images/zwierzak4.jpg", "Chwila wytchnienia");

function getUrl(photo) {
    return photo.getAttribute("data-url-obrazu");
}

function getTitle(photo) {
    return photo.getAttribute("data-tytuł-obrazu");
}

function hideImage() {
    document.body.classList.add(classHidden);
}

function showImage() {
    document.body.classList.remove(classHidden);
    frame.classList.add(tinyImage);
    setTimeout(() => {
        frame.classList.remove(tinyImage);
    }, 500);
}

function useKey() {
    document.body.addEventListener('keyup', (e) => {
        e.preventDefault();
        console.log(e.keyCode);
        if (e.keyCode === keyEsc) {
            hideImage();
        }
    })
}

function setNewPhoto(photo) {
    changePhoto(getUrl(photo), getTitle(photo));
}

function eventPhoto(switchPhoto) {
    switchPhoto.addEventListener("click", (e) => {
        e.preventDefault();
        setNewPhoto(switchPhoto);
        showImage();
    });
}

function photoArray() {
    let photos = document.querySelectorAll('[data-typ-obrazu="wyzwalacz"]');
    Array.from(photos);
    return photos;
}

function runEvents() {
    let photos = photoArray();
    photos.forEach(eventPhoto);
    useKey();
}

runEvents();







/*
let ofLoop;
for(value of switchPhoto){
    value.addEventListener("click", changePhoto);
    ofLoop = value;
}
*/