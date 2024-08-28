const form = document.querySelector('form');
const transactionName = document.getElementById('transaction-name');
const transactionAmount = document.getElementById('transaction-amount');
const transactionList = document.getElementById('transaction-list-ul');

let balance = 0, income = 0, expense = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const transaction = document.createElement('li');
    transaction.classList.add('transaction-list-item');
    if (transactionAmount.value < 0) {
        transaction.classList.add('negative');
        expense += parseInt(transactionAmount.value);
    } else {
        transaction.classList.add('positive');
        income +=  parseInt(transactionAmount.value);
    }
    transaction.innerHTML = `<span><strong>${transactionName.value}</strong></span><br/><span>\$${Math.abs(transactionAmount.value)}</span>`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        transaction.remove();
    });
    transaction.appendChild(deleteButton);

    transactionList.appendChild(transaction);
    transactionName.value = transactionAmount.value = '';

    balance = income + expense;

    console.log(balance, income, expense);
    document.getElementById('balance').textContent = `Balance: $${balance}`;
    document.getElementById('income').textContent = `Income: $${income}`;
    document.getElementById('expenses').textContent = `Expenses: $${expense}`;
});
