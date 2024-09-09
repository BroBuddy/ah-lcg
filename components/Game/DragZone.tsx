'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import useScenarioStore from '@/store/scenarioStore'
import Draggable from 'react-draggable'
import React from 'react'
import FlipCard from '@/components/FlipCard'

const DragZone = () => {
    const { scenarioDeck } = useScenarioStore((state) => ({
        scenarioDeck: state.scenarioDeck,
    }))

    const nodeRef = React.useRef(null)

    const scenarioData = scenarioDeck[0]

    return (
        <>
            {scenarioData && (
                <Card>
                    <CardHeader>
                        <CardTitle>{scenarioData.name}</CardTitle>
                    </CardHeader>

                    <CardContent>
                        {scenarioData.locationDeck &&
                            scenarioData.locationDeck.map(
                                (card: FlipCard, index: number) => {
                                    return (
                                        <Draggable
                                            key={index}
                                            nodeRef={nodeRef}
                                        >
                                            <div
                                                className="w-[192px]"
                                                ref={nodeRef}
                                            >
                                                <FlipCard
                                                    url="scenarios/the-gathering"
                                                    card={card}
                                                    name="Location Card"
                                                    alignment="V"
                                                />
                                            </div>
                                        </Draggable>
                                    )
                                }
                            )}
                    </CardContent>
                </Card>
            )}
        </>
    )
}

export default DragZone
