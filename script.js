const text = `Happy Promise Day Annabella ❤️

I promise to always respect you,
support you in every situation,
protect your smile,
and stand by you no matter what.

You are very special to me 💖`;

let index = 0;
let typingInterval;

function startTyping() {
  const typingText = document.getElementById("typingText");
  const sound = document.getElementById("typingSound");

  typingText.innerHTML = "";
  index = 0;

  sound.loop = true;
  sound.play();

  typingInterval = setInterval(() => {
    if (index < text.length) {
      typingText.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
      sound.pause();
      sound.currentTime = 0;
    }
  }, 50); // typing speed
}
