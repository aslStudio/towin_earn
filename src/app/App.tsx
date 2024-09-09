import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import {useTelegram} from "@/shared/lib/hooks/useTelegram";
import LottieConfig from '@/shared/assets/animations/test.json'

import { RouterView } from './router'
import { GetInLineModal } from '@/widgets/GetInLineModal/GetInLineModal';
import { TopListModal } from '@/widgets/TopListModal';
import { lineModel } from '@/features/line';
import Lottie from 'react-lottie';

import styles from './App.module.scss'
import { ToasterProvider } from '@/shared/lib/providers';

function App() {
    const { expand } = useTelegram()

    const { isAnimation, animationHidden } = lineModel.useSuccessAnimation()

    useEffect(() => {
        expand()
    });

  return (
      <BrowserRouter>
        <ToasterProvider>
            {isAnimation && (
                <div className={styles.animation}>
                    <Lottie
                        options={{
                            loop: false,
                            animationData: LottieConfig,
                        }}
                        width={window.innerWidth}
                        eventListeners={[
                            {
                                eventName: 'complete',
                                callback: animationHidden,
                            }
                        ]}
                    />
                </div>
            )}
            <RouterView/>
            <GetInLineModal />
            <TopListModal />
        </ToasterProvider>
      </BrowserRouter>
  );
}

export default App;
