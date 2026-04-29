"use client";

import { FC, useEffect, useState } from "react";
import { Popover, PopoverProps } from "antd";
import { isFunction, isNil } from "lodash";
import cn from "classnames";

export type TWrapperClassName = {
  wrapperClassName?: string;
};

export type TWrapperClassPrefix = {
  wrapperClassPrefix?: string;
};

export type TPopoverLayoutProps = {
  renderInWrapper?: boolean;
  isPopoverOpen?: boolean;
  innerClassName?: string;
} & PopoverProps &
  TWrapperClassName &
  Partial<TWrapperClassPrefix>;

const PopoverLayout: FC<TPopoverLayoutProps> = (props) => {
  const classPrefix = "custom-popover";
  const {
    wrapperClassName,
    wrapperClassPrefix,
    renderInWrapper = false,
    children,
    trigger,
    isPopoverOpen,
    onOpenChange,
    rootClassName,
    innerClassName,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (newVisible: boolean) => {
    setIsOpen(newVisible);
  };

  useEffect(() => {
    if (!isNil(isPopoverOpen)) {
      setIsOpen(isPopoverOpen);
    }
  }, [isPopoverOpen]);

  return (
    <Popover
      className={cn(`${classPrefix}_wrapper`, wrapperClassName, {
        [`_${wrapperClassPrefix}`]: wrapperClassPrefix,
      })}
      rootClassName={cn(`${classPrefix}_root__wrapper`, rootClassName, {
        [`_${wrapperClassPrefix}`]: wrapperClassPrefix,
      })}
      classNames={{
        root: "root_root_root",
        content: innerClassName,
      }}
      trigger={trigger || "click"}
      open={isOpen}
      onOpenChange={(val) => {
        handleOpenChange(val);
        if (isFunction(onOpenChange)) {
          onOpenChange(val);
        }
      }}
      getPopupContainer={(triggerNode) =>
        renderInWrapper
          ? triggerNode?.parentElement || document.body
          : document.body
      }
      {...rest}
    >
      {children}
    </Popover>
  );
};

export default PopoverLayout;
