import Todo from './components/Todo.jsx'

function App() {

  return (
    <>
      <main className="h-[100vh] w-[100vw] grid grid-cols-2 bg-red-200 justify-center items-center">
        <Todo title="Item 1"/>
        <Todo title="Novo item"/>
        <Todo title="Sou Matheus"/>
        <Todo title="Sou Voleibolista"/>
      </main>
    </>
  )
}

export default App
