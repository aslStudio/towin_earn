import { useTelegram } from "@/shared/lib/hooks/useTelegram"
import { useEffect } from "react"

import { images } from '@/shared/assets'

import styles from './Auth.module.scss'
import { Button } from "@/shared/ui/Button"
import { useNavigate } from "react-router-dom"

export const Auth = () => {
    const navigate = useNavigate()

    const { setHeaderColor, shareToStory } = useTelegram()
    
    function onLetsGo() {
        navigate('/last')
    }

    function onShare() {
        shareToStory(
            'https://drive.google.com/u/0/drive-viewer/AKGpihawqEmA5Du50QeZKTLyQ5E9DjpqbrXgxWGcHMSqVLw_LQ-yw1NwQu1TOdUf8adga9cPjE_CtSTXsfYu9U5aNs885A9IoJbWsw=s1600-rw-v1',
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
                view={'transparent'} 
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