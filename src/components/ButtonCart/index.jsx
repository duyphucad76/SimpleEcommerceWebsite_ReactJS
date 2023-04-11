import React from "react";
import { Link } from "react-router-dom";
import "./ButtonCart.scss";
export default function ButtonCart({
  to,
  href,
  children,
  disabled,
  onClick,
  ...props
}) {
  let Comp = "button";
  const _prop = {
    onClick,
    ...props,
  };

  if (to) {
    _prop.to = to;
    Comp = Link;
  } else if (href) {
    _prop.href = href;
    Comp = "a";
  }

  if (disabled) {
    Object.keys(_prop).forEach((key) => {
      if (key.startsWith("on") && typeof _prop[key] === "function") {
        delete _prop[key];
      }
    });
  }

  return (
    <Comp className="button__cart__wrapper" {..._prop}>
      {children}
    </Comp>
  );
}
