import React, { useState } from "react";
import "./App.css";

const initialBacklog = [
  { id: 1, task: "Diseñar la base de datos", status: "Pendiente" },
  { id: 2, task: "Desarrollar módulo de inventarios", status: "Pendiente" },
  { id: 3, task: "Pruebas de funcionalidad", status: "Pendiente" },
  { id: 4, task: "Corrección de errores", status: "Pendiente" },
];

function App() {
  const [backlog, setBacklog] = useState(initialBacklog);

  const updateStatus = (id, status) => {
    const updatedBacklog = backlog.map((item) =>
      item.id === id ? { ...item, status } : item
    );
    setBacklog(updatedBacklog);
  };

  return (
    <div className="container">
      <h1>Sprint Planning</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>Estado</th>
            <th>Actualizar</th>
          </tr>
        </thead>
        <tbody>
          {backlog.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.task}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => updateStatus(item.id, "En Progreso")}>
                  En Progreso
                </button>
                <button onClick={() => updateStatus(item.id, "Completado")}>
                  Completado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;