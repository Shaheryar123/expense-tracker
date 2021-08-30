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
      text: 'work',
      amount: 3434
    },
    {
      id: 1,
      text: 'utitlity',
      amount: 34
    }
    
])

 const AddTransct = (transaction) =>
 {
   
   const id = Math.floor(Math.random() * 100) + 1
    const newTransec = { ...transaction, id }
   
   setTransactions([...transactions, newTransec])
   console.log(transactions)
  }
  return (
    <div>
      <Header />
      <Balance amounts={ transactions}/>
      {transactions.length >0? <History transactions={ transactions}/>:''}
      <AddTransactions AddTransct = {AddTransct} />
    
    </div>
  );
}

export default App;










// ===  =  =