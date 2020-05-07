const section = document.getElementById("emoji-container");

const emojiArray = ["📟", "💥", "📲", "📣", "🚀", "🍾", "🚨", "💾", "💻"];
const fontSizeArray = [3, 3, 3, 2, 2, 3];

function getRandomPosition(element) {
  const x = section.offsetHeight - element.clientHeight;
  const y = section.offsetWidth - element.clientWidth;
  const randomX = Math.floor(Math.random() * x);
  const randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

function placeEmoji() {
  emojiArray.forEach((element) => {
    const randomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
    const emojiSticker = document.createElement("p");
    emojiSticker.textContent = randomEmoji;
    emojiSticker.style.fontSize = `${fontSizeArray[Math.floor(Math.random() * fontSizeArray.length)]}rem`;
    emojiSticker.classList.add("sticker", "hidden");
    section.appendChild(emojiSticker);
    const pos = getRandomPosition(emojiSticker);
    // emojiSticker.style.bottom = `${pos[0]}px`;
    emojiSticker.style.left = `${pos[1]}px`;

    setTimeout(function () {
      requestAnimationFrame(() => {
        emojiSticker.classList.remove("hidden");
      });
    }, 1500);
  });
}
placeEmoji();
