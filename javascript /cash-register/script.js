const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn")
const priceScreen = document.getElementById("price-screen");
const changeDue = document.getElementById("change-due");
const cashDrawerDisplay = document.getElementById("cash-drawer-display")

let price = 9.99;
// let cid = [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100]
// ];
let cid = {
    'PENNY': 1.01,
    'NICKEL': 2.05,
    'DIME': 3.1,
    'QUARTER': 4.25,
    'ONE': 90,
    'FIVE': 55,
    'TEN': 20,
    'TWENTY': 60,
    'ONE HUNDRED': 100
}

priceScreen.textContent = `Total: $${price}`;

cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p> 
                                <p>Pennies: $${cid.PENNY}</p>
                                <p>Nickels: $${cid.NICKEL}</p>
                                <p>Dimes: $${cid.DIME}</p>
                                <p>Quarters: $${cid.QUARTER}</p>
                                <p>Ones: $${cid.ONE}</p>
                                <p>Fives: $${cid.FIVE}</p>
                                <p>Tens: $${cid.TEN}</p>
                                <p>Twenties: $${cid.TWENTY}</p>
                                <p>Hundreds: $${cid["ONE HUNDRED"]}</p>
                                `;

const calculateCash = () => {

    let customerCash = Number(cash.value);

    if(price > cash.value ) {
        alert("Customer does not have enough money to purchase the item");
        cash.value = "";
        return;
    } else if (price === customerCash) {
        changeDue.innerHTML = "No change due - customer paid with exact cash";      
    }
}

const showChange = () => {
    changeDue.innerHTML = `<p>Status: OPEN</p><p id="one">ONE: $1</p><p>QUARTER: $0.5</p><p>DIME: $0.2</p><p>PENNY: $0.04</p>` 
}

purchaseBtn.addEventListener("click", ()=> {   
    console.log(cash.value);
    showChange();
    calculateCash();
})





