const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn")
const priceScreen = document.getElementById("price-screen");

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

const calculateCash = () => {
    
}

purchaseBtn.addEventListener("click", ()=> {
    console.log(cash.value);
    console.log(cid[1]);
})

