import { useState } from "react";
import "./index.css";
import ExpenseList from "./expense-tracker/expense folder/ExpenseList";
import ExpenseFilter from "./expense-tracker/expense folder/ExpenseFilter";
import ExpenseForm from "./expense-tracker/expense folder/ExpenseForm";
import categories from "./expense-tracker/Categories";

function App() {
  const [todd, setTodd] = useState([
    { id: 1, description: "aa", amount: 10, category: "Utilities" },
    { id: 2, description: "ab", amount: 20, category: "Utilities" },
    { id: 3, description: "ba", amount: 25, category: "Groceries" },
    { id: 4, description: "bb", amount: 30, category: "Utilities" },
  ]);
  const [jeff, setJeff] = useState("");

  const visibleExpenses = jeff ? todd.filter((e) => e.category === jeff) : todd;

  if (todd.length === 0)
    return (
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) =>
            setTodd([...todd, { ...data, id: todd.length + 1 }])
          }
        />
      </div>
    );
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) =>
            setTodd([...todd, { ...data, id: todd.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setJeff(category)} />
      </div>
      <ExpenseList
        expense={visibleExpenses}
        onDelete={(id) => setTodd(todd.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
