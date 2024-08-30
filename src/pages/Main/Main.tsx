import React, { useEffect } from 'react'

import styles from './Main.module.scss'
import { useTelegram } from '@/shared/lib/hooks/useTelegram'

export const Main = () => {
    const { setHeaderColor } = useTelegram()

    useEffect(() => {
        setHeaderColor('#FFFFFF')
    }, [])

    return (
        <div>
            
        </div>
    )
}