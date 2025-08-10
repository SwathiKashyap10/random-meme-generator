const generateBtn = document.querySelector(".generateBtn");
const meme = document.querySelector(".meme img");
const screenshotBtn = document.querySelector(".screenshotBtn");

// Set crossorigin before setting src
meme.crossOrigin = "anonymous";

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

screenshotBtn.addEventListener("click", () => {
    html2canvas(meme, { useCORS: true }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "meme-screenshot.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});
