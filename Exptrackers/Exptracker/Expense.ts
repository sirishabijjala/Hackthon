interface Explist {
    id: number;
    name: string;
    amount: string;
    category: string;
    date: string;
    completed: boolean;
}
class ExpenseApp {
    expenselist: Explist[];
    nameInputHTML: HTMLInputElement;
    amountInputHTML: HTMLInputElement;
    categoryInputHTML: HTMLInputElement;
    dateInputHTML: HTMLInputElement;
    expItemsHTML: HTMLUListElement;

constructor() {
this.expenselist = [];
this.nameInputHTML = document.getElementById("name") as HTMLInputElement;
this.amountInputHTML = document.getElementById("amount") as HTMLInputElement;
    this.categoryInputHTML = document.getElementById("category") as HTMLInputElement;
    this.dateInputHTML = document.getElementById("date") as HTMLInputElement;
    this.expItemsHTML = document.getElementById("Expenseitems") as HTMLUListElement;
    }

addNewName(sname: string, amounts: string, categorys: string, dates: string) {
    const newExp: Explist = {
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
    }
removeExps(id: number) {
        this.expenselist = this.expenselist.filter((el) => el.id !== id);
        this.renderExps();
    }
renderExps() {
        this.expItemsHTML.innerHTML = '';
        this.expenselist.forEach((expenses: Explist) => {
            this.expItemsHTML.innerHTML += `
                <li class="${expenses.completed ? 'completed' : 'notcompleted'}">
                    ${expenses.name}  ${expenses.amount}  ${expenses.category}  ${expenses.date}
                    <button onclick="expapp.removeExps(${expenses.id})">Delete</button>
                </li>
            `;
        });
    }
}

const expapp = new ExpenseApp();
