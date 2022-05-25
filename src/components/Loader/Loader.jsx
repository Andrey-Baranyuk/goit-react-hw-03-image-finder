import { SpinnerCircular } from 'spinners-react';
import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles.Loader}>
      <SpinnerCircular size={75} thickness={93} speed={80} color="rgba(57, 89, 172, 1)" secondaryColor="rgba(122, 172, 57, 1)" />
    </div>
  );
}
