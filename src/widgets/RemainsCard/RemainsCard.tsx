import React from "react"

import { useTimer } from "@/shared/lib/hooks/useTimer"
import { Card } from "@/shared/ui/Card"
import { IconBase } from "@/shared/ui/IconBase"
import { useToaster } from "@/shared/lib/providers"
import { useCopyToClipboard } from "@/shared/lib/hooks/useCopy"
import star from '@/shared/assets/animations/star.json'
import lock from '@/shared/assets/animations/lock.json'

import styles from './RemainsCard.module.scss'
import Lottie from "react-lottie";

export type RemainsCardProps = {
    className?: string
}

export const RemainsCard = React.memo<RemainsCardProps>(({ className }) => {
    const { namedView } = useTimer(4708000050)
    const [_, copy] = useCopyToClipboard()

    const { open } = useToaster()

    function openToaster() {
        open({
            title: "You're in line!",
            description: "Watch the queue update and join it again, who knows, maybe you'll be the last one",
            actionText: "Got it",
            action() {
                //
            },
        })
    }

    function openReferalToaster() {
        open({
            title: "Referral link for friends",
            description: "Invite 5 friends and get 5 spots in the queue as a gift! ",
            actionText: "Copy link",
            action() {
                copy('test test')
            },
        })
    }

    // @ts-ignore
    return (
        <div className={className}>
            <Card size="s">
                <div className={styles.row}>
                    <h3 className={styles.title}>Remains to wait</h3>
                    <IconBase 
                        className={styles.icon} 
                        icon="icon-help" 
                        width={20} 
                        height={20} 
                        onClick={openToaster}
                    />
                </div>
                <p className={styles.timer}>
                    <span>{namedView.d}</span> Days :
                    <span>{namedView.h}</span> Hr :
                    <span>{namedView.m}</span> Min :
                    <span>{namedView.s}</span> Sec
                </p>
                <div className={styles.divider} />
                <div className={styles.row}>
                    <div className={styles.info}>
                        <div className={styles.row}>
                            <p className={styles.title}>People in line</p>
                            <IconBase 
                                className={styles.icon} 
                                icon="icon-help" 
                                width={20} 
                                height={20} 
                                onClick={openToaster}
                            />
                        </div>
                        <p className={styles.amount}>256K</p>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.title}>Sent messages</p>
                        <p className={styles.amount}>1.7M</p>
                    </div>
                </div>
            </Card>
            <div className={styles.response}>
                <h5 className={styles['response-title']}>
                    Who’s the last one? <br />
                    The last player will receive
                </h5>
                <div className={[styles.row, styles['present-row']].join(' ')}>
                    <Lottie
                        options={{
                            loop: true,
                            animationData: star,
                        }}
                        width={40}
                        height={40}
                        style={{
                            margin: 0,
                        }}
                    />
                    <p className={styles['response-amount']}>10,000</p>
                    <div
                        className={styles.present}
                        onClick={openReferalToaster}
                    >
                        <Lottie
                            options={{
                                loop: true,
                                animationData: lock,
                            }}
                            width={42}
                            height={42}
                            style={{
                                margin: 0,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})