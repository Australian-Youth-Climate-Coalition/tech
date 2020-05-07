const section = document.getElementsByClassName("col")[0];

const emojiArray = ["📟", "💥", "📲", "📣", "🚀", "🍾", "🚨", "💾", "💻"];
const fontSizeArray = [2, 4, 4, 5, 6, 9];

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
    emojiSticker.style.top = `${pos[0]}px`;
    emojiSticker.style.left = `${pos[1]}px`;

    setTimeout(function () {
      requestAnimationFrame(() => {
        emojiSticker.classList.remove("hidden");
      });
    }, 1500);
  });
}
placeEmoji();
