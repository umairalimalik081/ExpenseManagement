import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate=new Date(2023, 4, 2);
    const expenseTitle='Car Insurance';
    const expenseAmount=294.67;

    return(
        <div className="expense-item">
            <div className="expense-item__description"> {expenseDate.toISOString()} </div>
            <div>
                <h2> {expenseTitle} </h2>
                <div className="expense-item__price"> ${expenseAmount} </div>
            </div>
        </div>
    );
}
export default ExpenseItem;