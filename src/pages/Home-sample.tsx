import { useState, useTransition } from 'react'
// import AddComp from '../components/AddComp';

const Home = () => {

  const categories = ["Food", "Shopping", "Rent" , "Travel"];
  localStorage.setItem("category", JSON.stringify(categories));
  const getItems = localStorage.getItem("category");
  console.log(JSON.parse(getItems))

  const transactions = [
    {
      type: "income",
      title: "Teaching",
      category: "Salary",
      note:"Tuition classes",
      date: "12-10-2026",
      amount : 1200,
    },
    {
      type: "expense",
      title: "kurta",
      category: "shopping",
      note:"Shopping at XYZ shop",
      date: "16-10-2026",
      amount : 1000,
    },
    {
      type: "expense",
      title: "Chinese food",
      category: "food",
      note:"Chinese at XYZ Hotel",
      date: "29-10-2026",
      amount : 100,
    }
  ]
  localStorage.setItem("userTransactions",JSON.stringify(transactions));
  const getData = localStorage.getItem("userTransactions")
  console.log(JSON.parse(getData));

  const [balance, setBalance] = useState(10000);
  const [income, setIncome] = useState(5000);
  const [expense, setExpense] = useState(2800);

  const handleTotalIncome = (event: any) => {
    
  }

  return (
    <div>
      <div>
        <div><span>Total Balance : Rs {balance}</span> <span>Add</span></div>
        <AddComp/>
        <div>Total Income : Rs {income}</div>
        <div>Total Expense : Rs {expense}</div>
      </div>
    </div>
  )
}

export default Home