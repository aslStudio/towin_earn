import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/ui/Button'
import { useTelegram } from '@/shared/lib/hooks/useTelegram'
import Background from '@/shared/assets/images/record/background.png'

import styles from './Record.module.scss'

export const Record = () => {
    const navigate = useNavigate()

    const { setHeaderColor, shareToStory } = useTelegram()

    function onLetsGo() {
        navigate('/last')
    }

    function onShare() {
        shareToStory(
            'https://drive.google.com/u/0/drive-viewer/AKGpihax6GYi-4d01YFHGOhXw5PE5jSTdcrtckTgZFDALc1-Gw1woVDwhYPP0tGHO9twm-3Ayt3JDMEXkgpy4iChKUclsOKx0P1jtQ=s1600-rw-v1',
            {
                widget_link: {
                    name: 'VIEW YOUR TOKENS',
                    url: 'https://www.google.ru/?hl=ru'
                }
            }
        )
    }

    useEffect(() => {
        setHeaderColor('#505051')
    }, [])

    return (
        <div className={styles.root}>
            <img 
                className={styles.background} 
                src={Background} 
                alt='background' 
            />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Last</h1>
                    <p>
                        WOOOW! This is your <br />
                        tokens 
                    </p>
                </div>
                <p className={styles.amount}>
                    3,8k
                </p>
                <div className={styles.bottom}>
                    <p>
                        Improve in the game <br /> 
                        and get a reward!
                    </p>
                    <Button 
                        className={styles.button}
                        view='blur'
                        size='m'
                        icon={'icon-share'}
                        onClick={onShare}
                    >
                        Share in Stories
                    </Button>
                    <Button 
                        className={styles.button}
                        view='surface'
                        size='m'
                        onClick={onLetsGo}
                    >
                        Let's do this!
                    </Button>
                </div>
            </div>
        </div>
    )
}