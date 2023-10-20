(function (){
    const btn = document.querySelector('button');
    const wrapper = document.getElementById('wrapper');
    const memory = 5;
    const input = document.getElementById('input');
    const inputNumber = document.getElementById('input-number');
    // const timerEl = document.querySelector('.timer');
    // const clock = setInterval(timer, 1000);
    let randomNumberArray = [];
    let userNumberArray = [];

    generateRndNumber();
    wrapper.innerHTML = randomNumberArray;

    setTimeout(function timer() {
        wrapper.classList.add('d-none');
        input.classList.remove('d-none');
    }, 1000);

    btn.addEventListener('click', function(){
        userNumberArray.push(inputNumber.value);
        console.log(userNumberArray);
        inputNumber.value = '';
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


