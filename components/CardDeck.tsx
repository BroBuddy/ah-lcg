import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const CardDeck = (deck: { deck: DeckCard[] }) => {
    return (
        <>
            {!deck.deck && (
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Deck Cards</CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-row flex-wrap flex-1 gap-4">
                        No cards available in this deck.
                    </CardContent>
                </Card>
            )}

            {deck.deck && (
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Deck Cards</CardTitle>
                        <CardDescription>
                            Total cards: {deck.deck.length}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-row flex-wrap flex-1 gap-4">
                        {deck.deck.map((card: DeckCard, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <Image
                                        src={`/${card.url}/${card.image}`}
                                        height={264}
                                        width={191}
                                        className="image-card"
                                        alt="Deck Card"
                                    />
                                </React.Fragment>
                            )
                        })}
                    </CardContent>
                </Card>
            )}
        </>
    )
}

export default CardDeck
