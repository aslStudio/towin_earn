import { Modal } from "@/shared/ui/Modal"
import { IconBase } from "@/shared/ui/IconBase"

import { useTopListModal } from './model'

import styles from './TopListModal.module.scss'
import { Tabs } from "@/shared/ui/Tabs"
import { useState } from "react"

const tabsData = [
    {
        id: 1,
        text: 'Week'
    },
    {
        id: 2,
        text: 'Season'
    },
    {
        id: 3,
        text: 'All Time'
    },
]

export const TopListModal = () => {
    const { isTopListModal, closed } = useTopListModal()
    const [active, setActive] = useState(1)

    return (
        <Modal
            isActive={isTopListModal}
            withOverlay={true}
            onClose={closed}
        >
            <div className={styles.header}>
                <div className={styles.title}>
                    <IconBase 
                        icon={'icon-flag'} 
                        width={23} 
                        height={23} 
                    />
                    <h5>Top 99</h5>
                </div>
                <IconBase 
                    className={styles.close}
                    icon={'icon-close'} 
                    width={28} 
                    height={28} 
                    onClick={closed}
                />
            </div>
            <Tabs 
                active={active} 
                data={tabsData} 
                onChange={setActive}
            />
        </Modal>
    )
}