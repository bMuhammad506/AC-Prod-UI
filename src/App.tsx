import './App.css'

function App() {
  return (
    <div>
      <h1>My First React App</h1>
      <p>Coming from vanilla JS 😄</p>
      <MyComponent />
    </div>
  )
}

function MyComponent() {
  return <p>I am a component</p>
}

export default App
