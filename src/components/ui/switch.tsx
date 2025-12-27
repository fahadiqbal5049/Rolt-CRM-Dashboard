import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  className?: string;
  activeColor?: string;    
  inactiveColor?: string;  
  thumbColor?: string;     
}

function Switch({
  className,
  activeColor = "data-[state=checked]:bg-red-500",
  inactiveColor = "data-[state=unchecked]:bg-[#3F3F46] dark:data-[state=unchecked]:bg-input/80",
  thumbColor = "bg-[#FAFAFA] dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground",
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        activeColor,
        inactiveColor,
        "focus-visible:border-ring focus-visible:ring-ring/50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full ring-0 transition-transform",
          thumbColor,
          "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
