const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn")
const priceScreen = document.getElementById("price-screen");
const changeDue = document.getElementById("change-due");
const cashDrawerDisplay = document.getElementById("cash-drawer-display")

let price = 9.99;
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

const calculateCash = () => {
    return 
}

const showChange = () => {
    changeDue.innerHTML = `<p>Status: OPEN</p><p id="one">ONE: $1</p><p>QUARTER: $0.5</p><p>DIME: $0.2</p><p>PENNY: $0.04</p>` 
}

purchaseBtn.addEventListener("click", ()=> {   
    showChange();
    calculateCash();
})

