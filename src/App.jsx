import { useState } from "react";

import {InputBox} from "./componenets"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [amount, setAmount] = useState(0);
  const [from , setFrom] = useState("usd");
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo()
 
  return (
    <>
      <h1 className='text-3xl bg-orange-500'>Currency App</h1>
    </>
  )
}

export default App
