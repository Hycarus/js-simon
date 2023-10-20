(function (){
    const btn = document.querySelector('button');
    const wrapper = document.getElementById('wrapper');
    const memory = 5;
    // const timerEl = document.querySelector('.timer');
    // const clock = setInterval(timer, 1000);
    let randomNumberArray = []
    let userNumber;
    generateRndNumber();
    wrapper.innerHTML = randomNumberArray;
    setTimeout(function timer() {
        console.log('You clicked the button!');
        wrapper.classList.add('d-none');    
    }, 2000);
    btn.addEventListener('click', function(){
        wrapper.innerHTML = '';
    })

    function generateRndNumber(){
        while(randomNumberArray.length < memory){
            let number = getRndInteger(1, 1000);
            if(!randomNumberArray.includes(number)){
                randomNumberArray.push(number);
            }
        }
        console.log(randomNumberArray);
        return randomNumberArray;
    }

    // function timer(){
    //     const d = new Date();
    //     let m = d.getMinutes();
    //     let s = d.getSeconds();
    //     let time = m + ':' + s;
    //     timerEl.innerHTML = time;
    // }
}) ();


