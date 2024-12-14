import { IoCloseSharp } from "react-icons/io5"
import placeholder from "../../assets/images/book-placeholder.jpg"
import styles from "./Modal.module.scss"


const Modal=({show, item, onClose}) => {
    if(!show) {
        return null
    }
    let thumbnail = !item.volumeInfo.imageLinks ? placeholder : item.volumeInfo.imageLinks.smallThumbnail
    let title = item.volumeInfo.title
    let author = item.volumeInfo.authors
    if(!author) {
        author = "NO AUTHORS"
    } else if(author.length > 1){
        author = author.join(", ")
    }
    let publisher = item.volumeInfo.publisher
    let publicationDate = item.volumeInfo.publishedDate
    let description = item.volumeInfo.description

    return(
        <>
            <dialog className={`${styles.modal} ${styles._overlay}`}>
                <div className={styles.modal__content}>
                    <button className={styles.modal__btnClose} onClick={onClose}>
                        <IoCloseSharp />
                    </button>
                    <div className={styles.modal__info}>
                        <div className={styles.modal__img}>
                            <img src={thumbnail} alt={title} />
                        </div>
                        <div className={styles.modal__descr}>
                            <p>{description}</p>
                            <a className={styles.modal__cta} href={item.volumeInfo.previewLink}>
                                More
                            </a>
                        </div>
                        <div className={styles.modal__details}>
                            <h2 className={styles.modal__title}>{title}</h2>
                            <p className={styles.modal__author}>{author}</p>
                            <div className={styles.modal__publisher}>
                                <p>{publisher}</p>
                                <span>{publicationDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Modal
