import React from 'react';
import ReactDOM from 'react-dom/client';
/* import { HookApp } from './HookApp'; */
/* import { CounterApp } from './components/01-useState/CounterApp';*/
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MultipleCustomHook />
);
