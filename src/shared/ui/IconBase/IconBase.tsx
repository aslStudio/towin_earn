import React from "react"

import { images } from '@/shared/assets'

export type IconName = 'icon-share'

export type IconBaseProps = {
    className?: string
    icon: keyof typeof images.icons
    width: number
    height: number
    onClick?: () => void
}

export const IconBase = React.memo<IconBaseProps>(({
    className,
    icon,
    width,
    height,
    onClick
}) => {
    return <img 
        className={className}
        src={images.icons[icon]}
        width={width}
        height={height}
        onClick={onClick}
    />
})