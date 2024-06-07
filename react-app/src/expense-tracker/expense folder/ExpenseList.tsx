import React from "react";

interface Expense {
  id: number;
  amount: number;
  description: string;
  category: string;
}

interface Props {
  expense: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expense, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <td>Description</td>
          <td>Amount</td>
          <td>Category</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {expense.map((val) => (
          <tr key={val.id}>
            <td>{val.description}</td>
            <td>{val.amount}</td>
            <td>{val.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(val.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expense
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
