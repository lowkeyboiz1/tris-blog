'use client'

import { TArticle } from '@/type'
import Link from 'next/link'
import ImageFallback from '../ImageFallback'
import { useRouter } from 'next/navigation'

const Article = ({ description, tag, time, urlTag, thumb, title, url }: TArticle) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(url)}
      className='grid cursor-pointer grid-cols-2 items-center gap-6'
    >
      <div className=''>
        <ImageFallback src={thumb} alt='' height={400} width={400} />
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <div className='flex items-center gap-4'>
          <Link
            onClick={(e) => e.stopPropagation()}
            href={urlTag}
            className='font-bold text-[#ffb142]'
          >
            {tag}
          </Link>
          <time className='text-sm font-light text-[#333]'>{time}</time>
        </div>
        <p className='line-clamp-2 text-xl font-bold'>{title}</p>
        <p className='line-clamp-3 font-light'>{description}</p>
        <Link
          href={url}
          className='font-semibold text-primary-blue duration-200 hover:text-primary-blue/80'
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default Article
