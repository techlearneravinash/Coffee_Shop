let selectedcard=null;
    function selectCustomerCard(type){
        document.getElementById('customer-type').value=type;
        if(selectedcard!==null){
            selectedcard.classList.remove('selected_card')
        }
            selectedcard=document.getElementById(type+'Card');
            selectedcard.classList.add('selected_card');
    }
    function calculatTotal(){
        const customerType=document.getElementById('customer-type').value;
        const coffeeType=document.getElementById('coffeetype').value;
        const coffeeSize=document.getElementById('coffeesize').value;
        const quantities=parseInt(document.getElementById('quantity').value);
        let price=0;
        switch(coffeeType){
            case'latte':
            switch(coffeeSize){
                case 'small':
                    price=50;
                    break;
                    case 'medium':
                        price=70;
                        break;
                        case'large':
                        price=100;
                        break;
            }
            break;
            case'espresso':
            switch(coffeeSize){
                case 'small':
                    price=70;
                    break;
                    case 'medium':
                        price=90;
                        break;
                        case'large':
                        price=120;
                        break;
        }
        break;
        case'mocha':
            switch(coffeeSize){
                case 'small':
                    price=80;
                    break;
                    case 'medium':
                        price=100;
                        break;
                        case'large':
                        price=180;
                        break;
                        default:
                        break;
    }
}
    let discount=0;
    switch(customerType){
        case'gold':
        if(discount>=40){
            discount=0.3;
        }else{
            discount=0.2;
        }
        break;
        case'silver':
        if(discount>=60){
            discount=0.4;
        }else{
            discount=0.3;
        }
        break;
        case'regular':
        if(discount>=80){
            discount=0.6;
        }else{
            discount=0.4;
        }
        break;
        default:
            break;
    }
    const totalPrice=price*quantities;
    const discountapplied=((totalPrice*discount)/100);
    const finalAmount=totalPrice-discountapplied;
    document.getElementById('totalPrice').textContent=`${totalPrice.toFixed(2)}`;
    document.getElementById('discountApplied').textContent=`${discountapplied.toFixed(2)}`;
    document.getElementById('finalAmount').textContent=`${finalAmount.toFixed(2)}`;
      

    }