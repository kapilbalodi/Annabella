const text = `Happy Promise Day Annabella ❤️

Here’s a 100-word Promise Day note for Annabella 💖

---

**Dear Annabella,**

On this Promise Day, I want to make a promise from my heart. I promise to always respect you, 
support your dreams, and stand beside you in every situation. I promise to listen to you, 
understand you, and value your feelings. No matter how tough the days get, I will choose patience, honesty, and kindness with you.
I promise to protect your smile, celebrate your happiness, and never take you for granted. 
You mean more to me than words can explain. Today and always, I promise to be someone you can trust, rely on, and feel safe with. ❤️

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
