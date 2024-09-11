import React from "react"

import { useTimer } from "@/shared/lib/hooks/useTimer"
import { Card } from "@/shared/ui/Card"
import { IconBase } from "@/shared/ui/IconBase"
import { useToaster } from "@/shared/lib/providers"
import { useCopyToClipboard } from "@/shared/lib/hooks/useCopy"
import star from '@/shared/assets/animations/star.json'
import lock from '@/shared/assets/animations/lock.json'
import background from '@/shared/assets/animations/background-stars.json'

import styles from './RemainsCard.module.scss'
import Lottie from "react-lottie";
import {useTelegram} from "@/shared/lib/hooks/useTelegram";

export type RemainsCardProps = {
    className?: string
}

export const RemainsCard = React.memo<RemainsCardProps>(({ className }) => {
    const { dhms } = useTimer(4708000050)
    const [_, copy] = useCopyToClipboard()
    const { haptic } = useTelegram()

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
                        onClick={() => {
                            haptic()
                            openToaster()
                        }}
                    />
                </div>
                <p className={styles.timer}>
                    <span>{dhms.d}</span> Days :
                    <span>{dhms.h}</span> Hr :
                    <span>{dhms.m}</span> Min :
                    <span>{dhms.s}</span> Sec
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
                                onClick={() => {
                                    haptic()
                                    openToaster()
                                }}
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
                <div className={styles.animation}>
                    <Lottie
                        options={{
                            loop: true,
                            animationData: background
                        }}
                        width={window.innerWidth}
                        height={150}
                    />
                </div>
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
                        onClick={() => {
                            haptic()
                            openReferalToaster()
                        }}
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