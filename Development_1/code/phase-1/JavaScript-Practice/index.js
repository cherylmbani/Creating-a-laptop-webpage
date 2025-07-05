const expenses = [
  {
    id: 101,
    description: "Groceries",
    amount: 1200
  },
  {
    id: 102,
    description: "Transport",
    amount: 150
  },
  {
    id: 103,
    description: "Airtime",
    amount: 100
  }
];
 const form=document.getElementById("expense-form");
 const list=document.getElementById("expense-list");
 const expenseDisplay=document.getElementById("expense-display");
 const userDescription=document.getElementById("description");
 const userAmount=document.getElementById("amount");
 const userDisplay=document.getElementById("user-display");
 const totalExpense=document.getElementById("total");
 const newArray=[...expenses]
 
 function displayExpenses(){
    newArray.forEach(expense=>{
        const div=document.createElement("div");
        div.innerHTML=`
        <h2>ID:${expense.id}</h2>
        <p>Description:${expense.description}</p>
        <p>Amount:${expense.amount}
        `;
        expenseDisplay.appendChild(div);

    })

 }
 displayExpenses();
 form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const newExpense={
        id:Date.now(),
        description:userDescription.value,
        amount:parseFloat(userAmount.value)
    };
    newArray.push(newExpense);
    updateTotal();
    // upto here, an object is created.
    // However, to display the object, it must be put in an element and the element appended to the displayExpenses

    const divi=document.createElement("div");
    divi.innerHTML=`
    <h2>ID:${newExpense.id}</h2>
    <p> description:${newExpense.description}</p>
    <p>amount: ${newExpense.amount}</p>
    `;
    expenseDisplay.appendChild(divi);

    
 })
 function updateTotal(){
    totalExpense.textContent=newArray.reduce((accumulator, expense)=>{
        return accumulator + expense.amount;
    }, 0);
 }

