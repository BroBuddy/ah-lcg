import { create } from 'zustand'
import { ScenarioData } from './scenarioData'

type State = {
    scenarioDeck: Scenario[]
    scenario: Scenario | null
    dragZone: FlipCard[]
}

type Actions = {
    setScenario: (scenario: Scenario) => void
    findScenario: (scenarioUrl: string) => Scenario
    shuffleEncounterDeck: () => void
    addCardToDragZone: (card: FlipCard) => void
    removeCardFromDragZone: (card: FlipCard) => void
    removeCardFromDeck: (FlipCard: FlipCard) => void
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
    addCardToDragZone: (card: FlipCard) => {
        const dragZone = get().dragZone as FlipCard[]

        dragZone.push(card)

        set(() => ({
            dragZone: [...dragZone],
        }))
    },
    removeCardFromDragZone: (card: FlipCard) => {
        const dragZone = get().dragZone as FlipCard[]
        const cardIndex = dragZone.indexOf(card)

        dragZone.splice(Number(cardIndex), 1)

        set(() => ({
            dragZone: [...dragZone],
        }))
    },
    shuffleEncounterDeck: () => {
        const scenarioDeck = get().scenario?.scenarioDeck as FlipCard[]

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
                scenarioDeck: [...(scenarioDeck as FlipCard[])],
            },
        }))
    },
    removeCardFromDeck: (FlipCard: FlipCard) => {
        const scenarioDeck = get().scenario?.scenarioDeck as FlipCard[]
        const cardIndex = scenarioDeck.indexOf(FlipCard)

        scenarioDeck.splice(Number(cardIndex), 1)

        set((state) => ({
            scenario: {
                ...(state.scenario as Scenario),
                scenarioDeck: [...(scenarioDeck as FlipCard[])],
            },
        }))
    },
    drawCardFromEncounterDeck: () => {
        const cardDeck = get().scenario?.scenarioDeck as FlipCard[]
        const dragZone = get().dragZone as FlipCard[]
        const firstCard = cardDeck[0] as FlipCard

        dragZone.push(firstCard)

        get().removeCardFromDeck(firstCard)

        set(() => ({
            dragZone: [...dragZone],
        }))
    },
}))

export default useScenarioStore
