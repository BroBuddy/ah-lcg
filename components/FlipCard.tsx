import Image from 'next/image'
import { useState } from 'react'

type FlipCardProps = {
    name: string
    url: string
    card: FlipCard
}

const FlipCard = ({ name, url, card }: FlipCardProps) => {
    const { front, back } = card

    const [switchedCard, setSwichedCard] = useState<boolean>(false)

    return (
        <Image
            src={`/${url}/${switchedCard ? back : front}`}
            onClick={() => setSwichedCard((prevState) => !prevState)}
            className="cursor-pointer rounded-xl image-card"
            height={191}
            width={264}
            alt={name}
        />
    )
}

export default FlipCard
