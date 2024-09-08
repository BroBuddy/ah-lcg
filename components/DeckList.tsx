'use client'

import { CardDecks } from '@/store/cardData'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CardDeck from './CardDeck'

const DeckList = () => {
    const cardDecks = CardDecks

    return (
        <Tabs defaultValue="1">
            <TabsList>
                {cardDecks.map((deck, index: number) => {
                    return (
                        <TabsTrigger key={index} value={String(deck.id)}>
                            {deck.name}
                        </TabsTrigger>
                    )
                })}
            </TabsList>

            {cardDecks.map((deck, index: number) => {
                return (
                    <TabsContent key={index} value={String(deck.id)}>
                        <CardDeck deck={deck.deck} />
                    </TabsContent>
                )
            })}
        </Tabs>
    )
}

export default DeckList
