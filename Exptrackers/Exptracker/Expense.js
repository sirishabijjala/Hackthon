var ExpenseApp = /** @class */ (function () {
    function ExpenseApp() {
        this.expenselist = [];
        this.nameInputHTML = document.getElementById("name");
        this.amountInputHTML = document.getElementById("amount");
        this.categoryInputHTML = document.getElementById("category");
        this.dateInputHTML = document.getElementById("date");
        this.expItemsHTML = document.getElementById("Expenseitems");
    }
    ExpenseApp.prototype.addNewName = function (sname, amounts, categorys, dates) {
        var newExp = {
            id: new Date().getTime(),
            name: sname,
            amount: amounts,
            category: categorys,
            date: dates,
            completed: false
        };
        this.expenselist.push(newExp);
        this.renderExps();
        this.nameInputHTML.value = '';
        this.amountInputHTML.value = '';
        this.categoryInputHTML.value = '';
        this.dateInputHTML.value = '';
    };
    ExpenseApp.prototype.removeExps = function (id) {
        this.expenselist = this.expenselist.filter(function (el) { return el.id !== id; });
        this.renderExps();
    };
    ExpenseApp.prototype.renderExps = function () {
        var _this = this;
        this.expItemsHTML.innerHTML = '';
        this.expenselist.forEach(function (expenses) {
            _this.expItemsHTML.innerHTML += "\n                <li class=\"".concat(expenses.completed ? 'completed' : 'notcompleted', "\">\n                    ").concat(expenses.name, "  ").concat(expenses.amount, "  ").concat(expenses.category, "  ").concat(expenses.date, "\n                    <button onclick=\"expapp.removeExps(").concat(expenses.id, ")\">Delete</button>\n                </li>\n            ");
        });
    };
    return ExpenseApp;
}());
var expapp = new ExpenseApp();
