import clsx from "clsx";

interface ErrorProps {
  className?: string;
  message?: string;
  children?: React.ReactNode;
}

export function Error({className, message, children}: ErrorProps) {
  return (
    <div className={clsx("flex flex-col gap-4 items-center justify-center", className)}>
      <span className="text-4xl font-bold">Error</span>
      {message && <span className="text-sm text-center">{message}</span>}
      {children}
    </div>
  )
}
