declare type Investigator = {
    id: number
    name: string
    url: string
    class: 'Guardian' | 'Seeker' | 'Rogue' | 'Mystic' | 'Survivor'
    cards: FlipCard[]
    skills: number[]
    health: number
    sanity: number
    maxHealth: number
    maxSanity: number
    cardDeck?: DeckCard[]
    activeDeck?: DeckCard[]
    discardDeck?: DeckCard[]
}

declare type Scenario = {
    id: number
    name: string
    url: string
    setup: string[]
    agenda?: FlipCard[]
    act?: FlipCard[]
    locationDeck?: FlipCard[]
    scenarioDeck?: DeckCard[]
}

declare type FlipCard = {
    name?: string
    type?: 'Location'
    url?: string
    front: string
    back: string
    progress?: number
}

declare type DeckCard = {
    name?: string
    type: 'Asset' | 'Enemy' | 'Event' | 'Skill' | 'Treachery'
    url: string
    image: string
}
