import React from 'react'

const names = ['Joe' , 'Root'  , 'Kane' , 'Williamson']

const Test = () => {
  return (
    <>
    <h1>Hello</h1>
        <ul>
            {names.map((name , index) => {
                return <li key = {index}>{name}</li>
            })}
        </ul>
    </>
  )
}

export default Test