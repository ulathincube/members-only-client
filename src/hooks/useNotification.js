import { useContext } from 'react';
import { NotificationContext } from '../context/Contexts';

function useNotification() {
  const { notification, onUpdateNotification } =
    useContext(NotificationContext);

  return { notification, onUpdateNotification };
}

export default useNotification;
