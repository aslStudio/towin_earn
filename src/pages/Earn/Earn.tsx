import { PageLayout } from "@/shared/ui/PageLayout"
import { RewardsList } from "@/widgets/RewardsList"
import { TopRating } from "@/widgets/TopRating"

import styles from './Earn.module.scss'
import { ViewerRatingCard } from "@/widgets/ViewerRatingCard"
import { EarnCardList, EarnCardListProps } from "@/entities/earn"

export const Earn = () => {
    const tasks1: EarnCardListProps = {
        title: ' Earn points',
        data: [
            {
                name: 'Follow on Channel',
                award: 1_500,
                isDone: false,
            },
            {
                name: 'Share in stories',
                award: 1_500,
                isDone: false,
            },
            {
                name: 'Launch the Towim',
                award: 1_500,
                isDone: false,
            },
        ]
    }

    const tasks2: EarnCardListProps = {
        title: ' Daily tasks',
        data: [
            {
                name: 'Boost channel',
                award: 500,
                isDone: false,
            },
            {
                name: 'Invite more Friends',
                award: 500,
                isDone: false,
            },
            {
                name: 'Subscribe to the folder',
                award: 1_000,
                isDone: false,
            },
            {
                name: 'Upgrade rank',
                award: 1_500,
                isDone: false,
            }
        ]
    }

    const tasks3: EarnCardListProps = {
        title: ' Your rewards',
        data: [
            {
                name: 'Daily Check',
                award: 1_500,
                isDone: true,
            },
            {
                name: 'Invited Friends',
                award: 1_500,
                isDone: true,
            },
            {
                name: 'Other Points',
                award: 1_500,
                isDone: true,
            },
        ]
    }

    return <PageLayout isExpandOffset={false}>
        <TopRating />
        <RewardsList className={styles.rewards} />
        <ViewerRatingCard className={styles.share} />
        <EarnCardList {...tasks1} />
        <EarnCardList {...tasks2} />
        <EarnCardList {...tasks3} />
    </PageLayout>
}