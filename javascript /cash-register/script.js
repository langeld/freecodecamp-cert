const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn")

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


purchaseBtn.addEventListener("click", ()=> {
    console.log(cash.value);
})

