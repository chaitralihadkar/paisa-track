import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddTransaction1 from "../components/AddTransaction";
import UpdateTransaction from "../components/UpdateTransaction";

const Transactions = () => {
  const navigate = useNavigate();

  const [isAddTransactionClicked, setIsAddTransactionClicked] = useState<boolean>(false);
  const [isUpdateTransactionClicked, setIsUpdateTransactionClicked] = useState<boolean>(false);

  return (
    <div className="h-screen px-2 py-2 md:px-4 md:py-4 xl:px-6 xl:py-6 2xl:px-8 2xl:py-8">

      <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 items-center">
          {/* All transactions records */}
          <div className="flex justify-between items-end font-bold text-blue-950 w-full">
            <h2 className="text-sm sm:text-xl">All Transactions</h2>

            <div className="flex gap-2">
              <button onClick={() => {setIsAddTransactionClicked(!isAddTransactionClicked)}}>
                <img
                  src="src/assets/add.png"
                  alt="Add"
                  className="w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 rounded-full"
                />
              </button>

              <span className="px-1.5 border-3 border-blue-900 rounded-full bg-blue-50">
                2 transactions
              </span>
            </div>
          </div>

          <table className=" w-full text-sm sm:text-xl text-center border-3 border-blue-900 rounded-xl bg-blue-50">
            {/* <caption>Recent Transactions <span>See all</span>
          </caption> */}
            <thead>
              <tr className="border-3 border-blue-900">
                <th className="border-3 border-blue-900">Type</th>
                <th className="border-3 border-blue-900">Title</th>
                <th className="border-3 border-blue-900">Description</th>
                <th className="border-3 border-blue-900">Amount</th>
                <th className="border-3 border-blue-900">Date</th>
                <th className="border-3 border-blue-900">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-3 border-blue-900">Expense</td>
                <td className="border-3 border-blue-900">Kurta</td>
                <td className="border-3 border-blue-900">Shopping</td>
                <td className="border-3 border-blue-900">-Rs400</td>
                <td className="border-3 border-blue-900">12-10-2026</td>
                <td className="border-3 border-blue-900">
                  <div className="flex justify-evenly">
                    <button
                      onClick={()=>{setIsUpdateTransactionClicked(!isUpdateTransactionClicked)}}
                      className="flex  gap-1 rounded-xl px-1 my-1 bg-blue-100 border-2 border-blue-600 text-blue-600"
                    >
                      Edit
                    </button>
                    <button className="rounded-xl px-1 my-1 bg-red-100 border-2 border-red-600 text-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border-3 border-blue-900">Income</td>
                <td className="border-3 border-blue-900">Tuition classes</td>
                <td className="border-3 border-blue-900">Teaching</td>
                <td className="border-3 border-blue-900">+Rs 500</td>
                <td className="border-3 border-blue-900">12-10-2026</td>
                <td className="border-3 border-blue-900">
                  <div className="flex justify-evenly">
                    <button
                      onClick={() => {setIsUpdateTransactionClicked(!isUpdateTransactionClicked)}}
                      className="flex  gap-1 rounded-xl px-1 my-1 bg-blue-100 border-2 border-blue-600 text-blue-600"
                    >
                      Edit
                    </button>
                    <button className="rounded-xl px-1 my-1 bg-red-100 border-2 border-red-600 text-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={() => {setIsAddTransactionClicked(!isAddTransactionClicked)}}
            className="w-fit flex gap-1.5 px-3 py-1 border-3 border-blue-900 rounded-full bg-blue-50 font-bold text-blue-950"
          >
            <img
              src="src/assets/plus.png"
              alt="Add"
              className="w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 rounded-full"
            />
            Add Transaction
          </button>
        </div>
        
        {isAddTransactionClicked && (
            <div className="fixed bg-black/50 top-0 bottom-0 left-0 right-0">
                <AddTransaction1 isAddTransactionOpen ={isAddTransactionClicked} setIsAddTransactionOpen = {setIsAddTransactionClicked}/>
            </div>
        )
        }

        {isUpdateTransactionClicked && (
          <div className="fixed bg-black/50 top-0 bottom-0 right-0 left-0">
            <UpdateTransaction isUpdateTransactionOpen = {isUpdateTransactionClicked} setIsUpdateTransactionOpen={setIsUpdateTransactionClicked}/>
          </div>
        )}
        
    </div>
  );
};

export default Transactions;
