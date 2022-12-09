const input1=document.querySelector('.result1 input');
const input2=document.querySelector('.result2 input');
const btnAzn=document.querySelectorAll('.azn');
const btnTl=document.querySelectorAll('.tl');
const btnUsd=document.querySelectorAll('.usd')
const btnRub=document.querySelectorAll('.rub')
const selected1=document.querySelector('.buttons1 .selected');
const selected2=document.querySelector('.buttons2 .selected');
const index1=document.querySelector('.result1 p');
const index2=document.querySelector('.result2 p')
const azn='AZN';
const tl='TRY';
const usd='USD';
const rub='RUB';
var requestURL = 'https://api.exchangerate.host/latest';


fetch(`${requestURL}?base=${azn}&symbols=USD,AZN,TRY,RUB`)
.then(res=>res.json())
.then(data=>{
    input2.value=(data.rates.USD).toFixed(2);
    index1.textContent= `1 ${azn} = ${(data.rates.USD).toFixed(4)} ${usd}`;
    let range=1/(data.rates.USD);
    index2.textContent= `1 ${usd} = ${range.toFixed(4)} ${azn}`;
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
    document.querySelectorAll('.buttons1 button').forEach(item=>{
        item.classList.remove('selected');
    })
    event.target.classList.add('selected');
    if(event.target.textContent!=document.querySelector('.buttons2 .selected').textContent){
    fetch(`${requestURL}?base=${event.target.textContent}&symbols=USD,AZN,TRY,RUB`)
    .then(res=>res.json())
    .then(data=>{
        switch (document.querySelector('.buttons2 .selected').textContent){
            case 'AZN':
                input2.value=(data.rates.AZN *input1.value).toFixed(2);
                index1.textContent= `1 ${event.target.textContent} = ${(data.rates.AZN).toFixed(4)} AZN`;
                let range=1/(data.rates.AZN);
                index2.textContent= `1 AZN  = ${range.toFixed(4)} ${event.target.textContent}`;
                break;
            case "USD":
                input2.value=(data.rates.USD *input1.value).toFixed(2);
                index1.textContent= `1 ${event.target.textContent} = ${(data.rates.USD).toFixed(4)} USD`;
                let range1=1/(data.rates.USD);
                index2.textContent= `1 USD  = ${range1.toFixed(4)} ${event.target.textContent}`;
                break;
            case 'TRY':
                input2.value=(data.rates.TRY *input1.value).toFixed(2);
                index1.textContent= `1 ${event.target.textContent} = ${(data.rates.TRY).toFixed(4)} TRY`;
                let range2=1/(data.rates.TRY);
                index2.textContent= `1 TRY  = ${range2.toFixed(4)} ${event.target.textContent}`;
                break;
            case 'RUB':
                input2.value=(data.rates.RUB *input1.value).toFixed(2);
                index1.textContent= `1 ${event.target.textContent} = ${(data.rates.RUB).toFixed(4)} RUB`;
                let range3=1/(data.rates.RUB);
                index2.textContent= `1 RUB  = ${range3.toFixed(4)} ${event.target.textContent}`;
                break;
        }
    })
    .catch("Xəta baş vermişdir")
    }
    else{
    input2.value=input1.value;
    index1.textContent = `1 ${event.target.textContent} = 1 ${event.target.textContent}`;
    index2.textContent = index1.textContent
    }
}

function myFunction2(event)
{
    document.querySelectorAll('.buttons2 button').forEach(item=>{
        item.classList.remove('selected');
    })
    event.target.classList.add('selected');
    if(document.querySelector('.buttons1 .selected').textContent!=event.target.textContent){
    fetch(`${requestURL}?base=${document.querySelector('.buttons1 .selected').textContent}&symbols=USD,AZN,TRY,RUB`)
    .then(res=>res.json())
    .then(data=>{
        switch (event.target.textContent){
            case 'AZN':
                input2.value=(data.rates.AZN *input1.value).toFixed(2);
                let range=1/(data.rates.AZN);
                index1.textContent= `1 ${document.querySelector('.buttons1 .selected').textContent} = ${(data.rates.AZN).toFixed(4)} AZN`;
                index2.textContent= `1 AZN = ${range.toFixed(4)} ${document.querySelector('.buttons1 .selected').textContent}`;
                break;
            case "USD":
                input2.value=(data.rates.USD *input1.value).toFixed(2);
                let range1=1/(data.rates.USD);
                index1.textContent= `1 ${document.querySelector('.buttons1 .selected').textContent} = ${(data.rates.USD).toFixed(4)} USD`;
                index2.textContent= `1 USD = ${range1.toFixed(4)} ${document.querySelector('.buttons1 .selected').textContent}`;
                break;
            case 'TRY':
                input2.value=(data.rates.TRY *input1.value).toFixed(2);
                let range2=1/(data.rates.TRY);
                index1.textContent= `1 ${document.querySelector('.buttons1 .selected').textContent} = ${(data.rates.TRY).toFixed(4)} TRY`;
                index2.textContent= `1 TRY = ${range2.toFixed(4)} ${document.querySelector('.buttons1 .selected').textContent}`;                
                break;
            case 'RUB':
                input2.value=(data.rates.RUB *input1.value).toFixed(2);
                let range3=1/(data.rates.RUB);
                index1.textContent= `1 ${document.querySelector('.buttons1 .selected').textContent} = ${(data.rates.RUB).toFixed(4)} RUB`;
                index2.textContent= `1 RUB = ${range3.toFixed(4)} ${document.querySelector('.buttons1 .selected').textContent}`;                
                break;
        }
    })
    .catch("Xəta baş vermişdir")
    }
    else{
        input2.value=input1.value;
        index1.textContent = `1 ${event.target.textContent} = 1 ${event.target.textContent}`;
        index2.textContent = index1.textContent;
    }
}

input1.addEventListener('keyup',(event)=>{
   let amount= event.target.value;
    fetch(`${requestURL}?base=${document.querySelector('.buttons1 .selected').textContent}&symbols=USD,AZN,TRY,RUB`)
    .then(res=>res.json())
    .then(data=>{
        switch (document.querySelector('.buttons2 .selected').textContent){
            case 'AZN':
                input2.value=(data.rates.AZN * amount).toFixed(2);
                break;
            case "USD":
                input2.value=(data.rates.USD * amount).toFixed(2);
                break;
            case 'TRY':
                input2.value=(data.rates.TRY * amount).toFixed(2);
                break;
            case 'RUB':
                input2.value=(data.rates.RUB * amount).toFixed(2);
                break;
        }
    })
    .catch("Xəta baş vermişdir")
})

input2.addEventListener('keyup',(event)=>{
    let amount= event.target.value
     fetch(`${requestURL}?base=${document.querySelector('.buttons1 .selected').textContent}&symbols=USD,AZN,TRY,RUB`)
     .then(res=>res.json())
     .then(data=>{
         switch (document.querySelector('.buttons2 .selected').textContent){
             case 'AZN':
                 input1.value=(amount / data.rates.AZN ).toFixed(2);
                 break;
             case "USD":
                 input1.value=(amount / data.rates.USD).toFixed(2);
                 break;
             case 'TRY':
                 input1.value=(amount / data.rates.TRY).toFixed(2);
                 break;
             case 'RUB':
                 input1.value=(amount / data.rates.RUB).toFixed(2);
                 break;
         }
    })
    .catch("Xəta baş vermişdir")
 })