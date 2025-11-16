"use client"

import {  ReactNode } from "react";
import styles from "./card-layout.module.css";
import clsx from "clsx";
import { useThemeStore } from "@/modules/theme/store";

interface CardLayoutProps {
  children: ReactNode;
  className?: string;
}

export function CardLayout({children, className}: CardLayoutProps) {
  const theme = useThemeStore(state=>state.theme)

  return (
    <article className={clsx(
      "border border-foreground rounded-md px-8 py-6 min-h-44  relative hover:shadow-lg",
      theme === "light" ? "bg-linear-to-r from-slate-300 to-slate-500" : "bg-linear-to-r from-slate-600 to-slate-900",
      className
      )}
    >
      <div className={styles.bgPlane}></div>

      {children}
    </article>
  )
}
