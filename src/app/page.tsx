import { ThemeToggle } from "@/modules/theme/presentation/components";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
       <h1 className="text-3xl font-bold mb-4">Dark Mode con Zustand</h1>
       <ThemeToggle/>
    </div>
  );
}
