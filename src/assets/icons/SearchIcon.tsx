import { IconProps } from "@/core/types";
import { SVGProps } from "react"

export const SearchIcon = ({width = 32, height = 32, color= "#fff", ...props}: SVGProps<SVGSVGElement> & IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M26.407 14.503c0 6.574-5.33 11.904-11.904 11.904S2.6 21.077 2.6 14.503 7.93 2.6 14.503 2.6c6.575 0 11.904 5.329 11.904 11.903Z"
      opacity={0.5}
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M24.49 24.49a.94.94 0 0 1 1.33 0l2.505 2.506a.94.94 0 0 1-1.329 1.329l-2.506-2.506a.94.94 0 0 1 0-1.33Z"
      clipRule="evenodd"
    />
  </svg>
)
