import React from 'react'

function OrderConfirmation() {

    const ordertFromLocalStorage = JSON.parse(localStorage.getItem('order'))
    
    return (
        <div>
            <p>{ordertFromLocalStorage.pizzaName}</p>
            <p>{ordertFromLocalStorage.adress}</p>
            <p>{ordertFromLocalStorage.date}</p>
            <p>{ordertFromLocalStorage.epost}</p>
            <p>{ordertFromLocalStorage.firstName}</p>
            <p>{ordertFromLocalStorage.ingredients}</p>
            <p>{ordertFromLocalStorage.phone}</p>
            <p>{ordertFromLocalStorage.pizzaPrice}</p>
            <p>{ordertFromLocalStorage.postNumber}</p>
            <p>{ordertFromLocalStorage.quantity}</p>
            <p>{ordertFromLocalStorage.sureName}</p>
        </div>
    )
}

export default OrderConfirmation
