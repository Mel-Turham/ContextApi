import { useContext } from 'react';
import { GlobalContext } from './Context';

const useGlobalContext = () => useContext(GlobalContext);
export { useGlobalContext };
