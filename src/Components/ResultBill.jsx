import { useState } from 'react'
import '../App.css'

export default function ResultBill(props) {

  return (
      <div className="dashboard-result">
        <div className="tipAmount">
          <div className="TipAmountText">
            <h5>Tip Amount</h5>
            <p>/ person</p>
          </div>
          <div className="TipAmountRes">
            <h3 id="Tip-Amount">$0.00</h3>
          </div>
        </div>

        <div className="tipTotal">
          <div className="TipAmountText">
            <h5>Total</h5>
            <p>/ person</p>
          </div>
          <div className="TipAmountRes">
            <h3 id="Tip-Total-Person">$0.00</h3>
          </div>
        </div>
        <div className="div-btn-reset">
          <button  type="reset" id="Btn-Reset" onClick={()=>props.reset()}>Reset</button>
        </div>
    </div>
  )
}

