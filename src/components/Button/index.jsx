import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export default function Button({
  to,
  href,
  primary,
  outline,
  onClick,
  medium,
  large,
  disabled,
  children,
  ...props
}) {
  let Comp = "button";

  const _prop = {
    onClick,
    ...props,
  };

  // remove event listeners when button is disabled
  if (disabled) {
    Object.keys(_prop).forEach((key) => {
      if (key.startsWith("on") && typeof _prop[key] === "function") {
        delete _prop[key];
      }
    });
  }

  if (to) {
    _prop.to = to;
    Comp = Link;
  } else if (href) {
    _prop.href = href;
    Comp = "a";
  }

  return (
    <Comp
      className={`button-wrapper 
      ${primary ? "primary" : ""} ${outline ? "outline" : ""}
      ${medium ? "medium" : ""} 
      ${large ? "large" : ""}
      `}
      {..._prop}
    >
      <span>{children}</span>
    </Comp>
  );
}
