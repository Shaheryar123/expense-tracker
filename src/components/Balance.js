const Balance = () => {
    return (
        <div>
            <h3>YOUR BALANCE</h3>
           <h1 style ={{ color :'green',marginTop: '-15pt'}}>$450.00</h1> 
            <div style={{marginLeft:'10%', display:'flex'}}>
                <div style ={{ padding:'10pt 40pt 10pt 40pt' ,textAlign:'center' ,outline: "solid grey", outlineWidth:'1pt'}}>
                    <h4>INCOME</h4>
                    <h3 style = {{color:'green',marginTop: '-15pt' }}  >400.00</h3>
                </div>
                <div style ={{textAlign:'center',padding:'10pt 40pt 10pt 40pt' ,outline: "solid grey",outlineWidth:'1pt'}}>
                    <h4>EXPENSE</h4>
                    <h3 style = {{color:'red',marginTop: '-15pt' }} >50.00</h3>
                </div>
        </div>
        </div>
    )
}

export default Balance
