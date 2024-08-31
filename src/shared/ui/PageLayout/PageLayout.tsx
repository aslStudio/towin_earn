import React from "react";

import { usePageScrollState } from './model'
import styles from './PageLayout.module.scss'

export type PageLayoutProps = React.PropsWithChildren<{
    isExpandOffset: boolean
}>

export const PageLayout = React.memo<PageLayoutProps>(({ 
    isExpandOffset,
    children 
}) => {
    const { isDisabled } = usePageScrollState()

    return (
        <div className={[
            styles.root, 
            isExpandOffset && styles['is-expand-offset'],
            isDisabled && styles['is-disabled']
        ].join(' ')}>
            {children}
        </div>
    )
})