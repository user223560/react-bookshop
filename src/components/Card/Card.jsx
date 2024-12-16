import { useState } from "react"
import { CiBookmark } from "react-icons/ci"
import Modal from "../Modal/Modal"
import placeholder from "../../assets/images/book-placeholder.jpg"
import styles from "./Card.module.scss"


const Card = ({book}) => {
    const [showModal, setShowModal] = useState(false)
    const [bookItem, setItem] = useState()
    console.log(book)

    return (
        <>
            {
                book.map( (item, index) => {
                    let thumbnail = !item.volumeInfo.imageLinks ? placeholder : item.volumeInfo.imageLinks.smallThumbnail
                    let price = !item.saleInfo.listPrice ? "NOT FOR SALE" : item.saleInfo.listPrice.amount + " ₽"
                    let title = item.volumeInfo.title
                    let author = item.volumeInfo.authors
                    if(!author) {
                        author = "NO AUTHORS"
                    } else if(author.length > 1){
                        author = author.join(", ")
                    }
                    return (
                        <>
                            <article className={styles.card} key={index} onClick={() => {setShowModal(true); setItem(item)}}>
                                <div className={styles.card__content}>
                                    <a className={styles.card__link} href="#">
                                        <img className={styles.card__img} src={thumbnail} alt={title} />
                                    </a>
                                    <div className={styles.card__price}>
                                        <span>
                                            {price}
                                        </span>
                                    </div>
                                    <div className={styles.card__title}>
                                        {title}
                                    </div>
                                    <div className={styles.card__author}>
                                        {author}
                                    </div>
                                    <div className={styles.card__btns}>
                                        <button>
                                            Buy
                                        </button>
                                        <button>
                                            <CiBookmark />
                                        </button>
                                    </div>
                                </div>
                            </article>
                            <Modal show={showModal} item={bookItem} onClose={() => setShowModal(false)}/>
                        </>
                    )
                })
            }
        </>
    )
}

export default Card
