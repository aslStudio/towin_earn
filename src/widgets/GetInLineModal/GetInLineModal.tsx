import React, { useCallback, useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { useLocation } from "react-router-dom"

import { Card } from "@/shared/ui/Card"
import { Avatar } from "@/shared/ui/Avatar"
import { Button } from "@/shared/ui/Button"

import styles from './GetInLineModal.module.scss'
import { useGetInLineModal } from './model'
import { Modal } from "@/shared/ui/Modal"
import { lineModel } from "@/features/line"
import { useTelegram } from "@/shared/lib/hooks/useTelegram"

const image = 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0='

export const GetInLineModal = React.memo(() => {
    const location = useLocation()
    const { isDesktopPlatform } = useTelegram()
    const { isGetInLineModal, opened, closed } = useGetInLineModal()
    const { currentLinePositions, currentLinePositionUpdated } = lineModel.useCurrentLinePositions()
    const [bottomOffset, setBottomOffset] = useState(0)

    const onFocus = useCallback(() => {
        if (!isDesktopPlatform) {
            setBottomOffset(window.innerHeight / 2)
        }
    }, [isDesktopPlatform])

    function onBlur() {
        setBottomOffset(0)
    }

    const buttonView = useMemo(() => {
        if (currentLinePositions === 0) {
            return 'dark'
        }

        return 'green'
    }, [currentLinePositions])    

    useEffect(() => {
        if (location.pathname.includes('last')) {
            opened()
        } else {
            closed()
        }
    }, [location, opened, closed])
    
    return (
        <Modal 
            withOverlay={false} 
            isActive={isGetInLineModal} 
            onClose={closed}>
            <div className={styles.wrapper}>
                <Avatar className={styles.avatar} src={image} size="s" />
                <p className={styles.title}>North_South</p>
                {currentLinePositions > 0 && (
                    <span className={styles.badge}>{currentLinePositions}</span>
                )}
                <Button 
                    className={styles.button}
                    view={buttonView} 
                    size="s" 
                    onClick={currentLinePositionUpdated}>
                    Get in line
                </Button>
            </div>
            <input 
                style={{marginBottom: bottomOffset}}
                className={styles.input} 
                placeholder="Write a Message"
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </Modal>
    )
})