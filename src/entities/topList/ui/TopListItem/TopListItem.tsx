import React, { useMemo } from "react";

import { Avatar, AvatarProps } from "@/shared/ui/Avatar";
import { toFormattedNumber } from "@/shared/lib/number";
import { IconBase } from "@/shared/ui/IconBase";

import { TopListItem } from '../../model'

import styles from './TopListItem.module.scss'

export type TopListItemCellProps = TopListItem & {
    className?: string
}

export const TopListItemCell = React.memo<TopListItemCellProps>(({
    className,
    avatar,
    name,
    award,
    stars,
    id,
}) => {
    const avatarProps = useMemo<AvatarProps>(() => {
        switch (id) {
            case 1:
                return {
                    src: avatar,
                    view: 'gold',
                    size: 'l',
                    initials: name[0].toUpperCase()
                }
            case 2:
                return {
                    src: avatar,
                    view: 'silver',
                    size: 'm',
                    initials: name[0].toUpperCase()
                }
            case 3:
                return {
                    src: avatar,
                    view: 'bronse',
                    size: 'm',
                    initials: name[0].toUpperCase()
                }
            default:
                return {
                    src: avatar,
                    size: 's',
                    initials: name[0].toUpperCase()
                }
        }
    }, [id, avatar, name])

    const view = useMemo<AvatarProps['view']>(() => {
        switch (id) {
            case 1:
                return 'gold'
            case 2:
                return 'silver'
            case 3:
                return 'bronse'
            default:
                return 'none'
        }
    }, [id])

    return (
        <div className={[styles.root, styles[`is-${view}`]].join(' ')}>
            <Avatar className={styles.avatar} {...avatarProps} />
            <div className={styles.info}>
                <p className={styles.title}>#{id} <span>{name}</span></p>
                <p className={styles.description}>{toFormattedNumber(award)} 💎</p>
            </div>
            <div className={styles.stars}>
                <p>{toFormattedNumber(stars)}</p>
                <IconBase 
                    icon={'icon-star-gold'} 
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
})