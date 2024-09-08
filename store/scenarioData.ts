import { TheGathering } from './encounterData'

export const ScenarioData: Scenario[] = [
    {
        id: 1,
        name: 'The Gathering',
        url: 'the-gathering',
        setup: ['1a.webp', '1b.webp'],
        agenda: [
            {
                front: '2a.webp',
                back: '2b.webp',
                progress: 3,
            },
            {
                front: '3a.webp',
                back: '3b.webp',
                progress: 7,
            },
            {
                front: '4a.webp',
                back: '4b.webp',
                progress: 10,
            },
        ],
        act: [
            {
                front: '5a.webp',
                back: '5b.webp',
                progress: 2,
            },
            {
                front: '6a.webp',
                back: '6b.webp',
                progress: 3,
            },
            {
                front: '7a.webp',
                back: '7b.webp',
                progress: 0,
            },
        ],
        locationDeck: [
            {
                front: '8a.webp',
                back: '8b.webp',
            },
            {
                front: '9a.webp',
                back: '9b.webp',
            },
            {
                front: '10a.webp',
                back: '10b.webp',
            },
            {
                front: '11a.webp',
                back: '11b.webp',
            },
            {
                front: '12a.webp',
                back: '12b.webp',
            },
        ],
        scenarioDeck: TheGathering,
    },
    {
        id: 2,
        name: 'The Midnight Masks',
        url: 'the-midnight-masks',
        setup: ['17a.webp', '17b.webp'],
    },
    {
        id: 3,
        name: 'The Devourer Below',
        url: 'the-devourer-below',
        setup: ['40a.webp', '40b.webp'],
    },
]
