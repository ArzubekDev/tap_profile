import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

const ThemeConfig = ({ children }: { children: ReactNode }) => {
  const primaryColorCode = '#fe3650';
  return (
    <div>
      <ConfigProvider
      theme={{
        token: {colorPrimary: primaryColorCode, controlOutline: "none", controlHeight: 45, borderRadius: 12, fontSize: 17},
        components: {Input: {hoverBorderColor: '#d9d9d9'}}
      }}
      >{children}</ConfigProvider>
    </div>
  );
};

export default ThemeConfig;
