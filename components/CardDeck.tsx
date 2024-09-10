import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import React from 'react'
import FlipCard from './FlipCard'

const CardDeck = (cards: { deck: FlipCard[] }) => {
    const { deck } = cards

    return (
        <>
            {!deck && (
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Deck Cards</CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-row flex-wrap flex-1 gap-4">
                        No cards available in this deck.
                    </CardContent>
                </Card>
            )}

            {deck && (
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Deck Cards</CardTitle>
                        <CardDescription>
                            Total cards: {deck.length}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-row flex-wrap flex-1 gap-4">
                        {deck.map((card: FlipCard, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <FlipCard card={card} />
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
