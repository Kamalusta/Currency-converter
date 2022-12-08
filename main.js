const input1=document.querySelector('.result1 input');
const input2=document.querySelector('.result2 input');
const btnAzn=document.querySelectorAll('.azn');
const btnTl=document.querySelectorAll('.tl');
const btnUsd=document.querySelectorAll('.usd')
const btnRub=document.querySelectorAll('.rub')
const selected1=document.querySelector('.buttons1 .selected');
const selected2=document.querySelector('.buttons2 .selected');
const azn='AZN';
const tl='TRY';
const usd='USD';
const rub='RUB';
var requestURL = 'https://api.exchangerate.host/latest';


fetch(`${requestURL}?places=2&base=${azn}&symbols=USD,AZN,TRY,RUB`)
.then(res=>res.json())
.then(data=>{
    input2.value=data.rates.USD
})

btnTl[0].addEventListener('click',myFunction1);
btnUsd[0].addEventListener('click',myFunction1);
btnRub[0].addEventListener('click',myFunction1);
btnAzn[0].addEventListener('click',myFunction1);

btnTl[1].addEventListener('click',myFunction2);
btnUsd[1].addEventListener('click',myFunction2);
btnRub[1].addEventListener('click',myFunction2);
btnAzn[1].addEventListener('click',myFunction2);

function myFunction1(event)
{
    input1.value=1;
    document.querySelectorAll('.buttons1 button').forEach(item=>{
        item.classList.remove('selected');
    })
    event.target.classList.add('selected');
    fetch(`${requestURL}?places=2&base=${event.target.textContent}&symbols=USD,AZN,TRY,RUB`)
    .then(res=>res.json())
    .then(data=>{
        switch (document.querySelector('.buttons2 .selected').textContent){
            case 'AZN':
                input2.value=data.rates.AZN ;
                break;
            case "USD":
                input2.value=data.rates.USD ;
                break;
            case 'TRY':
                input2.value=data.rates.TRY ;
                break;
            case 'RUB':
                input2.value=data.rates.RUB ;
                break;
        }
        console.log(data)
})
}

function myFunction2(event)
{
    input1.value=1;
    document.querySelectorAll('.buttons2 button').forEach(item=>{
        item.classList.remove('selected');
    })
    event.target.classList.add('selected');
    fetch(`${requestURL}?places=2&base=${document.querySelector('.buttons1 .selected').textContent}&symbols=USD,AZN,TRY,RUB`)
    .then(res=>res.json())
    .then(data=>{
        switch (event.target.textContent){
            case 'AZN':
                input2.value=data.rates.AZN ;
                break;
            case "USD":
                input2.value=data.rates.USD ;
                break;
            case 'TRY':
                input2.value=data.rates.TRY ;
                break;
            case 'RUB':
                input2.value=data.rates.RUB ;
                break;
        }
        console.log(data)
})
}

input1.addEventListener('keyup',(event)=>{
   let amount= event.target.value
    fetch(`${requestURL}?places=2&base=${document.querySelector('.buttons1 .selected').textContent}&symbols=USD,AZN,TRY,RUB`)
    .then(res=>res.json())
    .then(data=>{
        switch (document.querySelector('.buttons2 .selected').textContent){
            case 'AZN':
                input2.value=data.rates.AZN * amount;
                break;
            case "USD":
                input2.value=data.rates.USD * amount;
                break;
            case 'TRY':
                input2.value=data.rates.TRY * amount;
                break;
            case 'RUB':
                input2.value=data.rates.RUB * amount;
                break;
        }
})
})

input2.addEventListener('keyup',(event)=>{
    let amount= event.target.value
     fetch(`${requestURL}?places=2&base=${document.querySelector('.buttons1 .selected').textContent}&symbols=USD,AZN,TRY,RUB`)
     .then(res=>res.json())
     .then(data=>{
         switch (document.querySelector('.buttons2 .selected').textContent){
             case 'AZN':
                 input1.value=amount / data.rates.AZN ;
                 break;
             case "USD":
                 input1.value=amount / data.rates.USD;
                 break;
             case 'TRY':
                 input1.value=amount / data.rates.TRY;
                 break;
             case 'RUB':
                 input1.value=amount / data.rates.RUB;
                 break;
         }
 })
 })