import { useState } from "react"
import { PiBookBookmark, PiShoppingCartLight } from "react-icons/pi"
import { CiSearch, CiBookmark, CiUser } from "react-icons/ci"
import { GiCardboardBoxClosed } from "react-icons/gi"
import { ImBooks } from "react-icons/im"
import axios from "axios"
import Card from "../Card/Card"
import styles from "./MainContent.module.scss"


const MainContent = () => {
    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])

    const key = "AIzaSyDmkxWqx4frhzmp0LmcAXduhWusNo2XKC4"

    const searchBook = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}&printType=books&startIndex=0&maxResults=24&langRestrict=en`)
            setData(response.data.items)
        } catch(error) {
            console.log(error)
        }
    }

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    const onEnterPress = (event) => {
        if(event.key === "Enter") {
            searchBook()
        }
    }

    const handleClick = () => {
        searchBook()
    }

    return(
        <>
            <header className={`${styles.header} ${styles._stickyHeader}`}>
                <nav className={styles.header__nav}>
                    <div className={styles.header__logo}>
                        <ImBooks />
                        <h1>React<br/>Bookshop</h1>
                    </div>
                    <div className={styles.header__center}>
                        <div className={styles.header__catalog}>
                            <button>
                                <PiBookBookmark />
                                <span>Catalog</span>
                            </button>
                        </div>
                        <div className={styles.header__search}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={handleInputChange}
                                onKeyPress={onEnterPress}
                            />
                            <button onClick={handleClick}>
                                <CiSearch />
                            </button>
                        </div>
                    </div>
                    <div className={styles.header__controls}>
                        <div className={styles.header__user}>
                            <button>
                                <CiUser />
                                <span>Sign In</span>
                            </button>
                        </div>
                        <div className={styles.header__orders}>
                            <button>
                                <GiCardboardBoxClosed />
                                <span>Your Orders</span>
                            </button>
                        </div>
                        <div className={styles.header__bookmarks}>
                            <button>
                                <CiBookmark />
                                <span>Bookmarks</span>
                            </button>
                        </div>
                        <div className={styles.header__cart}>
                            <a href="#">
                                <PiShoppingCartLight />
                                <span>Shopping Cart</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <main className={styles.main}>
                <section className={styles.main__products}>
                    <Card book={bookData} />
                </section>
            </main>
        </>
    )
}

export default MainContent
