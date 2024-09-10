'use client'

import useScenarioStore from '@/store/scenarioStore'
import React from 'react'
import FlipCard from './FlipCard'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import CardDeck from './CardDeck'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ScenarioDetail = () => {
    const params = useParams()
    const { slug } = params

    const { scenario, findScenario, setScenario } = useScenarioStore(
        (state) => ({
            scenario: state.scenario,
            findScenario: state.findScenario,
            setScenario: state.setScenario,
        })
    )

    const scenarioData: Scenario = findScenario(slug as string)

    if (!scenarioData) {
        return (
            <Card>
                <CardHeader>
                    Could not find an encounter with given id.
                </CardHeader>
            </Card>
        )
    }

    return (
        <>
            {scenarioData && (
                <Tabs defaultValue="agendaAct">
                    <TabsList>
                        <TabsTrigger value="agendaAct">
                            Agenda & Act
                        </TabsTrigger>
                        <TabsTrigger value="location">
                            Location Deck
                        </TabsTrigger>
                        <TabsTrigger value="encounter">
                            Encounter Deck
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="agendaAct">
                        <Card>
                            <CardHeader>
                                <CardTitle>Agenda & Act Cards</CardTitle>
                            </CardHeader>

                            <CardContent className="flex flex-row flex-wrap flex-1 gap-4">
                                {!scenarioData.agenda && !scenarioData.act && (
                                    <div>No agenda & act cards available.</div>
                                )}

                                {scenarioData.agenda && scenarioData.act && (
                                    <>
                                        {scenarioData.agenda.map(
                                            (card: FlipCard, index: number) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <FlipCard card={card} />
                                                    </React.Fragment>
                                                )
                                            }
                                        )}

                                        {scenarioData.act.map(
                                            (card: FlipCard, index: number) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <FlipCard card={card} />
                                                    </React.Fragment>
                                                )
                                            }
                                        )}
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="location">
                        <Card>
                            <CardHeader>
                                <CardTitle>Location Deck</CardTitle>
                            </CardHeader>

                            <CardContent className="flex flex-row flex-wrap flex-1 gap-4">
                                {!scenarioData.locationDeck && (
                                    <div>No location cards available.</div>
                                )}

                                {scenarioData.locationDeck &&
                                    scenarioData.locationDeck.map(
                                        (card: FlipCard, index: number) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <FlipCard card={card} />
                                                </React.Fragment>
                                            )
                                        }
                                    )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="encounter">
                        <CardDeck
                            deck={scenarioData.scenarioDeck as FlipCard[]}
                        />
                    </TabsContent>
                </Tabs>
            )}
        </>
    )
}

export default ScenarioDetail
