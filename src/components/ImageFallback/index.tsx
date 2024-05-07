'use client'

import Image, { ImageProps } from 'next/image'
import { useState, forwardRef, Ref, memo } from 'react'

type ImageFallbackProps = {
  fallback?: string
} & ImageProps

const ImageFallback = forwardRef(
  (
    {
      src,
      alt,
      className,

      fallback: customFallback = '/default.webp',
      ...props
    }: ImageFallbackProps,
    ref: Ref<HTMLImageElement>,
  ) => {
    const [fallback, setFallback] = useState<string | any>('')

    const _handleError = () => {
      setFallback(customFallback)
    }

    return (
      <Image
        className={className}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={_handleError}
      />
    )
  },
)

ImageFallback.displayName = 'ImageFallback'
export default memo(ImageFallback)
