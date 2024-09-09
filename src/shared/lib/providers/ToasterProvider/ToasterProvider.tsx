import React, { createContext, useCallback, useContext, useEffect, useState } from "react"

import styles from './ToasterProvider.module.scss'
import { Button } from "@/shared/ui/Button"
import { IconBase } from "@/shared/ui/IconBase"

type ToasterParams = {
    title: string
    description: string
    actionText: string
    action: () => void
}

type Context = {
    open: (params: ToasterParams) => void
}

const ToasterContext = createContext<Context>({
    open: () => {}
})

let timeout: NodeJS.Timeout
let closeTimeout: NodeJS.Timeout

export const ToasterProvider = React.memo<React.PropsWithChildren>(({
    children
}) => {
    const [ params, setParams ] = useState<ToasterParams | null>(null)
    const [ isActive, setIsActive ] = useState(false)

    const open = useCallback((data: ToasterParams) => {
        if (!isActive) {
            setParams(data)
            setIsActive(true)
        } else {
            setIsActive(false)
            timeout = setTimeout(() => {
                setParams(data)
                setIsActive(true)
            }, 300)
        }
    }, [isActive])

    useEffect(() => {
        if (isActive) {
            closeTimeout = setTimeout(() => {
                setIsActive(false)
                clearTimeout(closeTimeout)
            }, 3000)
        } else {
            clearTimeout(closeTimeout)
        }
    }, [isActive])

    return (
        <ToasterContext.Provider value={{
            open
        }}>
            <div className={[
                styles.root,
                isActive ? styles['is-active'] : ''
            ].join(' ')}>
                <div>
                    <p className={styles.title}>{params?.title}</p>
                    <p className={styles.description}>{params?.description}</p>
                    <Button 
                        className={styles.button}
                        view="blue" 
                        size="s" 
                        onClick={() => {
                            setIsActive(false)
                            params?.action()
                        }}>
                            {params?.actionText}
                    </Button>
                </div>
                <IconBase
                    className={styles.close}
                    icon={'icon-close'} 
                    width={28} 
                    height={28} 
                    onClick={() => setIsActive(false)}
                />
            </div>
            {children}
        </ToasterContext.Provider>
    )
})

export const useToaster = () => useContext(ToasterContext)