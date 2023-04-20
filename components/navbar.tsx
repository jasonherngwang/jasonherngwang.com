import Link from 'next/link';

import { navbarItems } from '@/config/navbar-items';

export default function Navbar() {
  return (
    <nav className="mt-4 flex flex-col items-baseline justify-between sm:mt-12 sm:flex-row">
      <Link href="/" className="no-underline">
        <span className="text-2xl font-bold text-gray-800 hover:text-indigo-700 sm:text-3xl">
          Jason Wang
        </span>
      </Link>
      <div className="mt-3 flex gap-x-2 text-base sm:mt-0 sm:gap-x-6 sm:text-lg">
        {navbarItems.map((item) => {
          return item.external ? (
            <a key={item.title} href={item.href} target="_blank">
              {item.title}
            </a>
          ) : (
            <Link key={item.title} href={item.href}>
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
