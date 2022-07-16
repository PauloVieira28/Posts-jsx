import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0)

  function hundleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state +1;
    })
    
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/PauloVieira28.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paulo Cesar</strong>
              <time title='02 de Julho ás 7:35h' dateTime='2022-07-02 07:35'>Cerca de 1hr atrás</time>

            </div>
            <button onClick={hundleDeleteComment} title='Deletar Comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}><ThumbsUp />
          Aplaudir <span>{likeCount}</span></button>
        </footer>
      </div>
    </div>
  )
}