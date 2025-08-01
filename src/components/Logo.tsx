import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.svg" alt="Chat Connect" width={24} height={24} />
      <span className="text-md font-medium">Chat Connect</span>
    </div>
  )
}
