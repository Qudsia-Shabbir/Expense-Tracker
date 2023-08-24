// const balance= document.getElementById('balance');
// const money_plus = document.getElementById('moeny-plus');
// const money_minus = document.getElementById('money-minus');
// const list =document.getElementById('list');
// const form = document.getElementById('form');
// const text = document.getElementById('text');
// const amount = document.getElementById('amount');

// const dummyTransactions = [
//     {id:1,text:"flowers", amount:-200},
//     {id:2,text:"coffee", amount:-10},
//     {id:3,text:"choclates", amount:-55},
//     {id:4,text:"flowers", amount:-22}
// ];
// let transactions = dummyTransactions;

// function addTransactionDom(transaction){
//     const sign = transaction[0].amount < 0 ? "-" : "+";
//     const item =document.createElement("li");
//     item.classList.add(
//         transaction[0].amount < 0 ? "minus" : "plus")

// item.innerHTML = `
// ${transaction[0].text} <span>${sign}${Math.abs(transaction[0].amount)}</span>
// <button
//  class = "delete-btn" onclick="">x

// </button>

// `
// ;
// list.appendChild(item);
// }
// //update values function
// function updateValues(){
//     const amounts = transactions.map(transactions => transaction.amount);
//     const total = amounts.reduce((acc,item) => (acc+= item),0).toFixed(2);
//     const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc+= item),0).toFixed(2);
//     const expense = (
//         amounts.filter (item => item < 0).reduce((acc,item) => (acc += item) ,0) *-1
//     ).toFixed(2);

// }


// //init app

// function Init()
// {
//     list.innerHTML= "";
//     transactions.forEach(addTransactionDom);
//     updateValues();
// }
// addTransactionDom(transactions);



const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    { id: 1, text: "flowers", amount: -200 },
    { id: 2, text: "coffee", amount: -10 },
    { id: 3, text: "chocolates", amount: -55 },
    { id: 4, text: "salary", amount: 1000 }
];

let transactions = dummyTransactions;

function addTransactionDom(transaction) {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(
        transaction.amount < 0 ? "minus" : "plus"
    );

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(
        transaction.amount
    )}</span>
        <button class="delete-btn" onclick="removeTransaction(${
            transaction.id
        })">x</button>
    `;

    list.appendChild(item);
}

// Update values function
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `+$${income}`;
    money_minus.innerText = `-$${expense}`;
}

// Remove transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    Init();
    updateValues();
}

// Add new transaction
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === "" || amount.value.trim() === "") {
        alert("Please provide a valid text and amount.");
        return;
    }

    const newTransaction = {
        id: generateID(),
        text: text.value,
        amount: +amount.value
    };

    transactions.push(newTransaction);
    addTransactionDom(newTransaction);
    updateValues();

    text.value = "";
    amount.value = "";
}

// Generate a random ID
function generateID() {
    return Math.floor(Math.random() * 100000);
}

// Initialize the app
function Init() {
    list.innerHTML = "";
    transactions.forEach(addTransactionDom);
    updateValues();
}

// Event listeners
form.addEventListener("submit", addTransaction);

// Initial call to initialize the app
Init();
