import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import "./global.css"

// author: { avatarUrl: str, name: str, role: str }
// publishedAt: Date
// content: str

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/felipesiqg.png',
      name: 'Felipe Siqueira',
      role: 'Web Developer @Nowhere'
    },
    content: [
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'link', content: 'jane.design/doctorcare', urlLink: 'http://github.com'},
      {type: 'link', content: '#novoprojeto', urlLink: 'http://google.com'}
    ],
    publishedAt: new Date('2022-06-30 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Eu também acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'link', content: 'jane.design/doctorcare', urlLink: 'http://tesla.com'},
      {type: 'link', content: '#novoprojeto', urlLink: 'http://meta.com'}
    ],
    publishedAt: new Date('2022-06-29 19:40:00')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
