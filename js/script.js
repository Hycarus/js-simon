(function (){
    const btn = document.getElementById('invia');
    const btnReset = document.getElementById('reset');
    const wrapper = document.getElementById('wrapper');
    const memory = 5;
    const input = document.getElementById('input');
    const inputNumber = document.querySelectorAll('input');
    const result = document.querySelector('.result')
    const btnStart = document.getElementById('start');
    const timerEl = document.querySelector('.timer');
    let randomNumberArray = [];
    let userNumberArray = [];
    let checkArray = [];
    btnStart.addEventListener('click', function(){
        timerEl.classList.remove('d-none');
        timer30();
        btnStart.classList.add('d-none');
        btn.classList.remove('d-none');
        generateRndNumber();
        console.log(randomNumberArray);
        wrapper.classList.add('fw-bold', 'fs-4', 'text-success');
        wrapper.innerHTML = randomNumberArray.join(', ');
        setTimeout(function timer() {
            wrapper.classList.add('d-none');
            input.classList.remove('d-none');
            timerEl.classList.add('d-none');
        }, 30000);
    })
    
    btn.addEventListener('click', function(){
        let counter = 0
        for(let i = 0; i < inputNumber.length; i++){
            if(!isNaN(parseInt(inputNumber[i].value))){
                userNumberArray.push(parseInt(inputNumber[i].value));
            }
            if(randomNumberArray[i] === userNumberArray[i]){
                checkArray.push(userNumberArray[i]);
                counter++;
            }
        }
        if(checkArray.length === memory){
            result.classList.remove('d-none');
            result.innerHTML = `Hai vinto! Questi sono i numeri che ti sei ricordato: ${checkArray.join(', ')}`;
            result.classList.add('fs-4', 'fw-bold', 'text-success');

        } else{
            result.classList.remove('d-none');
            result.innerHTML = `Hai perso! Ti sei ricordato solo ${counter} numeri: ${checkArray.join(', ')}`
            result.classList.add('fs-4', 'fw-bold', 'text-success');
        }
        console.log(userNumberArray);
        btn.classList.add('d-none');
        input.classList.add('d-none');
        btnReset.classList.remove('d-none');
    })

    btnReset.addEventListener('click', function(){
        btnStart.classList.remove('d-none');
        btnReset.classList.add('d-none');
        // reset caselle di input
        for(let i = 0; i < inputNumber.length; i++){
            inputNumber[i].value = '';
        }
        randomNumberArray = [];
        userNumberArray = [];
        checkArray = [];
        result.classList.add('d-none');
        wrapper.classList.remove('fw-bold', 'fs-4', 'text-success');
        wrapper.innerHTML = '';
        wrapper.classList.remove('d-none');
    })  
    
    

    function generateRndNumber(){
        while(randomNumberArray.length < memory){
            let number = getRndInteger(1, 10);
            if(!randomNumberArray.includes(number)){
                randomNumberArray.push(parseInt(number));
            }
        }
        return randomNumberArray;
    }

    function timer30(){
        let sec = 29;
        let timer = setInterval(function(){
            timerEl.innerHTML = sec + 's';
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
}) ();


