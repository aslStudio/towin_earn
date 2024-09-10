import React from 'react'

import { ViewerCard } from '@/widgets/ViewerCard'
import { PageLayout } from '@/shared/ui/PageLayout'
import { RemainsCard } from '@/widgets/RemainsCard'
import { KingList } from '@/widgets/KingList'

import styles from './Main.module.scss'

export const Main = () => {
    return (
        <>
            <PageLayout isExpandOffset={true}>
                <ViewerCard />
                <RemainsCard className={styles['remains-card']} />
                <KingList />
            </PageLayout>
        </>
    )
}