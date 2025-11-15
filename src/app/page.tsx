import clsx from "clsx";
// import { ThemeToggle } from "@/modules/theme/presentation/components";
import { GradientTitle } from "@/modules/shared/components";
import { SearchForm } from "@/modules/airports/presentation/components";



export default function Home() {
  return (
    <div className={clsx( "flex gap-24 flex-col min-h-screen items-center justify-center")}>
      {/* <ThemeToggle/> */}
      <GradientTitle as="h1" className="text-7xl font-bold text-center">SkyConnect Explorer</GradientTitle>
      <div className="w-5/12 flex flex-col gap-6 items-center">
        <SearchForm/>
      </div>

    </div>
  );
}
