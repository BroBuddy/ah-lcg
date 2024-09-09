'use client'

import useScenarioStore from '@/store/scenarioStore'
import { Button } from '../ui/button'
import { ScrollArea } from '@radix-ui/react-scroll-area'

const Locations = () => {
    const { scenario, addCardToDragZone, removeCardFromDragZone, dragZone } =
        useScenarioStore((state) => ({
            scenario: state.scenario,
            addCardToDragZone: state.addCardToDragZone,
            removeCardFromDragZone: state.removeCardFromDragZone,
            dragZone: state.dragZone,
        }))

    const activateCard = (card: FlipCard) => {
        addCardToDragZone(card)
    }

    const deactivateCard = (card: FlipCard) => {
        removeCardFromDragZone(card)
    }

    const isLocationAtDragZone = (card: FlipCard) => {
        return dragZone.includes(card)
    }

    return (
        <div className="flex flex-col gap-4">
            {!scenario?.locationDeck && <p>Please select a scenario first.</p>}

            <ScrollArea className="h-[460px] w-[460px] rounded-md border p-4">
                {scenario?.locationDeck &&
                    scenario.locationDeck.map(
                        (card: FlipCard, index: number) => {
                            return (
                                <div
                                    className="flex flex-row justify-between items-center gap-4"
                                    key={index}
                                >
                                    <div className="flex w-[150px]">
                                        {card.name}
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
        </div>
    )
}

export default Locations
