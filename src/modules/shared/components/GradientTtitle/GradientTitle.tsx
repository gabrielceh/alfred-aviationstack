import clsx from "clsx";
import {JSX, FC, ReactNode } from "react";

type GradientTitleProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements; // h1 | h2 | h3 | p | span...
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
};

export const GradientTitle: FC<GradientTitleProps> = ({
  children,
  as: Tag = "h1",
  className = "",
  gradientFrom = "from-dark-blue",
  gradientTo = "to-light-blue",
}) => {
  return (
    <Tag
      className={clsx("bg-linear-to-r", gradientFrom, gradientTo, "bg-clip-text text-transparent tracking-tight",className)}
    >
      {children}
    </Tag>
  );
};
