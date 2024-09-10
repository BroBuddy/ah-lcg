import { create } from 'zustand'

type State = {
    investigator: Investigator | null
    investigatorDeck: FlipCard[] | []
}

type Actions = {
    setInvestigator: (investigator: Investigator) => void
    shuffleInvestigatorDeck: () => void
    addCardsIntoDeck: (FlipCards: FlipCard[]) => void
    removeCardFromDeck: (FlipCard: FlipCard) => void
    drawCardFromCardDeck: () => void
}

const useInvestigatorStore = create<State & Actions>((set, get) => ({
    investigator: null,
    investigatorDeck: [],
    setInvestigator: (investigator: Investigator) => {
        set(() => ({
            investigator,
        }))
    },
    shuffleInvestigatorDeck: () => {
        const cardDeck = get().investigator?.cardDeck as FlipCard[]

        for (let i = cardDeck.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))

            ;[cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]]
        }

        set((state) => ({
            investigator: {
                ...(state.investigator as Investigator),
                cardDeck: [...(cardDeck as FlipCard[])],
            },
        }))
    },
    addCardsIntoDeck: (FlipCards: FlipCard[]) => {
        set((state) => ({
            investigator: {
                ...(state.investigator as Investigator),
                cardDeck: [
                    ...(state.investigator?.cardDeck as FlipCard[]),
                    ...FlipCards,
                ],
            },
        }))
    },
    removeCardFromDeck: (FlipCard: FlipCard) => {
        const cardDeck = get().investigator?.cardDeck as FlipCard[]
        const cardIndex = cardDeck.indexOf(FlipCard)

        cardDeck.splice(Number(cardIndex), 1)

        set((state) => ({
            investigator: {
                ...(state.investigator as Investigator),
                cardDeck: [...(cardDeck as FlipCard[])],
            },
        }))
    },
    drawCardFromCardDeck: () => {
        const cardDeck = get().investigator?.cardDeck as FlipCard[]
        const activeDeck = get().investigator?.activeDeck as FlipCard[]
        const firstCard = cardDeck[0] as FlipCard

        activeDeck.push(firstCard)

        get().removeCardFromDeck(firstCard)

        set((state) => ({
            investigator: {
                ...(state.investigator as Investigator),
                activeDeck: [...activeDeck],
            },
        }))
    },
}))

export default useInvestigatorStore
