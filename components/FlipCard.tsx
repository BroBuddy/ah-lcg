import Image from 'next/image'
import { useState } from 'react'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Badge } from '@/components/ui/badge'

const FlipCard = (flipCard: { card: FlipCard }) => {
    const { card } = flipCard
    const { name, front, back, alignment, type, progress } = card

    const [switchedCard, setSwichedCard] = useState<boolean>(false)
    const [cardProgress, setCardProgress] = useState<number>(0)

    const showProgress =
        type === 'Act' || type === 'Agenda' || type === 'Location'

    const incrementProgress = () => {
        if (!progress) return

        if (cardProgress < progress) {
            setCardProgress(cardProgress + 1)
        }
    }

    const decrementProgress = () => {
        if (!progress) return

        if (cardProgress > 0) {
            setCardProgress(cardProgress - 1)
        }
    }

    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger className="relative">
                    <Image
                        src={`/${switchedCard ? back : front}`}
                        className="cursor-pointer rounded-xl image-card"
                        height={alignment === 'H' ? 191 : 264}
                        width={alignment === 'H' ? 264 : 191}
                        alt={String(name)}
                    />

                    {showProgress && (
                        <Badge
                            className="absolute right-2 bottom-2"
                            variant="outline"
                        >
                            {cardProgress} / {progress}
                        </Badge>
                    )}
                </ContextMenuTrigger>

                <ContextMenuContent>
                    <ContextMenuItem
                        onClick={() =>
                            setSwichedCard((prevState) => !prevState)
                        }
                    >
                        Flip
                    </ContextMenuItem>

                    {showProgress && (
                        <>
                            <ContextMenuItem onClick={incrementProgress}>
                                Progress (+)
                            </ContextMenuItem>
                            <ContextMenuItem onClick={decrementProgress}>
                                Progress (-)
                            </ContextMenuItem>
                        </>
                    )}
                </ContextMenuContent>
            </ContextMenu>
        </>
    )
}

export default FlipCard
