'use client'

import useInvestigatorStore from '@/store/investigatorStore'
import React from 'react'
import FlipCard from './FlipCard'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const InvestigatorList = () => {
    const { investigator, investigatorDeck, setInvestigator } =
        useInvestigatorStore((state) => ({
            investigatorDeck: state.investigatorDeck,
            setInvestigator: state.setInvestigator,
            investigator: state.investigator,
        }))

    return (
        <div className="flex flex-row flex-wrap gap-8">
            {investigatorDeck &&
                investigatorDeck?.map((investigatorData) => {
                    return (
                        <Card key={investigatorData.name} className="w-[350px]">
                            <CardHeader>
                                <CardTitle>{investigatorData.name}</CardTitle>
                                <CardDescription>
                                    {investigatorData.class}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <div className="flex flex-row cursor-pointer">
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
                                </div>
                            </CardContent>

                            <CardFooter className="gap-2">
                                <Button asChild variant="outline">
                                    <Link
                                        href={`/investigator/${investigatorData.url}`}
                                    >
                                        Enter
                                    </Link>
                                </Button>

                                {investigator !== investigatorData && (
                                    <Button
                                        variant="secondary"
                                        onClick={() =>
                                            setInvestigator(investigatorData)
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

export default InvestigatorList
