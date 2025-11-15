
import { IconProps } from "@/core/types";
import { SVGProps } from "react"

export const InfoCircleIcon = ({width = 800, height = 800, color= "#fff", ...props}: SVGProps<SVGSVGElement> & IconProps) => (
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
      strokeWidth={59.273}
      d="M399.997 566.665v-200"
    />
    <circle
      cx={33.333}
      cy={33.333}
      r={33.333}
      fill={color}
      transform="matrix(1 0 0 -1 366.663 300)"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={59.273}
      d="M233.334 111.262C282.363 82.9 339.286 66.668 400.001 66.668c184.095 0 333.333 149.238 333.333 333.333 0 184.095-149.238 333.333-333.333 333.333-184.095 0-333.333-149.238-333.333-333.333 0-60.715 16.232-117.638 44.594-166.667"
    />
  </svg>
)