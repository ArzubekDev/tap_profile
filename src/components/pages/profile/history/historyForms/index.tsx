'use client'
import { useState } from "react";
import { Button, Modal, Badge } from "antd";
import { SearchOutlined, ControlOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputFormController, SelectFormController } from "@/src/components/form/Controllers";
import { THistoryForm, ZhistoryForm } from "../zod/zod";
import style from "./style.module.scss";

const HistoryForms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { control, handleSubmit, reset, watch } = useForm<THistoryForm>({
    resolver: zodResolver(ZhistoryForm),
    defaultValues: {
      name: '',
      status: 'all',
      store: 'all',
    },
  });

  const onSubmit = (data: THistoryForm) => {
    console.log(data);
    setIsModalOpen(false);
  };

  return (
    <div className={style.headerContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.formWrapper}>
        
        <div className={style.searchBar}>
          <InputFormController
            id="searchName"
            name="name"
            placeholder="Поиск товаров"
            prefix={<SearchOutlined style={{ color: '#8c8c8c' }} />}
            control={control}
            className={style.customInput}
          />
        </div>

        <Button 
          icon={<ControlOutlined />} 
          onClick={() => setIsModalOpen(true)}
          className={style.filterButton}
        >
          Все фильтры
        </Button>

        <Modal
          title="Фильтры"
          open={isModalOpen}
          onOk={handleSubmit(onSubmit)}
          onCancel={() => setIsModalOpen(false)}
          okText="Применить"
          cancelText="Сбросить"
          okButtonProps={{ style: { backgroundColor: '#1890ff' } }}
        >
          <div className={style.modalFilters}>
            <SelectFormController
              name="status"
              control={control}
              label="Статус"
              options={statusOptions}
            />
            <SelectFormController
              name="store"
              control={control}
              label="Магазин"
              options={storeOptions}
            />
          </div>
        </Modal>
      </form>
    </div>
  );
};

export default HistoryForms;

const statusOptions = [
  { value: 'all', label: 'Все статусы' },
  { value: 'new', label: 'Новый' },
  { value: 'confirmed', label: 'Подтвержден' },
  { value: 'pending_payment', label: 'Ожидает оплаты' },
  { value: 'paid', label: 'Оплачен' },
  { value: 'processing', label: 'В обработке' },
  { value: 'shipped', label: 'Передан в доставку' },
  { value: 'delivering', label: 'Доставляется' },
  { value: 'delivered', label: 'Доставлен' },
  { value: 'canceled', label: 'Отменен' },
  { value: 'refund', label: 'Возврат' },
  { value: 'completed', label: 'Завершён' },
];
const storeOptions = [
  { value: 'all', label: 'Все магазины' },
  { value: 'store', label: 'Магазин' },
];