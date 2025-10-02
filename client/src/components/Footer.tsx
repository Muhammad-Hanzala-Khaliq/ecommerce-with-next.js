import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between md:items-start bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
      <Image src="/logo.png" alt="TrendLama" width={36} height={36} />
      <p className="text-md font-medium tracking-wider hidden md:block text-white">SmartShop</p>
      </Link>
      <p className="text-sm text-gray-400">@ 2025 SmartShop.</p>
      <p className="text-sm text-gray-400">All rights reserved</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href='/'>Home</Link>
        <Link href='/'>Contact</Link>
        <Link href='/'>Terms of Service</Link>
        <Link href='/'>Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href='/'>All Products</Link>
        <Link href='/'>New Arrivals</Link>
        <Link href='/'>Best Sellers</Link>
        <Link href='/'>Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>Affilate Program</Link>
      </div>
    </div>
  )
}

export default Footer