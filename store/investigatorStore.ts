import { create } from 'zustand'

type State = {
    investigator: Investigator | null
    investigatorDeck: DeckCard[] | []
}

type Actions = {
    setInvestigator: (investigator: Investigator) => void
    addCardsIntoDeck: (deckCards: DeckCard[]) => void
}

const useInvestigatorStore = create<State & Actions>((set, get) => ({
    investigator: null,
    investigatorDeck: [],
    setInvestigator: (investigator: Investigator) => {
        set(() => ({
            investigator,
        }))
    },
    // addCardsToInvestigatorDeck: (deckCards: DeckCard[]) => {
    //     set(() => ({
    //         investigatorDeck: [...get().investigatorDeck, ...deckCards],
    //     }))
    // },
    addCardsIntoDeck: (deckCards: DeckCard[]) => {
        set((state) => ({
            investigator: {
                ...(state.investigator as Investigator),
                cardDeck: [
                    ...(state.investigator?.cardDeck as DeckCard[]),
                    ...deckCards,
                ],
            },
        }))
        console.log(deckCards)
        console.log(get().investigator)
    },
}))

export default useInvestigatorStore
