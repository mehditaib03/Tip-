import React, { useState } from 'react'
import '../App.css'
import ResultBill from './ResultBill'


export default function CountBill() {
    const [valueinput, setValue] = React.useState({
        billValue: 0,
        custom: 0,
        inputPeople: 0,
        btnValue: 0,
    })

    /*Handle input Value */
    function handleChange(event) {
        let { value, min, max } = event.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)))
        setValue(prev => {
            return {
                ...prev,
                [event.target.name]: parseInt(value)
            }
        })
    }
    /* reset */
    function reset() {
        setValue({
            billValue: 0,
            custom: 0,
            inputPeople: 0,
            btnValue: 0,
        })
    }

    console.log("valeur", valueinput);


    /*Handle btn Value */
    function getBtnValue(event) {
        setValue(prev => {
            return {
                ...prev,
                [event.target.name]: parseInt(event.target.value)
            }
        })
        CustomClick(event)
    }
    /*handle CSS Btn when clicked */
    function handleCSS(event){
        event.currentTarget.classList.toggle('test')
        console.log(event.currentTarget.classList.value="mehdi"); 
        return "mehdi"
    }



    return (
        <div className="container">

            <div className="dashboard-calcul">
                <h5>Bill</h5>
                <input id="input-price" className="input-style hov"
                    placeholder="0"
                    type="number"
                    min="1"
                    max="999999999999"
                    name='billValue'
                    onChange={handleChange}
                    value={valueinput.billValue <= 0 ? "" : valueinput.billValue}
                />

                <div className="div-btn-tip">
                    <h5>Select tip %</h5>

                    <button className={`btn-tip`} name='btnValue' type='button' onClick={getBtnValue} value={"5"}>5%</button>

                    <button className="btn-tip" name='btnValue' value={"10"} onClick={getBtnValue} >10%</button>

                    <button className="btn-tip" name='btnValue' value={"15"} onClick={getBtnValue}>15%</button>

                    <button className="btn-tip" name='btnValue' value={"25"} onClick={getBtnValue} >25%</button>

                    <button className="btn-tip" name='btnValue' value={"50"} onClick={getBtnValue} >50%</button>
                    <input id="CustumInput" min={0} max={100} type="number"
                        step={1} placeholder="Custom" value={valueinput.custom <= 0 ? "" : valueinput.custom}
                        onChange={handleChange} name='custom'

                    />
                </div>

                <h5>Number of People</h5>
                <input className="input-style hov" id="input-people"
                    placeholder="0" type="number"
                    min="1" max="1000" name="inputPeople"
                    onChange={handleChange}
                    value={valueinput.inputPeople <= 0 ? "" : valueinput.inputPeople}
                />

            </div>
            <ResultBill reset={reset} />
        </div>
    )
}

