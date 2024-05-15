import { FacebookIcon, LinkedinIcon, TiktokIcon } from '@/components/Icons'
import ImageFallback from '@/components/ImageFallback'
import TitleLine from '@/components/TitleLine'
import { TPost } from '@/type'
import { Avatar, Button } from '@nextui-org/react'
import Link from 'next/link'

const RightMenu = () => {
  type TListSocial = {
    url: string
    icon: React.ReactNode
  }
  const listSocial: TListSocial[] = [
    {
      url: 'https://www.facebook.com/tridang279',
      icon: <FacebookIcon />
    },
    {
      url: 'https://www.tiktok.com/tridang279',
      icon: <TiktokIcon />
    },
    {
      url: 'https://www.instagram.com/tridang279',
      icon: <LinkedinIcon />
    }
  ]

  const dummyPost: TPost[] = [
    {
      thumb: '/demo3.jpeg',
      title: 'The true Church established by Second Coming Christ Ahnsahnghong according to the prophecies of the Bible',
      url: '/articles/test/detail-blog'
    },
    {
      thumb: '/demo2.jpeg',
      title: 'The Church of God spreads true hope and happiness to all people in the world, following God’s words and example of love',
      url: '/articles/test/detail-blog'
    }
  ]

  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col items-center gap-10'>
        <TitleLine title='ABOUT ME' />
        <Avatar src='/images/avatar.jpg' alt='avatar' className='flex h-[240px] w-[240px] flex-shrink-0' />
        <p className='text-center'>The New Covenant Passover blesses the eternal life with bread and wine</p>
      </div>
      <div className='flex flex-col items-center gap-6'>
        <TitleLine title='FOLLOW US' />
        <div className='flex items-center gap-2'>
          {listSocial.map((item) => (
            <Button
              target='_blank'
              href={item.url}
              as={Link}
              isIconOnly
              key={item.url}
              radius='full'
              className='bg-[#818181] shadow-[2px_5px_15px_0px_#E5E8EF]
      '
            >
              {item.icon}
            </Button>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center gap-6'>
        <TitleLine title='RECENT POSTS' />
        <div className='flex flex-col gap-20'>
          {dummyPost.map((item) => (
            <Link href={item.url} key={item.title} className='relative max-w-[392px] lg:max-w-none'>
              <div className='size-full'>
                <ImageFallback src={item.thumb} alt={item.thumb} className='max-h-[220px]  w-full min-w-[340px]' />
              </div>
              <div className='absolute bottom-0 z-20 translate-y-1/2 px-4'>
                <div className='bg-white px-3 py-4 font-bold'>
                  <p className='line-clamp-2'>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center gap-6'>
        <TitleLine title='POPULAR POST' />
      </div>
    </div>
  )
}

export default RightMenu
