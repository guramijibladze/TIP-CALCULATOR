const totalMoney = document.getElementById('total-money');
const eachPerson = document.getElementById('each-person');
const select = document.querySelector('select');
const percent = document.getElementById('percent');
const totalAmount = document.getElementById('total-amount');
const eachPersonsMoney = document.getElementById('each-person-money');
const button = document.getElementById('button');



// console.log(animationText.textContent);

isHidden = HTMLElement.hidden;
HTMLElement.hidden = true | false;


    button.addEventListener('click', function(){

        if(totalMoney.value == "" || eachPerson.value == "" || select.value == "აირჩიეთ..."){
            setTimeout(function(){
                document.getElementById('warning').hidden = true;
            }, 7000);

            document.getElementById('warning').hidden = false;
            return false;
        }

        myLoadAnimation();

        setTimeout(function(){
            // console.log(totalMoney.value);
            percent.innerHTML = totalMoney.value * ( select.value / 100 );
            totalAmount.innerHTML = +totalMoney.value + +( totalMoney.value * ( select.value / 100 ));
            eachPersonsMoney.innerHTML = (+totalMoney.value + +( totalMoney.value * ( select.value / 100 ))) / eachPerson.value;
        
            
            document.getElementById('info').hidden = false;
            totalMoney.value = "";
            eachPerson.value = "";
            select.value = "";
        }, 2000);

        setTimeout(function(){
            document.getElementById('info').hidden = true;
        },9000);
    });

    

function myLoadAnimation(){
    const animationText = document.getElementById('text-content');
    document.getElementById('animation').hidden = false;

    const strText = animationText.textContent;
    const splitText = strText.split("");
    animationText.textContent = "";
    
    for(let i = 0; i < splitText.length; i++){
        animationText.innerHTML += "<span>" + splitText[i] + "</span>";
    }
    // console.log(splitText);
    let char = 0;
    let timer = setInterval(onTick, 100);
    animationHide();
    function onTick(){
        // console.log(splitText);
        const span = animationText.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if(char === splitText.length){
            complete(timer);
            return;
        }
    }

    function animationHide(){
        setTimeout(function(){
            document.getElementById('animation').hidden = true;
        },2000);
    }
    // setInterval(onTick, 50);
}

    function  complete(timer){
        clearInterval(timer);
        timer = null;
    }