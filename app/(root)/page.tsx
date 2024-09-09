'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SetupSteps from '@/components/SetupSteps'
import useInvestigatorStore from '@/store/investigatorStore'
import CardDeck from '@/components/CardDeck'
import useScenarioStore from '@/store/scenarioStore'

const Home = () => {
    const { investigator } = useInvestigatorStore((state) => ({
        investigator: state.investigator,
    }))

    const { scenario } = useScenarioStore((state) => ({
        scenario: state.scenario,
    }))

    return (
        <section className="home">
            <div className="home-content">
                <Tabs defaultValue="setup">
                    <TabsList>
                        <TabsTrigger value="setup">Setup</TabsTrigger>
                        <TabsTrigger value="player">Player Deck</TabsTrigger>
                        <TabsTrigger value="encounter">
                            Encounter Deck
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="setup">
                        <div className="flex flex-col gap-8">
                            <SetupSteps />
                        </div>
                    </TabsContent>

                    <TabsContent value="player">
                        {investigator && (
                            <CardDeck deck={investigator.cardDeck} />
                        )}
                    </TabsContent>

                    <TabsContent value="encounter">
                        {scenario && <CardDeck deck={scenario.scenarioDeck} />}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default Home
