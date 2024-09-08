'use client'

import { useParams } from 'next/navigation'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'
import useInvestigatorStore from '@/store/investigatorStore'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CardDeck from './CardDeck'
import WeaknessList from './WeaknessList'
import InvestigatorInformation from './InvestigatorInformation'
import InvestigatorCard from './InvestigatorCard'

const InvestigatorDetail = () => {
    const params = useParams()
    const { slug } = params

    const { findInvestigator } = useInvestigatorStore((state) => ({
        findInvestigator: state.findInvestigator,
    }))

    const investigatorData: Investigator = findInvestigator(slug as string)

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
                            <InvestigatorCard
                                investigatorData={investigatorData}
                                enterLink={false}
                            />

                            <InvestigatorInformation
                                health={investigatorData.health}
                                sanity={investigatorData.sanity}
                                skills={investigatorData.skills}
                            />
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
