'use client'

import { Button, ButtonProps } from '@nextui-org/react'
import { twMerge } from 'tailwind-merge'

type TAddButton = { children: string; className?: string } & ButtonProps
export const AddButton = ({ children, className, ...props }: TAddButton) => {
  return (
    <Button {...props} className={twMerge('px-4 py-2 text-white', className)}>
      {children}
    </Button>
  )
}
