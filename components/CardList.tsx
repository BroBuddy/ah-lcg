'use client'

import { EncounterCards, PlayerCards } from '@/store/cardData'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CardDeck from './CardDeck'

const filterAndSortDeck = (deck: DeckCard[]) => {
    return deck
        .filter(
            (item: DeckCard, index: number, cards: DeckCard[]) =>
                cards.findIndex((card) => card.image === item.image) === index
        )
        .sort((firstCard: DeckCard, secondCard: DeckCard) =>
            firstCard.url.localeCompare(secondCard.url)
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
                <CardDeck deck={playerDeck as DeckCard[]} />
            </TabsContent>

            <TabsContent value="encounter">
                <CardDeck deck={encounterDeck as DeckCard[]} />
            </TabsContent>
        </Tabs>
    )
}

export default CardList
