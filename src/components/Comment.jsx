import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/MarianaSales.png"
        alt="Foto de perfil do usuário"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mariana Sales</strong>
              <time title="12 de julho de 2022" dateTime="2022-07-12 08:15:50">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
