'use client'

import { useParams } from 'next/navigation'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import React from 'react'
import FlipCard from './FlipCard'
import { Button } from '@/components/ui/button'
import useInvestigatorStore from '@/store/investigatorStore'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CardDeck from './CardDeck'
import WeaknessList from './WeaknessList'
import { Progress } from '@/components/ui/progress'

const InvestigatorDetail = () => {
    const params = useParams()
    const { slug } = params

    const { investigator, findInvestigator, setInvestigator } =
        useInvestigatorStore((state) => ({
            investigator: state.investigator,
            findInvestigator: state.findInvestigator,
            setInvestigator: state.setInvestigator,
        }))

    const investigatorData = findInvestigator(slug as string)

    if (!investigatorData) {
        return (
            <Card>
                <CardHeader>
                    Could not find an investigator with given id.
                </CardHeader>
            </Card>
        )
    }

    return (
        <>
            {investigatorData && (
                <Tabs defaultValue="investigator">
                    <TabsList>
                        <TabsTrigger value="investigator">
                            {investigatorData.name}
                        </TabsTrigger>
                        <TabsTrigger value="player">Player Cards</TabsTrigger>
                        <TabsTrigger value="weaknesses">
                            Basic Weaknesses
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="investigator">
                        <div className="flex flex-row gap-8">
                            <Card
                                key={investigatorData.name}
                                className="w-[350px]"
                            >
                                <CardHeader>
                                    <CardTitle>
                                        {investigatorData.name}
                                    </CardTitle>
                                    <CardDescription>
                                        {investigatorData.class}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    {investigatorData.cards.map(
                                        (card, index) => {
                                            return (
                                                <FlipCard
                                                    key={index}
                                                    url={'player/investigator'}
                                                    name={investigatorData.name}
                                                    card={card}
                                                />
                                            )
                                        }
                                    )}
                                </CardContent>

                                {investigator !== investigatorData && (
                                    <CardFooter className="gap-2">
                                        <Button
                                            variant="outline"
                                            onClick={() =>
                                                setInvestigator(
                                                    investigatorData
                                                )
                                            }
                                        >
                                            Activate
                                        </Button>
                                    </CardFooter>
                                )}
                            </Card>

                            <Card className="w-[350px]">
                                <CardHeader>
                                    <CardTitle>Informations</CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <p>Willpower</p>
                                    <Progress
                                        className="bg-blue-400"
                                        value={
                                            (investigatorData.skills[0] * 100) /
                                            5
                                        }
                                    />
                                    <p>Intellect</p>
                                    <Progress
                                        className="bg-purple-400"
                                        value={
                                            (investigatorData.skills[1] * 100) /
                                            5
                                        }
                                    />
                                    <p>Combat</p>
                                    <Progress
                                        className="bg-red-400"
                                        value={
                                            (investigatorData.skills[2] * 100) /
                                            5
                                        }
                                    />
                                    <p>Agility</p>
                                    <Progress
                                        className="bg-green-400"
                                        value={
                                            (investigatorData.skills[3] * 100) /
                                            5
                                        }
                                    />

                                    <div className="mt-6">
                                        <p>Health</p>
                                        <Progress
                                            className="bg-red-400"
                                            value={
                                                (investigatorData.health *
                                                    100) /
                                                9
                                            }
                                        />

                                        <p>Sanity</p>
                                        <Progress
                                            className="bg-blue-400"
                                            value={
                                                (investigatorData.sanity *
                                                    100) /
                                                9
                                            }
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="player">
                        <CardDeck
                            deck={investigatorData.cardDeck as DeckCard[]}
                        />
                    </TabsContent>

                    <TabsContent value="weaknesses">
                        <WeaknessList />
                    </TabsContent>
                </Tabs>
            )}
        </>
    )
}

export default InvestigatorDetail
