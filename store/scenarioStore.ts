import { create } from 'zustand'
import { ScenarioData } from './scenarioData'

type State = {
    scenarioDeck: Scenario[]
    scenario: Scenario | null
    dragZone: (DeckCard | FlipCard)[]
}

type Actions = {
    setScenario: (scenario: Scenario) => void
    findScenario: (scenarioUrl: string) => Scenario
    shuffleEncounterDeck: () => void
    addCardToDragZone: (card: DeckCard | FlipCard) => void
    removeCardFromDragZone: (card: DeckCard | FlipCard) => void
    removeCardFromDeck: (deckCard: DeckCard) => void
    drawCardFromEncounterDeck: () => void
}

const useScenarioStore = create<State & Actions>((set, get) => ({
    scenarioDeck: ScenarioData as [],
    scenario: null,
    dragZone: [],
    setScenario: (scenario: Scenario) => {
        set(() => ({
            scenario: scenario,
        }))
    },
    findScenario: (scenarioUrl: string) => {
        return get().scenarioDeck.find(
            (scenario) => scenario.url === scenarioUrl
        ) as Scenario
    },
    addCardToDragZone: (card: DeckCard | FlipCard) => {
        const dragZone = get().dragZone as (DeckCard | FlipCard)[]

        dragZone.push(card)

        set(() => ({
            dragZone: [...dragZone],
        }))
    },
    removeCardFromDragZone: (card: DeckCard | FlipCard) => {
        const dragZone = get().dragZone as (DeckCard | FlipCard)[]
        const cardIndex = dragZone.indexOf(card)

        dragZone.splice(Number(cardIndex), 1)

        set(() => ({
            dragZone: [...dragZone],
        }))
    },
    shuffleEncounterDeck: () => {
        const scenarioDeck = get().scenario?.scenarioDeck as DeckCard[]

        for (let i = scenarioDeck.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))

            ;[scenarioDeck[i], scenarioDeck[j]] = [
                scenarioDeck[j],
                scenarioDeck[i],
            ]
        }

        set((state) => ({
            scenario: {
                ...(state.scenario as Scenario),
                scenarioDeck: [...(scenarioDeck as DeckCard[])],
            },
        }))
    },
    removeCardFromDeck: (deckCard: DeckCard) => {
        const scenarioDeck = get().scenario?.scenarioDeck as DeckCard[]
        const cardIndex = scenarioDeck.indexOf(deckCard)

        scenarioDeck.splice(Number(cardIndex), 1)

        set((state) => ({
            scenario: {
                ...(state.scenario as Scenario),
                scenarioDeck: [...(scenarioDeck as DeckCard[])],
            },
        }))
    },
    drawCardFromEncounterDeck: () => {
        const cardDeck = get().scenario?.scenarioDeck as DeckCard[]
        const dragZone = get().dragZone as DeckCard[]
        const firstCard = cardDeck[0] as DeckCard

        dragZone.push(firstCard)

        get().removeCardFromDeck(firstCard)

        set(() => ({
            dragZone: [...dragZone],
        }))
    },
}))

export default useScenarioStore
