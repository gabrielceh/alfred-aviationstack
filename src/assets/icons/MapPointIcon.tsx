import { IconProps } from "@/core/types";
import { SVGProps } from "react"

export const MapPointIcon = ({width = 800, height = 800, color= "#fff", ...props}: SVGProps<SVGSVGElement> & IconProps) => (
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
      strokeWidth={46.545}
      d="M416.667 234.715A100.71 100.71 0 0 0 400 233.333c-55.228 0-100 44.771-100 100 0 55.228 44.772 100 100 100s100-44.772 100-100c0-5.679-.473-11.247-1.383-16.667"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={46.545}
      d="M166.663 507.204c-21.582-55.13-33.333-113.825-33.333-169.093 0-149.914 119.39-271.443 266.666-271.443S666.663 188.197 666.663 338.11c0 148.739-85.111 322.303-217.902 384.371-30.956 14.469-66.573 14.469-97.529 0-42.411-19.823-79.959-51.019-111.423-89.148"
    />
  </svg>
)

