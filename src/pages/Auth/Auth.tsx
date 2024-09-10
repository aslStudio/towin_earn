import { useTelegram } from "@/shared/lib/hooks/useTelegram"
import { useEffect } from "react"

import { images } from '@/shared/assets'

import styles from './Auth.module.scss'
import { Button } from "@/shared/ui/Button"
import { useNavigate } from "react-router-dom"

export const Auth = () => {
    const navigate = useNavigate()

    const { setHeaderColor, shareToStory, haptic } = useTelegram()
    
    function onLetsGo() {
        haptic()
        navigate('/last')
    }

    function onShare() {
        haptic()
        shareToStory(
            'https://drive.google.com/u/0/drive-viewer/AKGpihYISBUbfor_kXlJhWilUnjxr7sl_F7rPlLC6rTpup1ch2qiyKW1BJRL9qEb5l6u8GxxHBrZwixzaI1WyYd1eU_KMJrHVuXMKOA=s1600-rw-v1',
            {
                widget_link: {
                    name: 'START GAME',
                    url: 'https://www.google.ru/?hl=ru'
                }
            }
        )
    }

    useEffect(() => {
        setHeaderColor('#47629B')
    }, [])

    return <div className={styles.root}>
        <img 
            src={images.auth.Decoration} 
            className={styles.image} 
            alt="decoration" 
        />
        <div className={styles.container}>
            <h1 className={styles.title}>
                Shall we find out <br /> 
                who will be the last?
            </h1>
            <p className={styles.description}>
                The person on whom it stops <br />
                will take the entire prize pool <br />
                in Telegram Stars ⭐️ <br />
            </p>
            <Button 
                className={styles.button}
                view={'blur'} 
                icon={'icon-share'}
                onClick={onShare}>
                Share in Stories
            </Button>
            <Button 
                className={styles.button}
                view={'surface'} 
                onClick={onLetsGo}>
                Let's do this!
            </Button>
        </div>
    </div>
}