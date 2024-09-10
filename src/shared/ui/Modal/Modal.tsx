import React, {useEffect, useMemo} from "react";
import { createPortal } from "react-dom";

import { Card } from "../Card";

import styles from './Modal.module.scss'

export type ModalProps = React.PropsWithChildren<{
    isActive: boolean
    withOverlay?: boolean
    onClose?: () => void
}>

export const Modal = React.memo<ModalProps>(({
    children,
    isActive,
    onClose
}) => {
    const classes = useMemo(() => [
        styles.root,
        isActive ? styles['is-active'] : '',
    ].join(' '), [
        isActive,
    ])

    return createPortal(
        <div className={classes}>
            <div
                className={styles.overlay}
                onClick={onClose}
            />
            <Card
                className={styles.card}
                size="l"
                rounded="top"
            >
                {children}
            </Card>
        </div>,
        document.body
    )
})