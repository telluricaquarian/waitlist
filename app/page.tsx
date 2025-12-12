import { RotatingCube } from "@/components/rotating-cube"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div style={{ perspective: "1000px" }}>
        <RotatingCube />
      </div>
    </main>
  )
}
