import React, { useCallback, useMemo, useState } from "react"

import { Avatar } from "@/shared/ui/Avatar"
import { Button } from "@/shared/ui/Button"

import styles from './GetInLineModal.module.scss'
import { Modal } from "@/shared/ui/Modal"
import { lineModel } from "@/features/line"
import { useTelegram } from "@/shared/lib/hooks/useTelegram"
import Lottie from "react-lottie";
import LottieConfig from "@/shared/assets/animations/test.json";

const image = 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0='

let timeout: NodeJS.Timeout

export const GetInLineModal = React.memo<{
    isActive: boolean
    onClose: () => void
}>(({ isActive, onClose }) => {
    const { isMobileDevice, haptic } = useTelegram()
    const { currentLinePositions, currentLinePositionUpdated } = lineModel.useCurrentLinePositions()
    const { isAnimation, animationHidden } = lineModel.useSuccessAnimation()
    const [bottomOffset, setBottomOffset] = useState(20)

    const onFocus = useCallback(() => {
        if (isMobileDevice) {
            setBottomOffset(window.innerHeight / 2 - 20)
        }
    }, [isMobileDevice])

    function onBlur() {
        timeout = setTimeout(() => {
            setBottomOffset(20)
            clearTimeout(timeout)
        }, 100)
    }

    const buttonView = useMemo(() => {
        if (currentLinePositions === 0) {
            return 'dark'
        }

        return 'green'
    }, [currentLinePositions])
    
    return (
        <Modal
            withOverlay={false} 
            isActive={isActive}
            onClose={onClose}>
            {isAnimation && (
                <div className={styles.animation}>
                    <Lottie
                        options={{
                            loop: false,
                            animationData: LottieConfig,
                        }}
                        width={window.innerWidth}
                        eventListeners={[
                            {
                                eventName: 'complete',
                                callback: animationHidden,
                            }
                        ]}
                    />
                </div>
            )}
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
                    onClick={() => {
                        currentLinePositionUpdated()
                        haptic()
                    }}>
                    Get in line
                </Button>
            </div>
            <input 
                style={{marginBottom: bottomOffset}}
                className={styles.input} 
                placeholder="Message"
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </Modal>
    )
})