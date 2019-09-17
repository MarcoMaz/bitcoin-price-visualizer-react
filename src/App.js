import React, { useState, useEffect } from 'react';
import './App.scss';
import moment from 'moment'
import url from './components/Endpoints'

function App() {
  const twoWeeksAgo = moment().subtract(14, 'days').format('YYYY-MM-DD')
  const today = moment().format('YYYY-MM-DD')
  const month = moment().format('MMMM YYYY')

  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const [ bitcoin, setBitcoin ] = useState([])
  const [ curr, setCurr ] = useState({value: 'USD'})
  const BASE_URL = url.start + curr.value + url.mid + twoWeeksAgo + url.end + today

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true)
      fetch(BASE_URL, {headers: {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
        }})
      .then (res => {
        return (res.ok) ?  res.json() : new Error("Mistake!")
      })
      .then(coins => {
        setBitcoin(coins.bpi)
        setIsLoading(false)
      })
      .catch(error => {
      setError(error)
      })
    }, 1000)
    return () => clearInterval(interval);
  }, [BASE_URL, curr])
  
  return(
    <div id='container'>
      <table>
        <caption>Bitcoin in { month }</caption>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          { 
            Object.keys(bitcoin).map( (bit, i) => (
              <tr key={ i }>
                <td>{ bit.slice(-2) }</td>
                <td>{ bitcoin[bit] }</td>
                <td>
                    { (curr.value === 'USD') ? <span> &#36;</span> : 
                      (curr.value === 'EUR') ?  <span> &#8364;</span> : 
                      <span>&#163;</span>
                    }
                </td>
              </tr>))
            }
        </tbody>
      </table>
      <label>
        Change your currency:
        <select value={ curr.value } onChange={(e) => setCurr({value: e.target.value}) }>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </label>
    </div>
    )
  }

export default App;