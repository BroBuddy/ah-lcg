import { TheGathering } from './encounterData'

export const ScenarioData: Scenario[] = [
    {
        id: 1,
        name: 'The Gathering',
        url: 'the-gathering',
        setup: [
            {
                front: 'scenarios/the-gathering/1a.webp',
                back: 'scenarios/the-gathering/1b.webp',
            },
        ],
        agenda: [
            {
                type: 'Agenda',
                front: 'scenarios/the-gathering/2a.webp',
                back: 'scenarios/the-gathering/2b.webp',
                progress: 3,
                alignment: 'H',
            },
            {
                type: 'Agenda',
                front: 'scenarios/the-gathering/3a.webp',
                back: 'scenarios/the-gathering/3b.webp',
                progress: 7,
                alignment: 'H',
            },
            {
                type: 'Agenda',
                front: 'scenarios/the-gathering/4a.webp',
                back: 'scenarios/the-gathering/4b.webp',
                progress: 10,
                alignment: 'H',
            },
        ],
        act: [
            {
                type: 'Act',
                front: 'scenarios/the-gathering/5a.webp',
                back: 'scenarios/the-gathering/5b.webp',
                progress: 2,
                alignment: 'H',
            },
            {
                type: 'Act',
                front: 'scenarios/the-gathering/6a.webp',
                back: 'scenarios/the-gathering/6b.webp',
                progress: 3,
                alignment: 'H',
            },
            {
                type: 'Act',
                front: 'scenarios/the-gathering/7a.webp',
                back: 'scenarios/the-gathering/7b.webp',
                progress: 0,
                alignment: 'H',
            },
        ],
        locationDeck: [
            {
                name: 'Study',
                type: 'Location',
                front: 'scenarios/the-gathering/8a.webp',
                back: 'scenarios/the-gathering/8b.webp',
                progress: 2,
            },
            {
                name: 'Hallway',
                type: 'Location',
                front: 'scenarios/the-gathering/9a.webp',
                back: 'scenarios/the-gathering/9b.webp',
                progress: 0,
            },
            {
                name: 'Attic',
                type: 'Location',
                front: 'scenarios/the-gathering/10a.webp',
                back: 'scenarios/the-gathering/10b.webp',
                progress: 2,
            },
            {
                name: 'Cellar',
                type: 'Location',
                front: 'scenarios/the-gathering/11a.webp',
                back: 'scenarios/the-gathering/11b.webp',
                progress: 2,
            },
            {
                name: 'Parlor',
                type: 'Location',
                front: 'scenarios/the-gathering/12a.webp',
                back: 'scenarios/the-gathering/12b.webp',
                progress: 0,
            },
        ],
        scenarioDeck: TheGathering,
    },
    {
        id: 2,
        name: 'The Midnight Masks',
        url: 'the-midnight-masks',
        setup: [
            {
                front: 'scenarios/the-midnight-masks/17a.webp',
                back: 'scenarios/the-midnight-masks/17b.webp',
            },
        ],
    },
    {
        id: 3,
        name: 'The Devourer Below',
        url: 'the-devourer-below',
        setup: [
            {
                front: 'scenarios/the-devourer-below/40a.webp',
                back: 'scenarios/the-devourer-below/40b.webp',
            },
        ],
    },
]
