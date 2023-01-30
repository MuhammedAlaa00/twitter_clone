import React, { useState } from 'react'
import HomeHeadTitle from "./HomeHeadTitle"
import NavToggleBtn from "./NavToggleBtn"
import styles from "../../styles/Home.module.css"
import HomeCreateTwit from "./HomeCreateTwit"
function HomeConatiner() {
    const [isForU, setIsForU] = useState(true)
    const [isFollowing, setIsFollowing] = useState(false)
    const image = new Image();
    return (
        <div style={{ height: "1000px" }}>
            <div className={`z-50 sticky top-0 ${styles.bgblur} ${styles.withBorder}`}>
                <HomeHeadTitle />
                <NavToggleBtn
                    isForU={isForU}
                    setIsForU={setIsForU}
                    isFollowing={isFollowing}
                    setIsFollowing={setIsFollowing}
                />
            </div>
            <div className={`${styles.withBorder}`}>
                <HomeCreateTwit image={image}/>
            </div>
            {isForU && <div className={`${styles.withBorder}`}>For You</div>}
            {isFollowing && <div className={`${styles.withBorder}`}>Following</div>}
        </div>
    )
}
export { HomeConatiner }