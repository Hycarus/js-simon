(function (){
    const btn = document.getElementById('start');
    const btn2 = document.getElementById('reset');
    const wrapper = document.getElementById('wrapper');
    const memory = 5;
    const input = document.getElementById('input');
    const inputNumber = document.querySelectorAll('input');
    // const timerEl = document.querySelector('.timer');
    // const clock = setInterval(timer, 1000);
    let randomNumberArray = [];
    let userNumberArray = [];
    let checkArray = [];
    generateRndNumber();
    wrapper.innerHTML = randomNumberArray;

    setTimeout(function timer() {
        wrapper.classList.add('d-none');
        input.classList.remove('d-none');
    }, 1000);

    btn.addEventListener('click', function(){
        for(let i = 0; i < inputNumber.length; i++){
            if(!isNaN(parseInt(inputNumber[i].value))){
                userNumberArray.push(parseInt(inputNumber[i].value));
            }
            if(randomNumberArray[i] === userNumberArray[i]){
                checkArray.push(userNumberArray[i]);
            }
        }
        console.log(userNumberArray);
        btn.classList.add('d-none');
        input.classList.add('d-none');
        btn2.classList.remove('d-none');
    })

    btn2.addEventListener('click', function(){
        btn.classList.remove('d-none');
        input.classList.remove('d-none');
        btn2.classList.add('d-none');
        inputNumber.value = '';
    })  
    
    console.log(randomNumberArray);
    // function check(){
        
    //     for(let i = 0; i < randomNumberArray.length; i++){
    //         if(userNumberArray.includes(randomNumberArray[i])){
    //             checkArray.push(userNumberArray);
    //             console.log(checkArray);
    //             console.log('you did it');
    //         } else{
    //             console.log('suca');
    //         }
    //     }
        
    // }

    function generateRndNumber(){
        while(randomNumberArray.length < memory){
            let number = getRndInteger(1, 1000);
            if(!randomNumberArray.includes(number)){
                randomNumberArray.push(parseInt(number));
            }
        }
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


