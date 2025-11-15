import { Loader } from "@/modules/shared/components";


export default function loading() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Loader/>
    </div>
  )
}
