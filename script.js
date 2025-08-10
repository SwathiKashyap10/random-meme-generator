const generateBtn = document.querySelector(".generateBtn");
const meme = document.querySelector(".meme img");

function fetchMeme() {
    generateBtn.innerText = "Loading a meme......"
    fetch("https://meme-api.com/gimme")
        .then((res) => res.json())
        .then((result) => {
            meme.setAttribute("src", result.url);
            generateBtn.innerText = "Generate New Meme";
        });
}

generateBtn.addEventListener("click", fetchMeme);



