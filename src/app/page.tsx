'use client'

import Article from '@/components/Article'
import ImageFallback from '@/components/ImageFallback'
import TitleLine from '@/components/TitleLine'
import { TArticle } from '@/type'
import { Avatar, Button } from '@nextui-org/react'
import Link from 'next/link'

export default function Home() {
  const listArticles: TArticle[] = [
    {
      thumb: '/demo2.jpeg',
      title:
        'The Church of God spreads true hope and happiness to all people in the world, following God’s words and example of love',
      url: 'slug-of-blog',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corrupti officiis qui, obcaecati quibusdam voluptas unde repellendus? Eum dolorum voluptatum fugit soluta, iste aut, modi voluptates enim ut architecto qui!',
      tag: 'Test',
      time: '12/2/2023',
      urlTag: 'blog-tag',
    },
    {
      thumb: '/demo2.jpeg',
      title:
        'The Church of God spreads true hope and happiness to all people in the world, following God’s words and example of love',
      url: 'slug-of-blog',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corrupti officiis qui, obcaecati quibusdam voluptas unde repellendus? Eum dolorum voluptatum fugit soluta, iste aut, modi voluptates enim ut architecto qui!',
      tag: 'Test',
      time: '12/2/2023',
      urlTag: 'blog-tag',
    },
  ]

  return (
    <>
      <TitleLine title='RECENT POSTS' />
      <div className='flex flex-col gap-10'>
        {listArticles.map((item) => (
          <Article key={item.url} {...item} />
        ))}
      </div>
    </>
  )
}
