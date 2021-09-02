import Header from "./components/Header";
import Balance from "./components/Balance";
import History from "./components/History";
import AddTransactions from "./components/AddTransactions";
import {useState } from 'react' 
function App()
{
  const [transactions,setTransactions] = useState([
    {
      id:0 ,
      text: '',
      amount: 0
    }  
])

 const AddTransct = (transaction) =>
 {
   
   const id = Math.floor(Math.random() * 100) + 1
    const newTransec = { ...transaction, id }
   
   setTransactions([...transactions, newTransec])
  }
  return (
    <div>
      <Header />
      <Balance transactions={transactions} />
      {transactions.length >1? <History transactions={ transactions}/>:''}
      <AddTransactions AddTransct = {AddTransct} />
    
    </div>
  );
}

export default App;










// ===  =  =