function Footer() {
  return (
    <footer className='bg-[#0d1224] w-full h-[60px] flex items-center'>
      <div className=' text-white text-[16px] flex items-center justify-between w-full max-w-[90%] lg:max-w-[80%] mx-auto'>
        <div className=''>© English with Tris</div>
        <div className='socials flex gap-4'>
          <Link href={'/'} className='cursor-pointer'>
            <YouTubeIcon fontSize='large' />
          </Link>
          <Link href={'https://www.facebook.com/tridang279'} className='cursor-pointer'>
            <FacebookIcon fontSize='large' />
          </Link>
          <Link href={'/'} className='cursor-pointer'>
            <TwitterIcon fontSize='large' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
