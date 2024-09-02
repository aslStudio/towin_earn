import { Loader } from '@/shared/ui/Loader'
import { topListModel } from '../../model'

import { TopListItemCell } from '../TopListItem'

import styles from './TopList.module.scss'

export const TopList = () => {
    const { list, isPending } = topListModel.useTopList()

    return (
        <div 
            className={[
                styles.root,
                isPending ? styles['is-loader'] : styles['is-list']
            ].join(' ')}
        >
            <div className={styles.loader}>
                <Loader />
            </div>
            <div className={styles.list}>
                {list.map(item => <TopListItemCell key={item.id} {...item} />)}
            </div>
        </div>
    )
}