'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import useScenarioStore from '@/store/scenarioStore'
import FlipCard from '@/components/FlipCard'

const Locations = () => {
    const { scenario } = useScenarioStore((state) => ({
        scenario: state.scenario,
    }))

    return (
        <Card>
            <CardHeader>
                <CardTitle>Locations</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-row gap-4">
                {!scenario?.locationDeck && (
                    <p>Please select a scenario first.</p>
                )}

                {scenario?.locationDeck &&
                    scenario.locationDeck.map(
                        (card: FlipCard, index: number) => {
                            return (
                                <FlipCard
                                    key={index}
                                    url="scenarios/the-gathering"
                                    card={card}
                                    name="Location Card"
                                    alignment="V"
                                />
                            )
                        }
                    )}
            </CardContent>
        </Card>
    )
}

export default Locations
