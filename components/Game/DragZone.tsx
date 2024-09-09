'use client'

import { Card, CardContent } from '@/components/ui/card'
import useScenarioStore from '@/store/scenarioStore'
import Draggable from 'react-draggable'
import React from 'react'
import FlipCard from '@/components/FlipCard'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import Locations from './Locations'
import { Button } from '../ui/button'
import { DialogDescription } from '@radix-ui/react-dialog'
import PlayerCards from './PlayerCards'
import EncounterCards from './EncounterCards'
import Image from 'next/image'

const DragZone = () => {
    const { dragZone } = useScenarioStore((state) => ({
        scenario: state.scenario,
        dragZone: state.dragZone,
    }))

    const nodeRef = React.useRef(null)

    return (
        <>
            <div className="flex flex-row flex-wrap gap-4">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Locations</Button>
                    </DialogTrigger>

                    <DialogContent className="flex flex-row flex-wrap w-[1000px]">
                        <DialogHeader className="flex gap-4">
                            <DialogTitle>Locations</DialogTitle>
                            <DialogDescription>
                                <Locations />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Encounter</Button>
                    </DialogTrigger>

                    <DialogContent className="flex flex-row flex-wrap w-[1000px]">
                        <DialogHeader className="flex gap-4">
                            <DialogTitle>Encounter</DialogTitle>
                            <DialogDescription>
                                <EncounterCards />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Player</Button>
                    </DialogTrigger>

                    <DialogContent className="flex flex-row flex-wrap w-[1000px]">
                        <DialogHeader className="flex gap-4">
                            <DialogTitle>Player</DialogTitle>
                            <DialogDescription>
                                <PlayerCards />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            <Card>
                <CardContent className="flex flex-col min-h-screen">
                    {dragZone &&
                        dragZone.map(
                            (card: DeckCard | FlipCard, index: number) => {
                                return (
                                    <Draggable key={index} nodeRef={nodeRef}>
                                        <span
                                            className="absolute w-[192px]"
                                            ref={nodeRef}
                                        >
                                            {card.type === 'Location' && (
                                                <FlipCard
                                                    url={card.url as string}
                                                    card={card as FlipCard}
                                                    name="Card"
                                                    alignment="V"
                                                />
                                            )}

                                            {card.type !== 'Location' && (
                                                <Image
                                                    src={`/${card.url}/${(card as DeckCard).image}`}
                                                    height={264}
                                                    width={191}
                                                    className="image-card"
                                                    alt="Card"
                                                />
                                            )}
                                        </span>
                                    </Draggable>
                                )
                            }
                        )}
                </CardContent>
            </Card>
        </>
    )
}

export default DragZone
