declare type Investigator = {
    id: number
    name: string
    url: string
    class: 'Guardian' | 'Seeker' | 'Rogue' | 'Mystic' | 'Survivor'
    cards: FlipCard[]
    cardDeck: DeckCard[]
    skills: number[]
    health: number
    sanity: number
    maxHealth: number
    maxSanity: number
}

declare type Scenario = {
    id: number
    name: string
    url: string
    setup: string[]
    agenda: FlipCard[]
    act: FlipCard[]
    scenarioDeck: DeckCard[]
}

declare type FlipCard = {
    front: string
    back: string
    progress?: number
}

declare type DeckCard = {
    category: string
    type: string
    url: string
    image: string
}
