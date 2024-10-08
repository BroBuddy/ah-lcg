'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SideBarItem = {
    imgURL: string
    route: string
    label: string
}
const Sidebar = () => {
    const pathname = usePathname()

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link
                    href="/"
                    className="flex mb-12 cursor-pointer items-center gap-2"
                >
                    <Image
                        src="/icons/arkham-horror-elder-sign.png"
                        width={34}
                        height={34}
                        alt="Arkham Horror"
                        className="rounded-3xl size-[24px] max-xl:size-14"
                    />

                    <h1 className="sidebar-logo">Arkham Horror</h1>
                </Link>

                {sidebarLinks.map((item: SideBarItem, index: number) => {
                    const isActive =
                        pathname === item.route ||
                        pathname.startsWith(`${item.route}/`)

                    return (
                        <Link
                            key={index}
                            href={item.route}
                            className={cn('sidebar-link', {
                                'bg-bank-gradient': isActive,
                            })}
                        >
                            <div className="relative size-6">
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] invert-0': isActive,
                                    })}
                                />
                            </div>

                            <p
                                className={cn('sidebar-label', {
                                    '!text-white': isActive,
                                })}
                            >
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
            </nav>
        </section>
    )
}

export default Sidebar
