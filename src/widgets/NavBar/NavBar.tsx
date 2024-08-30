import React, { useMemo } from "react"
import { Link, useLocation } from "react-router-dom"

import { capitalizeFirstLetter } from "@/shared/lib/string"

import styles from './NavBar.module.scss'
import { IconBase, IconBaseProps } from "@/shared/ui/IconBase"

export const NavBar = () => {
    const location = useLocation()

    const classes = useMemo(() => [
        styles.navbar,
        (
            location.pathname.includes('last') || 
            location.pathname.includes('earn')
        ) && styles['is-showed']
    ].join(' '), [location])

    return (
        <div className={classes}>
            <NavBarButton type="last" />
            <NavBarButton type="earn" />
        </div>
    )
}

type NavBarButtonProps = {
    type: 'last' | 'earn'
}

const NavBarButton = React.memo<NavBarButtonProps>(({ type }) => {
    const location = useLocation()

    const classes = useMemo(() => [
        styles.button,
        location.pathname.includes(type) && styles['is-active']
    ].join(' '), [type, location])

    const image = useMemo<{
        default: IconBaseProps['icon'],
        active: IconBaseProps['icon']
    }>(() => {
        if (type === 'last') {
            return {
                default: 'icon-users',
                active: 'icon-users-active'
            }
        }

        return {
            default: 'icon-premium',
            active: 'icon-premium-active'
        }
    }, [type])
    
    return (
        <Link className={classes} to={`/${type}`}>
            <div className={styles.icon}>
                <IconBase 
                    className={styles['icon-active']} 
                    icon={image.active}
                    width={28}
                    height={28}
                />
                <IconBase
                    className={styles['icon-inactive']} 
                    icon={image.default}
                    width={28}
                    height={28}
                />
            </div>
            <p className={styles.text}>{capitalizeFirstLetter(type)}</p>
        </Link>
    )
})