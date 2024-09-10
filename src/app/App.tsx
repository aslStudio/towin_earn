import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import {useTelegram} from "@/shared/lib/hooks/useTelegram";

import { RouterView } from './router'
import { TopListModal } from '@/widgets/TopListModal';

import { ToasterProvider } from '@/shared/lib/providers';

function App() {
    const { expand } = useTelegram()

    useEffect(() => {
        expand()
    });

  return (
      <ToasterProvider>
          <BrowserRouter>
            <RouterView/>
          </BrowserRouter>
          <TopListModal />
      </ToasterProvider>
  );
}

export default App;
