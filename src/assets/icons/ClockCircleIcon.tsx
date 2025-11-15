import { IconProps } from "@/core/types";
import { SVGProps } from "react"

export const ClockCircleIcon = ({width = 800, height = 800, color= "#fff", ...props}: SVGProps<SVGSVGElement> & IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 800 800"
    fill="none"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={51.054}
      d="M399.998 266.665v133.333l83.333 83.334"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={51.054}
      d="M233.34 111.261c49.028-28.362 105.952-44.594 166.666-44.594C584.101 66.666 733.34 215.904 733.34 400c0 184.095-149.239 333.333-333.334 333.333S66.673 584.095 66.673 400c0-60.715 16.232-117.638 44.594-166.667"
    />
  </svg>
)

