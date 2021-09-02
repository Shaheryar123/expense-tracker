import { useState } from "react"
const AddTransactions = ({AddTransct}) =>{
   
        const [text, setText] = useState('')
        const [amount, setAmount] = useState(0)    
    
         const onSubmit = (e) =>
        {
             e.preventDefault()
             
            if (!text) {
                alert('Kindly Add Transaction Details')
                return
            }
             AddTransct({ text, amount })
             
             setText('')
             setAmount(0)         
    }
           
    return (

            <form onSubmit ={onSubmit}>
                
                <label style={{display:'block', fontSize:'20pt'}}>Description</label>
                    <input  value={text} onChange ={(e)=> setText(e.target.value)} type='text' placeholder='Type Details of Transaction' />
                
                <label style={{display:'block', fontSize:'20pt'}}>Amount</label>
                    <input value ={amount} onChange ={(e)=> setAmount(e.target.value)} type='number' placeholder="For Income Type Amount with '+' Sign and For Expense Type Amount with '-' Sign" />
                    <button  value ='Add Transaction' style={{ padding :'8pt',cursor:'pointer',marginTop:'10pt', backgroundColor:'green',color:'black' }} onClick = {onSubmit}>ADD</button>                
            </form>
           
    )
}

export default AddTransactions
