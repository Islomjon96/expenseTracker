document.addEventListener("DOMContentLoaded", function() {
  // Аналог $(document).ready(function(){
  const balance = document.getElementById("balanceAmount");
  const incomeEl = document.getElementById("incomeAmount");
  const expenseEl = document.getElementById("expenseAmount");
  const transactionForm = document.getElementById("transactionForm");
  const transactionText = document.getElementById("transactionText");
  const transactionAmount = document.getElementById("transactionAmount");
  const historyContainer = document.getElementById("historyContainer");

  const localStorageTransactions = JSON.parse(
    localStorage.getItem("transactions")
  );

  let historyTransactions =
    localStorage.getItem("transactions") !== null
      ? localStorageTransactions
      : [];

  let transactionID = 1;

  // Добавление транзакции, показ на UI и обновление значений баланса, дохода и расхода
  function addTransaction(e) {
    e.preventDefault();
    if (transactionText.value === "" || transactionAmount.value === "") {
      alert(`Поле Текст или Сумма пусто`);
    } else {
      const transaction = {
        id: transactionID,
        text: transactionText.value,
        amount: parseInt(transactionAmount.value)
      };
      transactionID += 1;

      historyTransactions.push(transaction);

      addingTransactionDOM(transaction);

      updateValues();

      updateLocalStorage();

      transactionText.value = "";
      transactionAmount.value = "";
    }
  }

  // Добавление транкзакции в DOM
  function addingTransactionDOM(transaction) {
    // Получение знака введенной суммы
    const sign = transaction.amount < 0 ? "-" : "+";

    const item = document.createElement("div");

    item.classList.add(
      "history-value",
      transaction.amount < 0 ? "expense" : "income"
    );

    item.setAttribute("itemID", transaction.id);

    item.innerHTML = `
            <button class="history-delete">X</button>
            <p class="history-text">${transaction.text}</p>
            <p class="history-amount">${sign}${Math.abs(
      transaction.amount
    )}&#8381;</p>
    `;

    historyContainer.appendChild(item);
  }

  // Обновление баланса, дохода и расхода
  function updateValues() {
    const amounts =
      historyTransactions != false
        ? historyTransactions.map(transaction => transaction.amount)
        : "00.00";

    if (amounts != false) {
      const total = amounts.reduce((acc, item) => (acc += item)).toFixed(2);

      const income =
        amounts.filter(item => item > 0) != false
          ? amounts
              .filter(item => item > 0)
              .reduce((acc, item) => acc + item)
              .toFixed(2)
          : "00.00";

      const expense =
        amounts.filter(item => item < 0) != false
          ? (
              amounts
                .filter(item => item < 0)
                .reduce((acc, item) => (acc += item)) * -1
            ).toFixed(2)
          : "00.00";

      incomeEl.innerText = `${income}`;
      expenseEl.innerText = `${expense}`;
      balance.innerText = `${total}`;
    } else {
      incomeEl.innerText = "00.00";
      expenseEl.innerText = "00.00";
      balance.innerText = "00.00";
    }
  }

  // Удаление транзакции
  historyContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("history-delete")) {
      const transactionID = e.target.parentElement.getAttribute("itemid");
      historyTransactions = historyTransactions.filter(
        transaction => transaction.id != parseInt(transactionID)
      );
      init();
      updateLocalStorage();
    }
  });

  transactionForm.addEventListener("submit", addTransaction);

  // Обновление транзакций в локальном хранилище
  function updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(historyTransactions));
  }

  // Запуск приложения
  function init() {
    historyContainer.innerHTML = "";

    historyTransactions.forEach(addingTransactionDOM);
    updateValues();
  }

  init();
});
