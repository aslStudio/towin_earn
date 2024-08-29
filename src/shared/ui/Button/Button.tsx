import React from "react";

import { IconBase, type IconName } from '../IconBase'

import styles from './Button.module.scss'

export type ButtonProps = React.PropsWithChildren<{
    className?: string
    view?: 'dark' | 'surface' | 'blue' | 'transparent' | 'blur'
    size?: 'xs' | 's' | 'm'
    weight?: 'regular' | 'semibold' | 'bold'
    icon?: IconName
    onClick: () => void
}>

export const Button = React.memo<ButtonProps>(({
    className, 
    view = 'dark', 
    size = 'm',
    icon,
    weight = 'regular',
    children,
    onClick
}) => {
    return (
        <button 
            className={[
                styles.root,
                styles[`size-${size}`],
                styles[`view-${view}`],
                styles[`weight-${weight}`],
                className,
            ].join(' ')} 
            onClick={onClick}
        >
            {icon && (
                <IconBase 
                    className={styles.icon} 
                    icon={icon} 
                    width={24} 
                    height={24} 
                />
            )}
            <span>{children}</span>
        </button>
    )
})