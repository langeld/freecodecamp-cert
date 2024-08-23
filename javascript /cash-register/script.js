const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn")
const priceScreen = document.getElementById("price-screen");
const changeDue = document.getElementById("change-due");
const cashDrawerDisplay = document.getElementById("cash-drawer-display")

let price = 9.50;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

priceScreen.textContent = `Total: $${price}`;

cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p> 
                                <p>Pennies: $${cid[0][1]}</p>
                                <p>Nickels: $${cid[1][1]}</p>
                                <p>Dimes: $${cid[2][1]}</p>
                                <p>Quarters: $${cid[3][1]}</p>
                                <p>Ones: $${cid[4][1]}</p>
                                <p>Fives: $${cid[5][1]}</p>
                                <p>Tens: $${cid[6][1]}</p>
                                <p>Twenties: $${cid[7][1]}</p>
                                <p>Hundreds: $${cid[8][1]}</p>
                                `;

const calculatePayment = () => { 
    const currencyUnit = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.10],
        ["QUARTER", 0.25],
        ["ONE", 1.00],
        ["FIVE", 5.00],
        ["TEN", 10.00],
        ["TWENTY", 20.00],
        ["ONE HUNDRED", 100.00]
    ];

    let cashInput = parseFloat(cash.value);
    //let cashInput = 20; 
    let change = cashInput - price;


    if(price > cashInput ) {
        alert("Customer does not have enough money to purchase the item");
        cashInput = "";
        return;
    } else if (price === cashInput) {
        changeDue.innerHTML = "No change due - customer paid with exact cash";
        cashInput = ""; 
        return;      
    } else {
        let changeArray = [];
        cid = cid.reverse();

        for (let i = 0; i < currencyUnit.length; i++) {
            let currencyName = currencyUnit[i][0];
            let currencyValue = currencyUnit[i][1];
            let currencyAvailable = cid[i][1];            
            let currencyAmount = 0;

            while (change >= currencyValue && currencyAvailable > 0) {
                change -= currencyValue;
                change = change.toFixed(2);
                currencyAvailable -= currencyValue;
                currencyAmount += currencyValue;
            }

            if (currencyAmount > 0) {
                changeArray.push([currencyName, currencyAmount]);
            }
        }

        if (change > 0) {
            changeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
        } else {
            changeDue.innerHTML = `Status: OPEN ${changeArray.map(item =>  `${item[0]}: $${item[1]}`).join(' ')}`;
        }
    } 
}

/*
const showChange = () => {
    changeDue.innerHTML = `<p>Status: OPEN</p><p id="one">ONE: $1</p><p>QUARTER: $0.5</p><p>DIME: $0.2</p><p>PENNY: $0.04</p>` 
}
*/

calculatePayment();

purchaseBtn.addEventListener("click", ()=> {    
    //showChange();
    calculatePayment();
})





