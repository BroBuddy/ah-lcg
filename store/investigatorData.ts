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
                front: 'roland1.webp',
                back: 'roland2.webp',
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
                url: 'player/investigator',
                image: 'roland3.webp',
            },
            {
                type: 'Treachery',
                url: 'player/investigator',
                image: 'roland4.webp',
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
                front: 'daisy1.webp',
                back: 'daisy2.webp',
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
                url: 'player/investigator',
                image: 'daisy3.webp',
            },
            {
                type: 'Asset',
                url: 'player/investigator',
                image: 'daisy4.webp',
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
                front: 'skids1.webp',
                back: 'skids2.webp',
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
                url: 'player/investigator',
                image: 'skids3.webp',
            },
            {
                type: 'Treachery',
                url: 'player/investigator',
                image: 'skids4.webp',
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
                front: 'agnes1.webp',
                back: 'agnes2.webp',
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
                url: 'player/investigator',
                image: 'agnes3.webp',
            },
            {
                type: 'Event',
                url: 'player/investigator',
                image: 'agnes4.webp',
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
                front: 'wendy1.webp',
                back: 'wendy2.webp',
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
                url: 'player/investigator',
                image: 'wendy3.webp',
            },
            {
                type: 'Treachery',
                url: 'player/investigator',
                image: 'wendy4.webp',
            },
        ],
        activeDeck: [],
        discardDeck: [],
    },
]
