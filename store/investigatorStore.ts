import { create } from 'zustand'

type State = {
    investigator: Investigator | null
    investigatorDeck: DeckCard[] | []
}

type Actions = {
    setInvestigator: (investigator: Investigator) => void
    addCardsIntoDeck: (deckCards: DeckCard[]) => void
    removeCardFromDeck: (deckCard: DeckCard) => void
}

const useInvestigatorStore = create<State & Actions>((set, get) => ({
    investigator: null,
    investigatorDeck: [],
    setInvestigator: (investigator: Investigator) => {
        set(() => ({
            investigator,
        }))
    },
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
    },
    removeCardFromDeck: (deckCard: DeckCard) => {
        const cardDeck = get().investigator?.cardDeck
        const cardIndex = cardDeck?.indexOf(deckCard)

        cardDeck?.splice(Number(cardIndex), 1)

        set((state) => ({
            investigator: {
                ...(state.investigator as Investigator),
                cardDeck: [...(cardDeck as DeckCard[])],
            },
        }))
    },
}))

export default useInvestigatorStore
