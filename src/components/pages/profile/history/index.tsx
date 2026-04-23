
import HistoryOrders from '@/src/shared/ui/HIstoryOrders/HistoryOrders';
import HistoryForms from './historyForms';
import style from './style.module.scss';
import Pagination from '@/src/shared/ui/Pagination/Pagination';

const History: React.FC = () => {
  return (
    <section className={style.history}>
      {/* HistoryForms компонент*/}
      <HistoryForms />

      <HistoryOrders/>
      <Pagination/>
    </section>
  );
};

export default History;
