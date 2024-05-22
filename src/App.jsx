import React from 'react'
import Sidebar from './componenets/Sidebar'
import Header from './componenets/Header'

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4">
          {/* Your main content goes here */}
          <h1 className="text-2xl font-bold">Input/Output Section</h1>
        </main>
      </div>
    </div>
  )
}

export default App