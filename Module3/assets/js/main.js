//Default values
let money1='RUB'
let money2='USD'

//currencyColumn1 onclick

let input1= document.querySelector('#input-1');
let input2= document.querySelector('#input-2');
let p1= document.querySelector('#p-1');
let p2= document.querySelector('#p-2');

let currencyColumn1 = document.querySelector('#currency-column1');
 
let childrenOfArray1 = [...currencyColumn1.children]

currencyColumn1.addEventListener("click", e=>{

    childrenOfArray1.forEach(item => {
        if(item.classList.contains('active')){
            item.classList.remove('active')
        }
     })

      e.target.classList.add("active");
      money1=e.target.innerText
     
      fetch(`https://api.exchangerate.host/latest?base=${money1}&symbols=${money2}`)
      .then(response=>response.json())
      .then(data=>{

        p1.innerText=`1 ${money1} =${(+Object.values(data.rates))} ${money2}`
        p2.innerText=`1 ${money2} =${(1/Object.values(data.rates))} ${money1}`

        let a=Number(input1.value.replace(",",'.'))
        let b=Number(input2.value.replace(",",'.'))

        input1.value=a    
        input2.value=(input1.value*Object.values(data.rates)).toFixed(7);
           
      })

    })

//currencyColumn2 onclick

let currencyColumn2 = document.querySelector('#currency-column2');

let childrenOfArray2 = [...currencyColumn2.children]

currencyColumn2.addEventListener("click", e=>{

    childrenOfArray2.forEach(item => {
        if(item.classList.contains('active')){
            item.classList.remove('active')
        }
     })
      e.target.classList.add("active")
      money2=e.target.innerText
     

      fetch(`https://api.exchangerate.host/latest?base=${money1}&symbols=${money2}`)
      .then(response=>response.json())
      .then(data=>{
    
        p1.innerText=`1 ${money1} =${(+Object.values(data.rates))} ${money2}`
        p2.innerText=`1 ${money2} =${(1/Object.values(data.rates))} ${money1}`

        let a=Number(input1.value.replace(",",'.'))
        let b=Number(input2.value.replace(",",'.'))

        input1.value=a
        input2.value=b

        input2.value=(input1.value*Object.values(data.rates)).toFixed(7);
         
    }
     )

})






