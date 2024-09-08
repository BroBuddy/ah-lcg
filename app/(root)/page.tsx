'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import InvestigatorCard from '@/components/InvestigatorCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CardDeck from '@/components/CardDeck'
import SetupSteps from '@/components/SetupSteps'
import useInvestigatorStore from '@/store/investigatorStore'
import React from 'react'
import Image from 'next/image'

const Home = () => {
    const { investigator, removeCardFromDeck } = useInvestigatorStore(
        (state) => ({
            investigator: state.investigator,
            removeCardFromDeck: state.removeCardFromDeck,
        })
    )

    return (
        <section className="home">
            <div className="home-content">
                <Tabs defaultValue="setup">
                    <TabsList>
                        <TabsTrigger value="setup">Setup</TabsTrigger>
                        <TabsTrigger value="player">Player deck</TabsTrigger>
                    </TabsList>

                    <TabsContent value="setup">
                        <div className="flex flex-col gap-8">
                            <SetupSteps />
                        </div>
                    </TabsContent>

                    <TabsContent value="player">
                        {investigator && (
                            <div className="flex flex-col gap-8">
                                <InvestigatorCard
                                    investigatorData={investigator}
                                />

                                {investigator.cardDeck && (
                                    <Card className="w-full">
                                        <CardHeader>
                                            <CardTitle>Deck Cards</CardTitle>
                                            <CardDescription>
                                                Total cards:{' '}
                                                {investigator.cardDeck.length}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="flex flex-row flex-wrap flex-1 gap-4">
                                            {investigator.cardDeck.map(
                                                (
                                                    card: DeckCard,
                                                    index: number
                                                ) => {
                                                    return (
                                                        <React.Fragment
                                                            key={index}
                                                        >
                                                            <Image
                                                                src={`/${card.category}/${card.url}/${card.image}`}
                                                                height={264}
                                                                width={191}
                                                                className="image-card cursor-pointer"
                                                                alt="Deck Card"
                                                                onClick={() =>
                                                                    removeCardFromDeck(
                                                                        card
                                                                    )
                                                                }
                                                            />
                                                        </React.Fragment>
                                                    )
                                                }
                                            )}
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default Home
