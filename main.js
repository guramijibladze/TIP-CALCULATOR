const totalMoney = document.getElementById('total-money');
const eachPerson = document.getElementById('each-person');
const select = document.querySelector('select');
const percent = document.getElementById('percent');
const totalAmount = document.getElementById('total-amount');
const eachPersonsMoney = document.getElementById('each-person-money');
const button = document.getElementById('button');

isHidden = HTMLElement.hidden;
HTMLElement.hidden = true | false;


    button.addEventListener('click', function(){
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


// function myFunction(){
//     console.log('gura');
// }

    