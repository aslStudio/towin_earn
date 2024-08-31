import { useTelegram } from "@/shared/lib/hooks/useTelegram"
import { Button } from "@/shared/ui/Button"
import { Card } from "@/shared/ui/Card"
import { IconBase } from "@/shared/ui/IconBase"

import styles from './ViewerRatingCard.module.scss'
import React from "react"

export type ViewerRatingCardProps = {
    className: string
}

export const ViewerRatingCard = React.memo<ViewerRatingCardProps>(({
    className
}) => {
    const { sendInviteLink } = useTelegram()

    const link = 'tow.im/ceosasha'

    return (
        <Card className={className} size="l">
            <div className={styles.link}>
                <p>{link}</p>
                <IconBase icon="icon-link" width={24} height={24} />
            </div>
            <p className={styles.description}>This is your referral link. Invite a regular user +150, Invite a premium user +500 tokens</p>
            <Button
                view="blue"
                weight={'semibold'}
                size={'m'}
                onClick={() => sendInviteLink(link)}>
                    Share Link
            </Button>
        </Card>
    )
})