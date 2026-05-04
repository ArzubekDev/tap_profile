import { FormNumber } from '@/src/features/profile-number';
import { FormNameSurName } from '@/src/features/profile-name-surname';

import style from './style.module.scss';

const PersonalDataView: React.FC = () => {
  return (
    <section className={style.personalData}>
      <FormNameSurName />
      <FormNumber />
    </section>
  );
};

export default PersonalDataView;
