import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import {useTelegram} from "@/shared/lib/hooks/useTelegram";

import { RouterView } from './router'
import { NavBar } from '@/widgets/NavBar';
import { GetInLineModal } from '@/widgets/GetInLineModal/GetInLineModal';
import { TopListModal } from '@/widgets/TopListModal';

function App() {
    const { expand } = useTelegram()

    useEffect(() => {
        expand()
    });

  return (
      <BrowserRouter>
          <RouterView/>
          <NavBar />
          <GetInLineModal />
          <TopListModal />
      </BrowserRouter>
  );
}

export default App;
