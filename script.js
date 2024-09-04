function startLoader(){
    let counterElement = document.querySelector(".counter");
    let currentVlaue = 0;

    function updateCounter(){
        if(currentVlaue === 100){
            return;
        }
        currentVlaue += Math.floor(Math.random()* 10 ) + 1;

        if (currentVlaue > 100){
            currentVlaue = 100;
        }

        counterElement.textContent = currentVlaue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
}
startLoader();