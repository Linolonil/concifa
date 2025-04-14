import Image from "next/image"

export function Logo({ variant = "default", width = 200, height = 60 }) {
  const src = variant === "white" ? "/logo-white.svg" : "/logo.svg"

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt="ConCIFA Logo"
      width={width}
      height={height}
      className="h-auto w-auto"
      priority
    />
  )
}
