import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

const ThemeConfig = ({ children }: { children: ReactNode }) => {
  const primaryColorCode = '#fe3650';
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: primaryColorCode,
            controlOutline: 'none',
            controlHeight: 38,
            borderRadius: 12,
            fontSize: 14,
          },
          components: {
            Input: {
              controlHeight: 42,
            },
            Select: {
              controlHeight: 42,
            },
            DatePicker: {
              controlHeight: 42,
            },
            Button: {
              fontWeight: 700,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
};

export default ThemeConfig;
