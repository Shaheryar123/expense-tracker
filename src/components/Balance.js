const Balance = ({ transactions }) =>

{
   
    var addAmount = 0
    var subAmount = 0
   
    const ans = transactions?.map((e) => {
        return parseInt(e.amount)
        
   })
    const lastAmount=transactions.slice(-1)
    if (lastAmount[0].amount > 0) {
        addAmount = ans?.reduce((accumulator, currentValue) => accumulator + currentValue)
        console.log(addAmount)
    }
    if (lastAmount[0].amount < 0) {
        subAmount = lastAmount[0].amount
        console.log(subAmount)
    
    }
    console.log("ans",ans)
    return (

        <div>
            <h3>YOUR BALANCE</h3>
           <h1 style ={{ color :'green',marginTop: '-15pt'}}>$450.00</h1> 
            <div style={{marginLeft:'10%', display:'flex'}}>
                <div style ={{ padding:'10pt 40pt 10pt 40pt' ,textAlign:'center' ,outline: "solid grey", outlineWidth:'1pt'}}>
                    <h4>INCOME</h4>
                    <h3 style={{ color: 'green', marginTop: '-15pt' }}  >{addAmount}</h3>
                </div>
                <div style ={{textAlign:'center',padding:'10pt 40pt 10pt 40pt' ,outline: "solid grey",outlineWidth:'1pt'}}>
                    <h4>EXPENSE</h4>
                    <h3 style={{ color: 'red', marginTop: '-15pt' }} >{ subAmount}</h3>
                    
                </div>
        </div>
        </div>
    )
}

export default Balance
