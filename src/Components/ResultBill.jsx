import { useState } from 'react'
import '../App.css'

export default function ResultBill({ reset, billvalue, btnvalue, inputpeople, custom, btnactive }) {
  function countTotal() {
    return inputpeople ? (billvalue / inputpeople).toFixed(2) : "0.00"
  }

  function countTip() {
    if (btnactive === false) {
      if (custom) {
        return (countTotal() * custom / 100).toFixed(2)
      }
      else { return "0.00" }
    }
    else if (btnactive) {
      return (countTotal() / btnvalue).toFixed(2)

    }
    else {
      return "0.00"
    }
  }

  return (
    <div className="dashboard-result">
      <div className="tipAmount">
        <div className="TipAmountText">
          <h5>Tip Amount</h5>
          <p>/ person</p>
        </div>
        <div className="TipAmountRes">
          <h3 id="Tip-Amount">${countTip()}</h3>
        </div>
      </div>

      <div className="tipTotal">
        <div className="TipAmountText">
          <h5>Total</h5>
          <p>/ person</p>
        </div>
        <div className="TipAmountRes">
          <h3 id="Tip-Total-Person">${countTotal()}</h3>
        </div>
      </div>
      <div className="div-btn-reset">
        <button type="reset" id="Btn-Reset" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

