import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  className?: string;
}

export  function Button({className, children, ref, ...props}: ButtonProps) {
  return (
    <button
    ref={ref} 
    className={
      clsx(
        className, "text-center bg-linear-to-r from-dark-blue/80 to-light-blue/80 text-white px-8 py-1.5 rounded-xl border-2 border-white"
    )}
    {...props}
    >
      {children}
    </button>
  )
}
