import Pagination from '@/src/shared/ui/Pagination/Pagination';
import HistoryOrdersContainer from '@/src/widgets/OrderHistoryList/OrderHistoryList';
import HistoryForms from './historyForms';

import style from './style.module.scss';

const HistoryOrdersView: React.FC = () => {
  return (
    <section className={style.history}>
      <HistoryForms />

      <HistoryOrdersContainer />

      <Pagination />
    </section>
  );
};

export default HistoryOrdersView;
