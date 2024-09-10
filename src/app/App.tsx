import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import {useTelegram} from "@/shared/lib/hooks/useTelegram";

import { RouterView } from './router'
import { GetInLineModal } from '@/widgets/GetInLineModal/GetInLineModal';
import { TopListModal } from '@/widgets/TopListModal';

import { ToasterProvider } from '@/shared/lib/providers';

function App() {
    const { expand } = useTelegram()

    useEffect(() => {
        expand()
    });

  return (
      <BrowserRouter>
        <ToasterProvider>
            <RouterView/>
        </ToasterProvider>
        <TopListModal />
        <GetInLineModal />
      </BrowserRouter>
  );
}

export default App;
