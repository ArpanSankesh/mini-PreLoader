function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentVlaue = 0;

  function updateCounter() {
    if (currentVlaue === 100) {
      return;
    }
    currentVlaue += Math.floor(Math.random() * 10) + 1;

    if (currentVlaue > 100) {
      currentVlaue = 100;
    }

    counterElement.textContent = currentVlaue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}
startLoader();

gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
});

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from("h1", 1.5, {
  delay: 4,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".hero", 2, {
  delay: 4.5,
  y: 400,
  ease: "power4.inOut",
});
