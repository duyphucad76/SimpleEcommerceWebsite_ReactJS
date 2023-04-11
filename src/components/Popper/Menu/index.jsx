import React, { Children } from "react";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as WrapperPopper } from "../../Popper";
import "./Menu.scss";
import MenuItem from "./MenuItem";
export default function Menu({ children, position, menupage, items = [] }) {
  const renderMenus = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive
      delay={[0, 400]}
      placement={position}
      render={(attrs) => (
        <div className={`menu-top__items ${menupage}`} tabIndex="-1" {...attrs}>
          <WrapperPopper>{renderMenus()}</WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
