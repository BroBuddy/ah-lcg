'use client'

import { EncounterCards, PlayerCards } from '@/store/cardData'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CardDeck from './CardDeck'

const filterAndSortDeck = (deck: FlipCard[]) => {
    return deck
        .filter(
            (item: FlipCard, index: number, cards: FlipCard[]) =>
                cards.findIndex((card) => card.front === item.front) === index
        )
        .sort((firstCard: FlipCard, secondCard: FlipCard) =>
            firstCard.front.localeCompare(secondCard.front)
        )
}

const CardList = () => {
    const playerDeck = filterAndSortDeck(PlayerCards)
    const encounterDeck = filterAndSortDeck(EncounterCards)

    return (
        <Tabs defaultValue="player">
            <TabsList>
                <TabsTrigger value="player">Player Cards</TabsTrigger>
                <TabsTrigger value="encounter">Encounter Cards</TabsTrigger>
            </TabsList>

            <TabsContent value="player">
                <CardDeck deck={playerDeck as FlipCard[]} />
            </TabsContent>

            <TabsContent value="encounter">
                <CardDeck deck={encounterDeck as FlipCard[]} />
            </TabsContent>
        </Tabs>
    )
}

export default CardList
