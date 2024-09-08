import { create } from 'zustand'
import { InvestigatorData } from './investigatorData'

type State = {
    investigatorDeck: Investigator[]
    investigator: Investigator | null
}

type Actions = {
    setInvestigator: (investigator: Investigator) => void
    findInvestigator: (investigatorUrl: string) => Investigator
}

const useInvestigatorStore = create<State & Actions>((set, get) => ({
    investigatorDeck: InvestigatorData as [],
    investigator: null,
    setInvestigator: (investigator: Investigator) => {
        set(() => ({
            investigator,
        }))
    },
    findInvestigator: (investigatorUrl: string) => {
        return get().investigatorDeck.find(
            (investigator) => investigator.url === investigatorUrl
        ) as Investigator
    },
}))

export default useInvestigatorStore
