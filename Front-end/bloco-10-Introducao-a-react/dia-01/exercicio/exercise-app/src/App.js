import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

// Exercício 1
// const Task = value => {
//   return <li>{value}</li>
// }
// const tasks = ['estudar', 'correr', 'exercitar']

// function App() {
//   return <ul>{tasks.map(item => Task(item))}</ul>
// }

// export default App

// Exercício 2 e 3
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
