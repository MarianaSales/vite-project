import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  const post = [
    {
      id: 1,
      author: {
        avatarUrl: "https:github.com/MarianaSales.png",
        name: "Mariana Sales",
        role: "Front-End Developer",
      },
      content: [
        { type: "paragraph", content: "Fala povo 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "paragraph", content: "👇" },
        { type: "link", content: "jane.design/doctorcare " },
      ],
      publishedAt: new Date("2022-05-12 13:15:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https:github.com/MarianaSales.png",
        name: "Jon Doe",
        role: "Back-End Developer",
      },
      content: [
        { type: "paragraph", content: "Fala dev 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "paragraph", content: "👇" },
        { type: "link", content: "jane.design/doctorcare " },
      ],
      publishedAt: new Date("2022-07-01 13:15:00"),
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
