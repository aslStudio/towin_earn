import React, { useEffect } from 'react'
import Lottie from 'react-lottie'

import { useTelegram } from '@/shared/lib/hooks/useTelegram'
import { ViewerCard } from '@/widgets/ViewerCard'
import { PageLayout } from '@/shared/ui/PageLayout'
import { RemainsCard } from '@/widgets/RemainsCard'
import { KingList } from '@/widgets/KingList'

import styles from './Main.module.scss'
import { useGetInLineModal } from '@/widgets/GetInLineModal/model'

export const Main = () => {
    const { setHeaderColor } = useTelegram()
    const { isGetInLineModal } = useGetInLineModal()

    useEffect(() => {
        setHeaderColor('#FFFFFF')
    }, [])

    return (
        <>
            <PageLayout isExpandOffset={isGetInLineModal}>
                <ViewerCard />
                <RemainsCard className={styles['remains-card']} />
                <KingList />
            </PageLayout>
        </>
    )
}