import React, {useEffect, useState} from 'react'

import { ViewerCard } from '@/widgets/ViewerCard'
import { PageLayout } from '@/shared/ui/PageLayout'
import { RemainsCard } from '@/widgets/RemainsCard'
import { KingList } from '@/widgets/KingList'

import styles from './Main.module.scss'
import {GetInLineModal} from "@/widgets/GetInLineModal/GetInLineModal";

export const Main = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(true)
    }, []);

    return (
        <>
            <PageLayout isExpandOffset={true}>
                <ViewerCard />
                <RemainsCard className={styles['remains-card']} />
                <KingList />
                <GetInLineModal isActive={isOpen} onClose={() => setIsOpen(false)} />
            </PageLayout>
        </>
    )
}