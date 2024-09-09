'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import useInvestigatorStore from '@/store/investigatorStore'
import CardDeck from '@/components/CardDeck'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const PlayerCards = () => {
    const { investigator, shuffleInvestigatorDeck } = useInvestigatorStore(
        (state) => ({
            investigator: state.investigator,
            shuffleInvestigatorDeck: state.shuffleInvestigatorDeck,
        })
    )

    const [showCards, setShowCards] = useState<boolean>(false)

    return (
        <div className="flex flex-col gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Player Cards</CardTitle>
                </CardHeader>

                {!investigator?.cardDeck && (
                    <CardContent>
                        <p>Please select a investigator deck first.</p>
                    </CardContent>
                )}

                {investigator?.cardDeck && (
                    <CardContent className="flex flex-row gap-4">
                        <Button
                            variant="outline"
                            disabled={!investigator ? true : false}
                            onClick={() => shuffleInvestigatorDeck()}
                        >
                            Shuffle Player Deck
                        </Button>

                        <Button
                            variant="ghost"
                            disabled={!investigator ? true : false}
                            onClick={() =>
                                setShowCards((prevState) => !prevState)
                            }
                        >
                            {showCards ? 'Hide Cards' : 'Show Cards'}
                        </Button>
                    </CardContent>
                )}
            </Card>

            {investigator && showCards && (
                <CardDeck deck={investigator.cardDeck} />
            )}
        </div>
    )
}

export default PlayerCards
