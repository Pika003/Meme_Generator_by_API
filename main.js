const generateMemeBtn = document.querySelector(
    ".memeGenarator .Genarator-meme-btn"
);
const memeImage = document.querySelector(".memeGenarator img");
const memeTitle = document.querySelector(".memeGenarator .meme-title");
const memeAuthor = document.querySelector(".memeGenarator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
}

const generateMeme = ()=> {
    fetch("https://meme-api.com/gimme/ProgrammerHumor")
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
        });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();