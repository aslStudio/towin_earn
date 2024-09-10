import { useTelegram } from "@/shared/lib/hooks/useTelegram"
import {useEffect, useState} from "react"

import { images } from '@/shared/assets'

import styles from './Referal.module.scss'
import { Button } from "@/shared/ui/Button"
import { useNavigate } from "react-router-dom"
import { IconBase } from "@/shared/ui/IconBase"
import {useCopyToClipboard} from "@/shared/lib/hooks/useCopy";
import {Loader} from "@/shared/ui/Loader";

const mockReferral = 'tow.im/ceosashajdjdjdjdjdjjdjdjdjjjjjjj'

export const Referral = () => {
    const navigate = useNavigate()

    const { setHeaderColor, shareToStory, haptic } = useTelegram()
    const [_, copy] = useCopyToClipboard()
    const [isLoading, setIsLoading] = useState(true)
    
    function onLetsGo() {
        haptic()
        navigate('/last')
        setHeaderColor('#FFFFFF')
    }

    function onShare() {
        haptic()
        shareToStory(
            'https://drive.google.com/u/0/drive-viewer/AKGpihby-tHD5atYK6isl1y8h_B8m2WpLvCE_nKAmkkHaAj_lyuXf7TjIhK5VP7Jlven2-Vs9KnvCpvtAQ52WKFDC3ej23PcawroHbY=s1600-rw-v1',
            {
                widget_link: {
                    name: 'START GAME',
                    url: 'https://www.google.ru/?hl=ru'
                }
            }
        )
    }

    useEffect(() => {
        setHeaderColor('#000')
        const image = new Image()
        image.src = images.auth.Decoration
        image.addEventListener('load', () => {
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        if (isLoading) {
            setHeaderColor('#47629B')
        }
    }, [isLoading, setHeaderColor]);

    return <div className={[
        styles.root,
        isLoading ? styles['is-loading'] : styles['is-container']
    ].join(' ')}>
        <Loader className={styles.loader} />
        <img 
            src={images.auth.Decoration} 
            className={styles.image} 
            alt="decoration" 
        />
        <div className={styles.container}>
            <h1 className={styles.title}>
                Get a spot with the help <br /> 
                of your friends!
            </h1>
            <p className={styles.description}>
                Invite 5 friends and get 5 spots <br />
                in the queue as a gift! ⭐️ <br />
            </p>
            <div className={styles.referral} onClick={() => copy(mockReferral)}>
                <p>{mockReferral}</p>
                <IconBase icon={'icon-link-light'} width={24} height={24} />
            </div>
            <p className={styles.subscription}>The more friends you invite, the more places you will have!</p>
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