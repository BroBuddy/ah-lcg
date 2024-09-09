'use client'

import useScenarioStore from '@/store/scenarioStore'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

const EncounterCards = () => {
    const {
        scenario,
        addCardToDragZone,
        removeCardFromDragZone,
        shuffleEncounterDeck,
        drawCardFromEncounterDeck,
        dragZone,
    } = useScenarioStore((state) => ({
        scenario: state.scenario,
        shuffleEncounterDeck: state.shuffleEncounterDeck,
        addCardToDragZone: state.addCardToDragZone,
        removeCardFromDragZone: state.removeCardFromDragZone,
        drawCardFromEncounterDeck: state.drawCardFromEncounterDeck,
        dragZone: state.dragZone,
    }))

    const [showCards, setShowCards] = useState<boolean>(false)

    const activateCard = (card: DeckCard | FlipCard) => {
        addCardToDragZone(card)
    }

    const deactivateCard = (card: DeckCard | FlipCard) => {
        removeCardFromDragZone(card)
    }

    const isLocationAtDragZone = (card: DeckCard | FlipCard) => {
        return dragZone.includes(card)
    }

    return (
        <div className="flex flex-col gap-8">
            {!scenario?.scenarioDeck && <p>Please select a scenario first.</p>}

            {scenario?.scenarioDeck && (
                <div className="flex flex-row gap-4">
                    <Button
                        variant="outline"
                        disabled={!scenario ? true : false}
                        onClick={() => drawCardFromEncounterDeck()}
                    >
                        Draw Card
                    </Button>

                    <Button
                        variant="outline"
                        disabled={!scenario ? true : false}
                        onClick={() => shuffleEncounterDeck()}
                    >
                        Shuffle Deck
                    </Button>

                    <Button
                        variant="ghost"
                        disabled={!scenario ? true : false}
                        onClick={() => setShowCards((prevState) => !prevState)}
                    >
                        {showCards ? 'Hide Cards' : 'Show Cards'}
                    </Button>
                </div>
            )}

            {scenario && showCards && (
                <ScrollArea className="h-[460px] w-[460px] rounded-md border p-4">
                    {scenario?.scenarioDeck &&
                        scenario.scenarioDeck.map(
                            (card: DeckCard, index: number) => {
                                return (
                                    <div
                                        className="flex flex-row justify-between items-center gap-4"
                                        key={index}
                                    >
                                        <div className="flex w-[120px]">
                                            {card.name}
                                        </div>

                                        <div className="flex w-[120px]">
                                            {card.type}
                                        </div>

                                        <div className="flex w-[120px]">
                                            {isLocationAtDragZone(card) ? (
                                                <Button
                                                    onClick={() =>
                                                        deactivateCard(card)
                                                    }
                                                >
                                                    Remove
                                                </Button>
                                            ) : (
                                                <Button
                                                    onClick={() =>
                                                        activateCard(card)
                                                    }
                                                >
                                                    Add
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                )
                            }
                        )}
                </ScrollArea>
            )}
        </div>
    )
}

export default EncounterCards
