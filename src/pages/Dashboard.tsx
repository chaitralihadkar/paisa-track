import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [Transctions, setTransactions] = useState<number>(0);

  return (
    <div className="h-full sm:h-screen md:h-full flex flex-col gap-2 sm:gap-3 lg:gap-4 2xl:gap-5 justify-between px-2 py-2 md:px-4 md:py-4 xl:px-6 xl:py-6 2xl:px-8 2xl:py-8">
      {/* div contianing other all divs */}

      <div className="flex flex-col gap-3">
        {/* div containing intro and description */}
        <h1 className="font-bold text-blue-950 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Where Did All Your Money Go?
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Wondering where your money goes? Let's find out! Keep an eye on every
          rupee, make smarter spending choices, and turn your financial goals
          into reality.
        </p>
      </div>

      <div className="flex flex-col items-center sm:justify-evenly gap-3 sm:flex-row">
        {/* div containing total balance, total income, total expense and no of transactions */}

        <div className="border-3 border-blue-900 rounded-2xl bg-blue-50 px-3 py-2 flex flex-col items-center">
          {/* total balance */}
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Total Balance
          </div>
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {totalBalance}
          </div>
        </div>

        <div className="border-3 border-blue-900 rounded-2xl bg-blue-50 px-3 py-2 flex flex-col items-center">
          {/* total income  */}
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Total Income
          </div>
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {totalIncome}
          </div>
        </div>

        <div className="border-3 border-blue-900 rounded-2xl bg-blue-50 px-3 py-2 flex flex-col items-center">
          {/* total expense */}
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Total Expense
          </div>
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {totalExpense}
          </div>
        </div>

        <div className="border-3 border-blue-900 rounded-2xl bg-blue-50 px-3 py-2 flex flex-col items-center">
          {/* total no of transactions */}
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            No. of transactions
          </div>
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {Transctions}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 xl:gap-8">
        <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl gap-2">
          {/* Recent transactions record */}
          <div className="flex flex-row justify-between font-bold">
            <div className="flex flex-row gap-2 text-blue-950">
              <h2>Recent Transactions - </h2>
              <span>10 records</span>
            </div>

            <button onClick={()=>{navigate("/transactions")}} className="border-2 rounded-xl px-1.5 bg-blue-50">
              See all
            </button>
          </div>

          <table className="text-sm md:text-xl text-center border-3 border-blue-900 rounded-xl bg-blue-50">
            {/* <caption>Recent Transactions <span>See all</span>
          </caption> */}
            <thead>
              <tr className="border-3 border-blue-900">
                <th className="border-3 border-blue-900">Type</th>
                <th className="border-3 border-blue-900">Title</th>
                <th className="border-3 border-blue-900">Description</th>
                <th className="border-3 border-blue-900">Amount</th>
                <th className="border-3 border-blue-900">Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-3 border-blue-900">Expense</td>
                <td className="border-3 border-blue-900">Kurta</td>
                <td className="border-3 border-blue-900">Shopping</td>
                <td className="border-3 border-blue-900">-Rs400</td>
                <td className="border-3 border-blue-900">12-10-2026</td>
              </tr>

              <tr>
                <td className="border-3 border-blue-900">Income</td>
                <td className="border-3 border-blue-900">Tuition classes</td>
                <td className="border-3 border-blue-900">Teaching</td>
                <td className="border-3 border-blue-900">+Rs 500</td>
                <td className="border-3 border-blue-900">12-10-2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl gap-2">
          {/* Recent income record */}
          <div className="flex flex-row justify-between font-bold">
            <div className="flex flex-row gap-2 text-blue-950">
              <h2>Recent Income Records - </h2>
              <span>10 records</span>
            </div>

            <button onClick={()=>navigate("/income")} className="border-2 rounded-xl px-1.5 bg-blue-50">
              See all
            </button>
          </div>

          <table className="text-sm md:text-xl text-center border-3 border-blue-900 rounded-xl bg-blue-50">
            {/* <caption>Recent Income Records <span>See all</span>
          </caption> */}
            <thead>
              <tr className="border-3 border-blue-900">
                <th className="border-3 border-blue-900">Title</th>
                <th className="border-3 border-blue-900">Description</th>
                <th className="border-3 border-blue-900">Amount</th>
                <th className="border-3 border-blue-900">Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-3 border-blue-900">Kurta</td>
                <td className="border-3 border-blue-900">Shopping</td>
                <td className="border-3 border-blue-900">-Rs400</td>
                <td className="border-3 border-blue-900">12-10-2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl gap-2">
          {/* Recent expense record */}
          <div className="flex flex-row justify-between font-bold">
            <div className="flex flex-row gap-2 text-blue-950">
              <h2>Recent Expense Records - </h2>
              <span>10 records</span>
            </div>

            <button onClick={()=>navigate("/expense")} className="border-2 rounded-xl px-1.5 bg-blue-50">
              See all
            </button>
          </div>

          <table className="text-sm md:text-xl text-center border-3 border-blue-900 rounded-xl bg-blue-50">
            {/* <caption>Recent Income Records <span>See all</span>
          </caption> */}
            <thead>
              <tr className="border-3 border-blue-900">
                <th className="border-3 border-blue-900">Title</th>
                <th className="border-3 border-blue-900">Description</th>
                <th className="border-3 border-blue-900">Amount</th>
                <th className="border-3 border-blue-900">Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-3 border-blue-900">Kurta</td>
                <td className="border-3 border-blue-900">Shopping</td>
                <td className="border-3 border-blue-900">-Rs400</td>
                <td className="border-3 border-blue-900">12-10-2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button onClick={()=>navigate("/reports")} className="w-fit font-bold border-2 border-blue-900 rounded-xl px-1.5 bg-blue-50 text-blue-950">
        See Reports
      </button>
    </div>
  );
};

export default Dashboard;
