import DragZone from '@/components/Game/DragZone'
import EncounterCards from '@/components/Game/EncounterCards'
import Locations from '@/components/Game/Locations'
import PlayerCards from '@/components/Game/PlayerCards'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Play = () => {
    return (
        <section className="home">
            <div className="home-content">
                <Tabs defaultValue="scenario">
                    <TabsList>
                        <TabsTrigger value="scenario">Scenario</TabsTrigger>
                        <TabsTrigger value="locations">Locations</TabsTrigger>
                        <TabsTrigger value="encounter">Encounter</TabsTrigger>
                        <TabsTrigger value="player">Player</TabsTrigger>
                    </TabsList>

                    <TabsContent value="scenario">
                        <DragZone />
                    </TabsContent>

                    <TabsContent value="locations">
                        <Locations />
                    </TabsContent>

                    <TabsContent value="encounter">
                        <EncounterCards />
                    </TabsContent>

                    <TabsContent value="player">
                        <PlayerCards />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default Play
