import Image from 'next/image'

function Header() {
  type TListMenu = {
    title: string
    url: string
    subMenu?: TListMenu[]
  }
  const listMenu: TListMenu[] = [
    {
      title: 'Writing Task 1',
      url: '',
      subMenu: [{ title: 'Writing Task 1', url: '' }],
    },
  ]
  return (
    <header>
      <div className=''>
        {/* <Image
          src={'/'}
          alt='logo'
          width={40}
          height={40}
          className='size-[40px] object-cover'
        /> */}
        Tris Ielts
      </div>
      <div className=''></div>
    </header>
  )
}

export default Header
