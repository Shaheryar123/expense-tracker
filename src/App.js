import Header from "./components/Header";
import Balance from "./components/Balance";
import History from "./components/History";
import AddTransactions from "./components/AddTransactions";
import {useState } from 'react' 
function App()
{
  const [transactions,setTransactions] = useState([
    {
        id: 0,
        text: 'Payment',
        amount: 700
    },
    {
        id: 1,
        text: 'Utility',
        amount: 100
    },
    {
        id: 2,
        text: 'Fees',
        amount: 130
    }
])

 const AddTransct = (transaction) =>
 {
   
   const id = Math.floor(Math.round() * 100) +1
   const newTransec = { transaction, id }
   console.log(transaction,id)
   setTransactions([...transactions, newTransec])
  }
  return (
    <div>
      <Header />
      <Balance />
      <History transactions={ transactions}/>
      <AddTransactions AddTransct = {AddTransct} />
    
    </div>
  );
}

export default App;










// ===  =  =