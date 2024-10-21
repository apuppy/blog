import { genPageMetadata } from 'app/seo'
import links from '@/data/links'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Links' })

export default function Page() {
  return (
    <>
      <nav className="mt-8 h-full pl-12 pt-2">
        {links.map((linkgrp) => (
          <div key={linkgrp.category}>
            <h3 className="md-2 mt-4 text-2xl">{linkgrp.category}</h3>
            <ul>
              {linkgrp.links.map((lnk) => (
                <li>
                  <Link
                    key={lnk.name}
                    href={lnk.url}
                    className="mb-4 py-2 pr-4 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                  >
                    {lnk.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </>
  )
}
