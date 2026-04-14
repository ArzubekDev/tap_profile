import FormNumber from './forms/formNumber';
import FormProfile from './forms/formProfile';

import style from './style.module.scss';

const PersonalData = () => {

  return (
    <div className={style.personalData}>
     <FormProfile/>
      <FormNumber />
    </div>
  );
};

export default PersonalData;
