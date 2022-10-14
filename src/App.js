import React from 'react'
import Card from './Card';
import Count from './Count';



const App = () => {
  return (
    <div>
    <center>
    <h1>Shoppingcart</h1>
    <div className="shopping">
        <Count />
        <Card />
    </div>
        </center>
    </div>
  )
}

export default App