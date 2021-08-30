const History = ({transactions}) =>
{

    return (
        <div >
            <h2>HISTORY</h2>
            {
                transactions.map((transaction) => (
                    <div key={transaction.id} style ={{display:'flex', outline :'solid grey', outlineWidth:'1pt'}}>
                        <h3>{transaction.text}</h3>
                            <h3 >${transaction.amount}</h3>
                            
                    </div>
                        ))
            }
        </div>
    )
}

export default History
