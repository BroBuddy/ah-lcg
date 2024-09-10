import Image from 'next/image'
import { useState } from 'react'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from '@/components/ui/context-menu'

const FlipCard = (flipCard: { card: FlipCard }) => {
    const { card } = flipCard
    const { name, front, back, alignment } = card

    const [switchedCard, setSwichedCard] = useState<boolean>(false)

    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger asChild>
                    <Image
                        src={`/${switchedCard ? back : front}`}
                        className="cursor-pointer rounded-xl image-card"
                        height={alignment === 'H' ? 191 : 264}
                        width={alignment === 'H' ? 264 : 191}
                        alt={String(name)}
                    />
                </ContextMenuTrigger>

                <ContextMenuContent>
                    <ContextMenuItem
                        onClick={() =>
                            setSwichedCard((prevState) => !prevState)
                        }
                    >
                        Flip
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </>
    )
}

export default FlipCard
