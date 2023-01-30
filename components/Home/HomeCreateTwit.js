import React, { useState } from 'react'
import styles from "../../styles/Home.module.css";
import {
    UploadIcon,
    GIFIcon,
    PollIcon,
    EmoIcon,
    ScheduleIcon,
    LocationIcon
} from "../Icons"
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { SpaceColor } from "../../styles/Colors.module.scss"
import { useSession } from 'next-auth/react';
import Button from '@mui/material/Button';
import Image from "next/image"
function HomeCreateTwit({ image }) {
    const [isDisabled, setIsDisabled] = useState(true)
    const [yourTweet, setYourTweet] = useState("")
    const [tweetImgs, setTweetImgs] = useState([])
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0)
    const { data: session } = useSession()
    const myLoader = () => {
        return session?.user?.image
    }
    const icons = [
        { icon: <UploadIcon color={SpaceColor} />, flag: "uploadImg" },
        { icon: <GIFIcon color={SpaceColor} />, flag: "GifImg" },
        { icon: <PollIcon color={SpaceColor} />, flag: "Poll" },
        { icon: <EmoIcon color={SpaceColor} />, flag: "Emojy" },
        { icon: <ScheduleIcon color={SpaceColor} />, flag: "Schedule" },
        { icon: <LocationIcon color={SpaceColor} />, flag: "location" }
    ]
    const handleTextArea = (e) => {
        if (e.target.value == "") {
            setIsDisabled(true)
        }
        else {
            setIsDisabled(false)
            setYourTweet(e.target.value)
        }
    }
    return (
        <React.Fragment>
            <div className="relative h-full mt-2">
                <div className='absolute top-0 text-blackColor z-3 h-full flex justify-center w-2/12'>
                    <div className='w-50'>
                        <Image
                            className='rounded-full'
                            loader={myLoader}
                            src={`${session?.user?.image}`}
                            alt="Picture of the author"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
                <div className='w-10/12 ml-auto'>
                    <TextareaAutosize
                        className=' dark:bg-dark bg-light border-0 outline-0 ring-0 w-full p-3 text-2xl overflow-auto resize-none max-h-screen'
                        aria-label="empty textarea"
                        placeholder="What's happening?"
                        onChange={(e) => handleTextArea(e)}
                    />
                    <div className={styles.gridContainer}>
                        {tweetImgs &&
                            Array?.from(tweetImgs).map((file, index) => {
                                image.src = URL.createObjectURL(file);
                                image.onload = function () {
                                    setWidth(image.width)
                                    setHeight(image.height)
                                };
                                if (Array?.from(tweetImgs).length == 1) {
                                    return (
                                        <div key={index} className={`${styles.oneGridItem}`}>
                                            <Image
                                                className='rounded-lg object-cover'
                                                src={URL.createObjectURL(file)}
                                                alt="Picture of the author"
                                                width={width}
                                                height={height}
                                            />
                                        </div>
                                    )
                                }
                                if (Array?.from(tweetImgs).length == 2) {
                                    return (
                                        <div key={index} className={`${styles.twoGridItem}`}>
                                            <Image
                                                className='rounded-lg object-cover'
                                                src={URL.createObjectURL(file)}
                                                alt="Picture of the author"
                                                width={width}
                                                height={height}
                                            />
                                        </div>
                                    )
                                }
                                if (Array?.from(tweetImgs).length == 3) {
                                    return (
                                        <div key={index} className={`${styles.threeGridItem}`}>
                                            <Image
                                                className='rounded-lg object-cover'
                                                src={URL.createObjectURL(file)}
                                                alt="Picture of the author"
                                                width={width}
                                                height={height}
                                            />
                                        </div>
                                    )
                                }
                                return (
                                    <div key={index} className={`${styles.gridItem}`}>
                                        <Image
                                            className='rounded-lg object-cover'
                                            src={URL.createObjectURL(file)}
                                            alt="Picture of the author"
                                            width={width}
                                            height={height}
                                        />
                                    </div>
                                )
                            })}
                    </div>
                    <div className='w-full p-2'>
                        {(!isDisabled || tweetImgs?.length > 0) && <hr className={`border-borderColor`} />}
                        <div className='py-5 flex justify-between items-center'>
                            <div>
                                {
                                    icons?.map((item, index) => {
                                        if (item.flag == "uploadImg") {
                                            return (
                                                <Button onClick={() => setTweetImgs(null)} key={index} aria-label="upload picture" className="rounded-full py-2 px-3 w-10 min-w-0" component="label">
                                                    <input hidden accept="image/*" multiple type="file" onChange={(e) => setTweetImgs(e.target.files)} />
                                                    {item?.icon}
                                                </Button>
                                            )
                                        }
                                        return (
                                            <Button key={index} className="rounded-full py-2 px-3 w-10 min-w-0">{item?.icon}</Button>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <Button disabled={isDisabled} className={`rounded-full py-2 px-3 ${isDisabled ? "opacity-50" : "opacity-100"} bg-space text-whiteColor font-bold capitalize`}>
                                    Tweet
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default HomeCreateTwit
