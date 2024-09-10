'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { WeaknessDeck } from '@/store/cardData'
import React from 'react'
import FlipCard from './FlipCard'

const WeaknessList = () => {
    const weaknessDeck = WeaknessDeck

    return (
        <Card>
            <CardHeader>
                <CardTitle>Basic Weaknesses</CardTitle>
                <CardDescription>
                    Total cards: {weaknessDeck?.length}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-row flex-wrap flex-1 gap-4">
                {weaknessDeck.map((card: FlipCard, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <FlipCard card={card} />
                        </React.Fragment>
                    )
                })}
            </CardContent>
        </Card>
    )
}

export default WeaknessList
