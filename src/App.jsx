import { useState } from 'react'
import './App.css'
import Table from './components/table/Table'
import Form from './components/form/Form'

function App() {
  const [data, setData] = useState([]);

  const agregarDatos = (formData) => {
    setData((prevData) => [...prevData, formData]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="p-4">
          <Form agregarDatos={agregarDatos}/>
        </div>
        <div className="p-4">
          <Table data={data} />
        </div>
      </div>
    </div>
  )
}

export default App
