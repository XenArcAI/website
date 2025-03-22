import Link from "next/link"

export function Footer() {
  return (
    <footer className='py-8 px-4 border-t border-white/10 backdrop-blur-md'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>XenArcAI™</h3>
            <p className='text-sm text-gray-400'>
              Pioneering the future of artificial intelligence
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/about' className='text-sm text-gray-400 hover:text-white'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/products' className='text-sm text-gray-400 hover:text-white'>
                  Products & APIs
                </Link>
              </li>
              <li>
                <Link href='/research' className='text-sm text-gray-400 hover:text-white'>
                  Research
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/privacy' className='text-sm text-gray-400 hover:text-white'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/terms' className='text-sm text-gray-400 hover:text-white'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center'>
          <div className='text-sm text-gray-400'>
            © {new Date().getFullYear()} XenArcAI™. All rights reserved.
          </div>
          <div className='text-sm text-gray-400 mt-4 md:mt-0'>
            Made with ❤️ for the future of AI
          </div>
        </div>
      </div>
    </footer>
  )
}