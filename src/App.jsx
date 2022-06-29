import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import "./global.css"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Felipe Siqueira"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi earum laudantium quas voluptatum consequatur harum praesentium ipsam nulla labore fugit quisquam, voluptas aliquam, maiores aperiam amet vitae minus! Dolorum."
          />
          <Post 
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque obcaecati ad quae maiores. Temporibus dolor unde facilis esse laborum quod nihil, hic necessitatibus reprehenderit quaerat harum distinctio aspernatur autem?"
          />
        </main>
      </div>

    </div>
  )
}

export default App
