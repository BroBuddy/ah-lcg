'use client'

import { EncounterCards, PlayerCards } from '@/store/cardData'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CardDeck from './CardDeck'

const CardList = () => {
    const playerDeck = PlayerCards.filter(
        (cards, index, source) =>
            source.findIndex((card) => card.image === cards.image) === index
    ).sort((a, b) => a.url.localeCompare(b.url))

    const encounterDeck = EncounterCards.filter(
        (cards, index, source) =>
            source.findIndex((card) => card.image === cards.image) === index
    ).sort((a, b) => a.url.localeCompare(b.url))

    return (
        <Tabs defaultValue="player">
            <TabsList>
                <TabsTrigger value="player">Player Cards</TabsTrigger>
                <TabsTrigger value="encounter">Encounter Cards</TabsTrigger>
            </TabsList>

            <TabsContent value="player">
                <CardDeck deck={playerDeck as DeckCard[]} />
            </TabsContent>

            <TabsContent value="encounter">
                <CardDeck deck={encounterDeck as DeckCard[]} />
            </TabsContent>
        </Tabs>
    )
}

export default CardList
