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
    const { scenarioDeck } = useScenarioStore((state) => ({
        scenarioDeck: state.scenarioDeck,
    }))

    return (
        <div className="flex flex-row flex-wrap gap-8">
            {scenarioDeck &&
                scenarioDeck?.map((scenarioData: Scenario, index: number) => {
                    return (
                        <Card key={index} className="w-[500px]">
                            <CardHeader>
                                <CardTitle>{scenarioData.name}</CardTitle>
                            </CardHeader>

                            <CardContent className="flex flex-row gap-4">
                                {scenarioData.setup.map(
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

                            <CardFooter className="gap-2">
                                <Button asChild variant="outline">
                                    <Link
                                        href={`/scenario/${scenarioData.url}`}
                                    >
                                        Enter
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })}
        </div>
    )
}

export default ScenarioList
