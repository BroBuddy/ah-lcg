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
    cardDeck?: FlipCard[]
    activeDeck?: FlipCard[]
    discardDeck?: FlipCard[]
}

declare type Scenario = {
    id: number
    name: string
    url: string
    setup: FlipCard[]
    agenda?: FlipCard[]
    act?: FlipCard[]
    locationDeck?: FlipCard[]
    scenarioDeck?: FlipCard[]
}

declare type FlipCard = {
    name?: string
    type?: 'Asset' | 'Enemy' | 'Event' | 'Skill' | 'Treachery' | 'Location'
    front: string
    back: string | null
    progress?: number
    alignment?: 'H' | 'V'
}
