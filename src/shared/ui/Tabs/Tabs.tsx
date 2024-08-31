import React from "react"

import styles from './Tabs.module.scss'

export type TabsProps = {
    className?: string
    active: number
    data: {
        id: number
        text: string
    }[]
    onChange: (v: number) => void
}

export const Tabs = React.memo<TabsProps>(({
    className,
    active,
    data,
    onChange
}) => {
    return (
        <div className={[styles.root, className].join(' ')}>
            {data.map(item => (
                <button 
                    className={[
                        styles.item, 
                        active === item.id ? styles['is-active'] : ''
                    ].join(' ')}
                    onClick={() => onChange(item.id)}>
                    {item.text}
                </button>
            ))}
        </div>
    )
})