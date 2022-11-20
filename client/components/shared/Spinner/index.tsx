import { Loader } from '@mantine/core';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Loader />
    </div>
  );
};

export default Spinner;
