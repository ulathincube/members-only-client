import { ErrorContext } from '../context/Contexts';
import { useContext } from 'react';

function useError() {
  const { error, onErrorChange } = useContext(ErrorContext);

  return { error, onErrorChange };
}

export default useError;
