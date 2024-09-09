'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import useScenarioStore from '@/store/scenarioStore'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import CardDeck from '../CardDeck'

const EncounterCards = () => {
    const { scenario, shuffleEncounterDeck } = useScenarioStore((state) => ({
        scenario: state.scenario,
        shuffleEncounterDeck: state.shuffleEncounterDeck,
    }))

    const [showCards, setShowCards] = useState<boolean>(false)

    return (
        <div className="flex flex-col gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Encounter Cards</CardTitle>
                </CardHeader>

                {!scenario?.locationDeck && (
                    <CardContent>
                        <p>Please select a scenario first.</p>
                    </CardContent>
                )}

                {scenario?.locationDeck && (
                    <CardContent className="flex flex-row gap-4">
                        <Button
                            variant="outline"
                            disabled={!scenario ? true : false}
                            onClick={() => shuffleEncounterDeck()}
                        >
                            Shuffle Encounter Deck
                        </Button>

                        <Button
                            variant="ghost"
                            disabled={!scenario ? true : false}
                            onClick={() =>
                                setShowCards((prevState) => !prevState)
                            }
                        >
                            {showCards ? 'Hide Cards' : 'Show Cards'}
                        </Button>
                    </CardContent>
                )}
            </Card>

            {scenario && showCards && <CardDeck deck={scenario.scenarioDeck} />}
        </div>
    )
}

export default EncounterCards
