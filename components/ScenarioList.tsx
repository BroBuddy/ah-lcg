'use client'

import useScenarioStore from '@/store/scenarioStore'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const ScenarioList = () => {
    const { scenario, scenarioDeck, setScenario } = useScenarioStore(
        (state) => ({
            scenario: state.scenario,
            scenarioDeck: state.scenarioDeck,
            setScenario: state.setScenario,
        })
    )

    return (
        <div className="flex flex-row flex-wrap gap-8">
            {scenarioDeck &&
                scenarioDeck?.map((scenarioData) => {
                    return (
                        <Card key={scenarioData.name} className="w-[500px]">
                            <CardHeader>
                                <CardTitle>{scenarioData.name}</CardTitle>
                            </CardHeader>

                            <CardContent className="flex flex-row gap-4">
                                {scenarioData.setup.map((card) => {
                                    return (
                                        <Image
                                            key={card}
                                            src={`/scenarios/${scenarioData.url}/${card}`}
                                            height={264}
                                            width={191}
                                            alt={scenarioData.name}
                                            className="image-card"
                                        />
                                    )
                                })}
                            </CardContent>

                            <CardFooter className="gap-2">
                                <Button asChild variant="outline">
                                    <Link
                                        href={`/scenario/${scenarioData.url}`}
                                    >
                                        Enter
                                    </Link>
                                </Button>

                                {scenario !== scenarioData && (
                                    <Button
                                        variant="secondary"
                                        onClick={() =>
                                            setScenario(scenarioData)
                                        }
                                    >
                                        Activate
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    )
                })}
        </div>
    )
}

export default ScenarioList
