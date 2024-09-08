import { create } from 'zustand'
import { ScenarioData } from './scenarioData'

type State = {
    scenarioDeck: Scenario[]
    scenario: Scenario | null
}

type Actions = {
    setScenario: (scenario: Scenario) => void
    findScenario: (scenarioUrl: string) => Scenario
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
}))

export default useScenarioStore
