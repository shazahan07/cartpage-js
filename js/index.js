 function updateqty(product, price, isIncres){
    const qtyFeild =document.getElementById(product +'-number');
    let qtyFeildValue = qtyFeild.value;
     let qtyUpdate = parseFloat(qtyFeildValue);
     if (isIncres==true) {
        qtyFeildValue = qtyUpdate+1;  
     } else if(qtyUpdate>0){
         qtyFeildValue = qtyUpdate-1;
     }
    let finalValue =qtyFeild.value = qtyFeildValue;
    let priceValue = document.getElementById(product +'-price');
    let totalPrice = finalValue * price;
    priceValue.innerText = totalPrice
    updateValue();

 }
  function getInput(product){
   let phoneInputField = document.getElementById(product+'-number');
   let phoneInputValue = parseInt(phoneInputField.value);
   return phoneInputValue;
  }
 

 function updateValue(){
   
    let finalPhoneValue = getInput('phone') * 1000;
    let finalCaseValue =getInput('case') * 50;
    
    let subTotal = finalCaseValue+finalPhoneValue;
    let taxTotal = subTotal / 10;
    let grandTotal= subTotal +taxTotal
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-total').innerText=taxTotal;
    document.getElementById('total').innerText=grandTotal;
    
    
 }
 

document.getElementById('phone-plus').addEventListener('click', function(){
    updateqty('phone',1000,true);
    


 })
 document.getElementById('phone-minus').addEventListener('click', function(){
    updateqty('phone',1000,false);
   
})

document.getElementById('plus').addEventListener('click',function(){
   updateqty('case',50,true);
})
document.getElementById('minus').addEventListener('click',function(){
   updateqty('case',50,false);
})