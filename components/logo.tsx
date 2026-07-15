import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  variant?: 'default' | 'light'
  showText?: boolean
}

export function Logo({ className, variant = 'default', showText = true }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5">
        <Image
          src="/logo.png"
          alt="Code Solution"
          width={36}
          height={36}
          className="size-9 object-contain"
          priority
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'text-base font-extrabold tracking-tight',
              variant === 'light' ? 'text-white' : 'text-navy',
            )}
          >
            Code<span className="text-primary"> Solution</span>
          </span>
          <span
            className={cn(
              'mt-0.5 text-[10px] font-medium tracking-[0.14em] uppercase',
              variant === 'light' ? 'text-white/60' : 'text-muted-foreground',
            )}
          >
            Tecnologia que transforma
          </span>
        </span>
      )}
    </span>
  )
}
