'use client'

import useInvestigatorStore from '@/store/investigatorStore'
import CardDeck from '@/components/CardDeck'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import InvestigatorDetail from '../InvestigatorDetail'

const PlayerCards = () => {
    const { investigator, shuffleInvestigatorDeck, drawCardFromCardDeck } =
        useInvestigatorStore((state) => ({
            investigator: state.investigator,
            shuffleInvestigatorDeck: state.shuffleInvestigatorDeck,
            drawCardFromCardDeck: state.drawCardFromCardDeck,
        }))

    const [showCards, setShowCards] = useState<boolean>(false)

    return (
        <div className="flex flex-col gap-8">
            {investigator && <InvestigatorDetail investigator={investigator} />}

            {!investigator?.cardDeck && (
                <p>Please select a investigator deck first.</p>
            )}

            {investigator?.cardDeck && (
                <div className="flex flex-row gap-4">
                    <Button
                        variant="outline"
                        disabled={!investigator ? true : false}
                        onClick={() => drawCardFromCardDeck()}
                    >
                        Draw Card
                    </Button>

                    <Button
                        variant="outline"
                        disabled={!investigator ? true : false}
                        onClick={() => shuffleInvestigatorDeck()}
                    >
                        Shuffle Deck
                    </Button>

                    <Button
                        variant="ghost"
                        disabled={!investigator ? true : false}
                        onClick={() => setShowCards((prevState) => !prevState)}
                    >
                        {showCards ? 'Hide Cards' : 'Show Cards'}
                    </Button>
                </div>
            )}

            {investigator?.activeDeck && (
                <CardDeck deck={investigator.activeDeck} />
            )}

            {investigator?.cardDeck && showCards && (
                <CardDeck deck={investigator.cardDeck} />
            )}
        </div>
    )
}

export default PlayerCards
