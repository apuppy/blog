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
            <ul key={linkgrp.category}>
              {linkgrp.links.map((lnk) => (
                <li className="mt-2" key={lnk.name}>
                  <Link
                    key={lnk.name}
                    href={lnk.url}
                    target="_blank"
                    className="py-2 pr-4 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
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
