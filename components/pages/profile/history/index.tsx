import { Input, Select } from 'antd';
import style from './style.module.scss';
import { Option } from 'antd/es/mentions';

const History = () => {
  return (
    <div>
      <h3>История заказов</h3>
      <form>
        <div className={style.top}>
          <div className={style.innerTop}>
            <label htmlFor="search">
              <input type="text" />
              Имя
            </label>
            <Input
              id="search"
              className={style.searchInput}
              placeholder="Имя, фамилия, телефон..."
              maxLength={150}
              variant="borderless"
            />
          </div>
          <div className={style.innerTop}>
            <label htmlFor="status">
              <input type="text" />
              Статус
            </label>
            <Select
              id="status"
              className={style.searchInput}
            >
              <Option>alkdsjfalsd</Option>
            </Select>
          </div>

        </div>
        <div className={style.center}>
          <label htmlFor=""></label>
        </div>
        <div className={style.bottom}></div>
      </form>
    </div>
  );
};

export default History;
