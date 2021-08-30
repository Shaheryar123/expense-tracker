import { useState } from "react"
const AddTransactions = ({AddTransct}) =>{
   
        const [transaction, setTransaction] = useState('')
        const [amount, setAmount] = useState('')    
    
         const onSubmit = (e) =>
        {
             e.preventDefault()
             
            if (!transaction) {
                alert('Kindly Add Transaction Details')
                return
            }
             AddTransct({ transaction, amount })
             
             setTransaction('')
             setAmount('')
            
        }
        
    
    return (

            <form onSubmit ={onSubmit}>
                
                <label style={{display:'block', fontSize:'20pt'}}>Description</label>
                    <input  value={transaction} onChange ={(e)=> setTransaction(e.target.value)} type='text' placeholder='Type Details of Transaction' />
                
                <label style={{display:'block', fontSize:'20pt'}}>Amount</label>
                    <input value ={amount} onChange ={(e)=> setAmount(e.target.value)}type='text' placeholder="For Income Type Amount with '+' Sign and For Expense Type Amount with '-' Sign" />
                    <button  value ='Add Transaction' style={{ padding :'8pt',cursor:'pointer',marginTop:'10pt', backgroundColor:'green',color:'black' }}>ADD</button>                
            </form>
           
    )
}

export default AddTransactions
