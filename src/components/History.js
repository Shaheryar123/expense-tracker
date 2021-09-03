import  '../App.css' 
const History = ({ transactions,deleteTransaction }) =>
{
    
    const renderTrasaction = transactions.slice(2)
    
    return (
        <div >
            <h2>HISTORY</h2>
            {
                renderTrasaction.map((transaction) => (
                    <div key={transaction.id} className = 'App-history'>
                    <div  style={{ display: 'flex', outline: 'solid grey', outlineWidth: '1pt' }}>
                        <h3>{transaction.text}</h3>
                            <h3 >${transaction.amount}</h3>

                            
                        </div>
                        <div className = 'App-btn'>
                            <input type='checkBox' onClick={() => deleteTransaction(transaction.id)} />
                            <p>Click to remove Transaction</p>
                           </div>
                        </div>
                        ))
            }
        </div>
    )
}

export default History
