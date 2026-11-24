import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIncome from "../components/AddIncome";
import UpdateIncome from "../components/UpdateIncome";

const Income = () => {

  const navigate = useNavigate();

  const [isAddIncomeClicked, setIsAddIncomeClicked] = useState<boolean>(false);
  const [isUpdateIncomeClicked, setIsUpdateIncomeClicked] = useState<boolean>(false);

  return (
    <div className="h-screen px-2 py-2 md:px-4 md:py-4 xl:px-6 xl:py-6 2xl:px-8 2xl:py-8">
      <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 items-center">
        {/* All income records */}
        <div className="flex justify-between items-end font-bold text-blue-950 w-full">
          <h2 className="text-sm sm:text-xl">All Income Records</h2>

          <div className="flex gap-2">
            <button onClick={()=> {setIsAddIncomeClicked(!isAddIncomeClicked)}}>
                <img
                src="src/assets/add.png"
                alt="Add"
                className="w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 rounded-full"
              />
              
            </button>

            <span className="px-1.5 border-3 border-blue-900 rounded-full bg-blue-50">2 income records</span>
          </div>
        </div>

        <table className=" w-full text-sm sm:text-xl text-center border-3 border-blue-900 rounded-xl bg-blue-50">
          {/* <caption>Recent Transactions <span>See all</span>
          </caption> */}
          <thead>
            <tr className="border-3 border-blue-900">
              <th className="border-3 border-blue-900">Title</th>
              <th className="border-3 border-blue-900">Description</th>
              <th className="border-3 border-blue-900">Amount</th>
              <th className="border-3 border-blue-900">Date</th>
              <th className="border-3 border-blue-900">Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="border-3 border-blue-900">Salary</td>
              <td className="border-3 border-blue-900">Frontend Development</td>
              <td className="border-3 border-blue-900">+Rs 5000</td>
              <td className="border-3 border-blue-900">12-10-2026</td>
              <td className="border-3 border-blue-900">
                <div className="flex justify-evenly">
                  <button onClick={()=> {setIsUpdateIncomeClicked(!isUpdateIncomeClicked)}} className="flex  gap-1 rounded-xl px-1 my-1 bg-blue-100 border-2 border-blue-600 text-blue-600">
                    Edit
                  </button>
                  <button className="rounded-xl px-1 my-1 bg-red-100 border-2 border-red-600 text-red-600">
                    Delete
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border-3 border-blue-900">Tuition classes</td>
              <td className="border-3 border-blue-900">Teaching</td>
              <td className="border-3 border-blue-900">+Rs 500</td>
              <td className="border-3 border-blue-900">12-10-2026</td>
              <td className="border-3 border-blue-900">
                <div className="flex justify-evenly">
                  <button onClick={()=> {setIsUpdateIncomeClicked(!isUpdateIncomeClicked)}} className="flex  gap-1 rounded-xl px-1 my-1 bg-blue-100 border-2 border-blue-600 text-blue-600">
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

          <button onClick={()=> {setIsAddIncomeClicked(!isAddIncomeClicked)}} className="w-fit flex gap-1.5 px-3 py-1 border-3 border-blue-900 rounded-full bg-blue-50 font-bold text-blue-950">
            <img
              src="src/assets/plus.png"
              alt="Add"
              className="w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 rounded-full"
            />
            Add Income Record
          </button>
      </div>

      {isAddIncomeClicked && (
        <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0">
          <AddIncome isAddIncomeOpen={isAddIncomeClicked} setIsAddIncomeOpen={setIsAddIncomeClicked}/>
        </div>
      )}

      {isUpdateIncomeClicked && (
        <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0">
          <UpdateIncome isUpdateIncomeOpen={isUpdateIncomeClicked} setIsUpdateIncomeOpen={setIsUpdateIncomeClicked}/>
        </div>
      )}


    </div>
  );
};

export default Income;
