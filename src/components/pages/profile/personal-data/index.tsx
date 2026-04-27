import FormNumber from './forms/formNumber';
import FormProfile from './forms/formProfile';

import style from './style.module.scss';

const PersonalDataView: React.FC = () => {

  return (
    <section className={style.personalData}>
     <FormProfile/>
      <FormNumber />
    </section>
  );
};

export default PersonalDataView;
