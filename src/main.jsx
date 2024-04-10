import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes =[
    {
        id:1,
        content:"working with array",
        important:true
    },
    {
        id:2,
        content:"usage of keys",
        important:true
    },
    {
        id:3,
        content:"conditional rendering",
        important:false
    }
]



ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>);
