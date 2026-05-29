// # Create the file with proper content using a here-string
// @'
import * as React from "react"
import * as RadixPopover from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"

const Megamenu = RadixPopover.Root
const MegamenuTrigger = RadixPopover.Trigger
const MegamenuPortal = RadixPopover.Portal

const MegamenuContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <RadixPopover.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MegamenuContent.displayName = RadixPopover.Content.displayName

const MegamenuArrow = React.forwardRef(({ className, ...props }, ref) => (
  <RadixPopover.Arrow
    ref={ref}
    className={cn("fill-popover", className)}
    {...props}
  />
))
MegamenuArrow.displayName = RadixPopover.Arrow.displayName

export { Megamenu, MegamenuTrigger, MegamenuContent, MegamenuPortal, MegamenuArrow }
// '@ | Out-File -FilePath "src\components\ui\megamenu.jsx" -Encoding utf8 -NoNewline