import React, { useEffect } from 'react'

import { ViewerCard } from '@/widgets/ViewerCard'
import { PageLayout } from '@/shared/ui/PageLayout'
import { RemainsCard } from '@/widgets/RemainsCard'
import { KingList } from '@/widgets/KingList'

import styles from './Main.module.scss'
import { useGetInLineModal } from '@/widgets/GetInLineModal/model'
import {GetInLineModal} from "@/widgets/GetInLineModal/GetInLineModal";

export const Main = () => {
    const { opened } = useGetInLineModal()

    useEffect(() => {
        opened()
    }, [opened])

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