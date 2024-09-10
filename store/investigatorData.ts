export const FindInvestigator = (investigatorUrl: string) => {
    return InvestigatorData.find(
        (investigator: Investigator) => investigator.url == investigatorUrl
    )
}

export const InvestigatorData: Investigator[] = [
    {
        id: 1,
        name: 'Roland Banks',
        url: 'roland-banks',
        class: 'Guardian',
        cards: [
            {
                front: 'player/investigator/roland1.webp',
                back: 'player/investigator/roland2.webp',
                alignment: 'H',
            },
        ],
        skills: [3, 3, 4, 2],
        health: 9,
        sanity: 5,
        maxHealth: 9,
        maxSanity: 5,
        cardDeck: [
            {
                type: 'Asset',
                front: 'player/investigator/roland3.webp',
                back: 'player/cardback.png',
            },
            {
                type: 'Treachery',
                front: 'player/investigator/roland4.webp',
                back: 'player/cardback.png',
            },
        ],
        activeDeck: [],
        discardDeck: [],
    },
    {
        id: 2,
        name: 'Daisy Walker',
        url: 'daisy-walker',
        class: 'Seeker',
        cards: [
            {
                front: 'player/investigator/daisy1.webp',
                back: 'player/investigator/daisy2.webp',
                alignment: 'H',
            },
        ],
        skills: [3, 5, 2, 2],
        health: 5,
        sanity: 9,
        maxHealth: 5,
        maxSanity: 9,
        cardDeck: [
            {
                type: 'Asset',
                front: 'player/investigator/daisy3.webp',
                back: 'player/cardback.png',
            },
            {
                type: 'Asset',
                front: 'player/investigator/daisy4.webp',
                back: 'player/cardback.png',
            },
        ],
        activeDeck: [],
        discardDeck: [],
    },
    {
        id: 3,
        name: '“Skids” O’Toole',
        url: 'skids-o-toole',
        class: 'Rogue',
        cards: [
            {
                front: 'player/investigator/skids1.webp',
                back: 'player/investigator/skids2.webp',
                alignment: 'H',
            },
        ],
        skills: [2, 3, 3, 4],
        health: 8,
        sanity: 6,
        maxHealth: 8,
        maxSanity: 6,
        cardDeck: [
            {
                type: 'Asset',
                front: 'player/investigator/skids3.webp',
                back: 'player/cardback.png',
            },
            {
                type: 'Treachery',
                front: 'player/investigator/skids4.webp',
                back: 'player/cardback.png',
            },
        ],
        activeDeck: [],
        discardDeck: [],
    },
    {
        id: 4,
        name: 'Agnes Baker',
        url: 'agnes-baker',
        class: 'Mystic',
        cards: [
            {
                front: 'player/investigator/agnes1.webp',
                back: 'player/investigator/agnes2.webp',
                alignment: 'H',
            },
        ],
        skills: [5, 2, 2, 3],
        health: 6,
        sanity: 8,
        maxHealth: 6,
        maxSanity: 8,
        cardDeck: [
            {
                type: 'Asset',
                front: 'player/investigator/agnes3.webp',
                back: 'player/cardback.png',
            },
            {
                type: 'Event',
                front: 'player/investigator/agnes4.webp',
                back: 'player/cardback.png',
            },
        ],
        activeDeck: [],
        discardDeck: [],
    },
    {
        id: 5,
        name: 'Wendy Adams',
        url: 'wendy-adams',
        class: 'Survivor',
        cards: [
            {
                front: 'player/investigator/wendy1.webp',
                back: 'player/investigator/wendy2.webp',
                alignment: 'H',
            },
        ],
        skills: [4, 3, 1, 4],
        health: 7,
        sanity: 7,
        maxHealth: 7,
        maxSanity: 7,
        cardDeck: [
            {
                type: 'Asset',
                front: 'player/investigator/wendy3.webp',
                back: 'player/cardback.png',
            },
            {
                type: 'Treachery',
                front: 'player/investigator/wendy4.webp',
                back: 'player/cardback.png',
            },
        ],
        activeDeck: [],
        discardDeck: [],
    },
]
