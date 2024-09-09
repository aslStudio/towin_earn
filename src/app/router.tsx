import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";

import { Main } from "@/pages/Main/Main";
import { Auth } from "@/pages/Auth/Auth";
import { Earn } from "@/pages/Earn/Earn";
import { Record } from "@/pages/Record/Record";
import { Referral } from '@/pages/Referal/Referal'
import { isFirstUseModel } from "@/shared/model/is-first-use";

export const RouterView = React.memo(() => {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState<'fade-in' | 'fade-out'>('fade-in');
    const [isFirstUse, setIsFirstUse] = useState(false)

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fade-out");
    }, [location, displayLocation]);

    useEffect(() => {
        console.log(window.localStorage.getItem('is-first-use'))
        
        setIsFirstUse(isFirstUseModel.getIsFirstUse())
        isFirstUseModel.setIsFirstUse(true)
    }, [])

    return (
        <div
            className={transitionStage}
            onAnimationEnd={() => {
                if (transitionStage === 'fade-out') {
                    setTransitionStage('fade-in')
                    setDisplayLocation(location)
                }
            }}
        >
            <Routes location={displayLocation}>
                <Route path={'/'} element={isFirstUse ? <Auth /> : <Referral />} />
                <Route path={'/last'} element={<Main />} />
                <Route path={'/earn'} element={<Earn />} />
                <Route path={'/record'} element={<Record />} />
            </Routes>
        </div>
    )
})
