import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import {useTelegram} from "@/shared/lib/hooks/useTelegram";

import { RouterView } from './router'
import { NavBar } from '@/widgets/NavBar';

function App() {
    const { expand } = useTelegram()

    useEffect(() => {
        expand()
    });

  return (
      <BrowserRouter>
          <RouterView/>
          <NavBar />
      </BrowserRouter>
  );
}

export default App;
