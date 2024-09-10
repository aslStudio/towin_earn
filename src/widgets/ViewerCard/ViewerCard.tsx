import React from 'react'

import { Button } from "@/shared/ui/Button"
import { Card } from "@/shared/ui/Card"
import { InfoCell } from "@/shared/ui/InfoCell"

import styles from './ViewerCard.module.scss'
import { useTimer } from '@/shared/lib/hooks/useTimer'
import { Avatar } from '@/shared/ui/Avatar'
import { images } from '@/shared/assets'
import {useTelegram} from "@/shared/lib/hooks/useTelegram";

const image = 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0='

export const ViewerCard = () => {
    const { haptic } = useTelegram()

    const { dottedViewWithHours } = useTimer(1_000_000, 'up')

    return <Card size="l">
        <div className={styles.wrapper}>
            <Avatar 
                className={styles.avatar} 
                src={image} 
                size='s' />
            <div>
                <InfoCell title="Alex_007" description="Продам гараж" />
                <p className={styles.timer}>⏱️ {dottedViewWithHours}</p>
            </div>
            <img
                className={styles.sticker} 
                src={images.last.KingHill}
                alt="sticker"
            />
        </div>
        <div className={styles.divider} />
        <Button 
            className={styles.button}
            view="dark"
            size="m"
            weight="semibold"
            onClick={() => {
                haptic()
                // navigate('/record')
            }}
        >
            Become a King
        </Button>
    </Card>
}