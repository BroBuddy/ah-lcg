'use client'

import InvestigatorCard from '@/components/InvestigatorCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CardDeck from '@/components/CardDeck'
import SetupSteps from '@/components/SetupSteps'
import useInvestigatorStore from '@/store/investigatorStore'

const Home = () => {
    const { investigator } = useInvestigatorStore((state) => ({
        investigator: state.investigator,
    }))

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

                                <CardDeck
                                    deck={investigator.cardDeck as DeckCard[]}
                                />
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default Home
