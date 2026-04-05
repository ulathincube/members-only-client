import { useState } from 'react';
import messageServices from '../services/messages';
import useAuth from '../hooks/useAuth';
import styles from './CreateMessage.module.css';
import Button from './Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function CreateMessage() {
  const [message, setMessage] = useState('');

  const queryClient = useQueryClient();

  const newMessageMutation = useMutation({
    mutationFn: messageServices.createMessage,
    onSuccess: () => {
      queryClient.invalidateQueries(['messages']);
    },
  });

  const { user } = useAuth();

  const authorId = user.user.user_id;

  const onSubmitMessageHandler = async event => {
    event.preventDefault();

    const messageData = {
      author: authorId,
      message,
    };

    // const newMessage = await messageServices.createMessage(messageData);

    newMessageMutation.mutate(messageData);

    setMessage('');

    // console.log({ response });
  };

  return (
    <form className={styles['new-message']} onSubmit={onSubmitMessageHandler}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor='message'>
          Send A Message
        </label>
        <textarea
          className={styles.message}
          id='message'
          name='message'
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></textarea>
      </div>
      <div className={styles.action}>
        <Button type='submit'>Send Message</Button>
      </div>
    </form>
  );
}

export default CreateMessage;
