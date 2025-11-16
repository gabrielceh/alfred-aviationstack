import {  ReactNode } from "react";
import styles from "./card-layout.module.css"
import clsx from "clsx";

interface CardLayoutProps {
  children: ReactNode;
  className?: string;
}

export function CardLayout({children, className}: CardLayoutProps) {
  return (
    <article className={clsx(
      "border border-foreground rounded-md px-8 py-6 min-h-44 bg-linear-to-r from-slate-600 to-slate-900 relative hover:shadow-lg",
      className
      )}
    >
      <div className={styles.bgPlane}></div>
      {children}
    </article>
  )
}
