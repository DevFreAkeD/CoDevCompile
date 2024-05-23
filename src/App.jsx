import Sidebar from './componenets/Sidebar'
import Header from './componenets/Header'
import EditorComponent from './componenets/EditorComponent'
import "./index.css"

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow">
          <EditorComponent />
        </main>
      </div>
    </div>
  )
}

export default App