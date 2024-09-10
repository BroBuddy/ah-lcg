'use client'

import useScenarioStore from '@/store/scenarioStore'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React from 'react'
import FlipCard from './FlipCard'

const ScenarioList = () => {
    const { scenarioDeck } = useScenarioStore((state) => ({
        scenarioDeck: state.scenarioDeck,
    }))

    return (
        <div className="flex flex-row flex-wrap gap-8">
            {scenarioDeck &&
                scenarioDeck?.map((scenarioData: Scenario, index: number) => {
                    return (
                        <Card key={index} className="w-[300px]">
                            <CardHeader>
                                <CardTitle>{scenarioData.name}</CardTitle>
                            </CardHeader>

                            <CardContent className="flex flex-row gap-4">
                                {scenarioData.setup.map(
                                    (card: FlipCard, index: number) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <FlipCard card={card} />
                                            </React.Fragment>
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
