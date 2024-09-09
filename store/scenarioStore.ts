import { create } from 'zustand'
import { ScenarioData } from './scenarioData'

type State = {
    scenarioDeck: Scenario[]
    scenario: Scenario | null
}

type Actions = {
    setScenario: (scenario: Scenario) => void
    findScenario: (scenarioUrl: string) => Scenario
    shuffleEncounterDeck: () => void
}

const useScenarioStore = create<State & Actions>((set, get) => ({
    scenarioDeck: ScenarioData as [],
    scenario: null,
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
}))

export default useScenarioStore
