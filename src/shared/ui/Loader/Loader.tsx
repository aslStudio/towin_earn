import React from 'react'
import LoaderBrand from '@/shared/assets/images/common/spinner-brand.png'

import styles from './Loader.module.scss'

export type LoaderProps = {
    className?: string
}

export const Loader = React.memo<LoaderProps>(({
    className
}) => {
    return (
        <img 
            className={[
                styles.root, 
                className ? className : ''
            ].join(' ')}
            src={LoaderBrand} 
            alt='loader' 
        />
    )
})