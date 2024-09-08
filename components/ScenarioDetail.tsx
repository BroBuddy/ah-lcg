'use client'

import useScenarioStore from '@/store/scenarioStore'
import Image from 'next/image'
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
                <Tabs defaultValue="scenario">
                    <TabsList>
                        <TabsTrigger value="scenario">
                            {scenarioData.name}
                        </TabsTrigger>
                        <TabsTrigger value="agendaAct">
                            Agenda & Act
                        </TabsTrigger>
                        <TabsTrigger value="encounter">
                            Encounter Deck
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="scenario">
                        <Card key={scenarioData.name}>
                            <CardHeader>
                                <CardTitle>{scenarioData.name}</CardTitle>
                            </CardHeader>

                            <CardContent className="flex flex-row gap-4">
                                {scenarioData.setup &&
                                    scenarioData.setup.map(
                                        (card: string, index: number) => {
                                            return (
                                                <Image
                                                    key={index}
                                                    src={`/scenarios/${scenarioData.url}/${card}`}
                                                    height={264}
                                                    width={191}
                                                    alt={scenarioData.name}
                                                    className="image-card"
                                                />
                                            )
                                        }
                                    )}
                            </CardContent>

                            {scenario !== scenarioData && (
                                <CardFooter className="gap-2">
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            setScenario(scenarioData)
                                        }
                                    >
                                        Activate
                                    </Button>
                                </CardFooter>
                            )}
                        </Card>
                    </TabsContent>

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
                                                    <FlipCard
                                                        key={index}
                                                        url={`scenarios/${scenarioData.url}`}
                                                        name={scenarioData.name}
                                                        card={card}
                                                    />
                                                )
                                            }
                                        )}

                                        {scenarioData.act.map(
                                            (card: FlipCard, index: number) => {
                                                return (
                                                    <FlipCard
                                                        key={index}
                                                        url={`scenarios/${scenarioData.url}`}
                                                        name={scenarioData.name}
                                                        card={card}
                                                    />
                                                )
                                            }
                                        )}
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="encounter">
                        <CardDeck
                            deck={scenarioData.scenarioDeck as DeckCard[]}
                        />
                    </TabsContent>
                </Tabs>
            )}
        </>
    )
}

export default ScenarioDetail
