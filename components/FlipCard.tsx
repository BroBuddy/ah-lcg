import Image from 'next/image'
import { useState } from 'react'

type FlipCardProps = {
    name: string
    url: string
    card: FlipCard
    alignment?: 'H' | 'V'
}

const FlipCard = ({ name, url, card, alignment = 'H' }: FlipCardProps) => {
    const { front, back } = card

    const [switchedCard, setSwichedCard] = useState<boolean>(false)

    return (
        <Image
            src={`/${url}/${switchedCard ? back : front}`}
            onClick={() => setSwichedCard((prevState) => !prevState)}
            className="cursor-pointer rounded-xl image-card"
            height={alignment === 'H' ? 191 : 264}
            width={alignment === 'H' ? 264 : 191}
            alt={name}
        />
    )
}

export default FlipCard
