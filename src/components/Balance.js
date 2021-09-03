const Balance = ({ transactions }) =>
{

    const ans = transactions?.map((e) =>
    {
        return parseInt(e.amount)
        
    })
    
    const balance = ans.reduce(((accumulator, currentValue) => accumulator + currentValue))
    const income =  ans.filter(item => item > 0).reduce(((accumulator, currentValue) => accumulator + currentValue))
    const expense = ans.filter(item => item <0).reduce(((accumulator, currentValue) => accumulator + currentValue))
  
    return (

        <div>
            <h3>YOUR BALANCE</h3>
            <h1 style={{ color: 'green', marginTop: '-15pt' }}>${balance}.00</h1>
            <div style={{marginLeft:'10%', display:'flex'}}>
                <div style ={{ padding:'10pt 40pt 10pt 40pt' ,textAlign:'center' ,outline: "solid grey", outlineWidth:'1pt'}}>
                    <h4>INCOME</h4>
                    <h3 style={{ color: 'green', marginTop: '-15pt' }}  >${income-1}.00</h3>
                </div>
                <div style ={{textAlign:'center',padding:'10pt 40pt 10pt 40pt' ,outline: "solid grey",outlineWidth:'1pt'}}>
                    <h4>EXPENSE</h4>
                    <h3 style={{ color: 'red', marginTop: '-15pt' }} >-${ Math.abs(expense)-1}.00</h3>
                    
                </div>
        </div>
        </div>
    )
}

export default Balance
