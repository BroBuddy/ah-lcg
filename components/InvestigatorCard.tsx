import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import FlipCard from './FlipCard'
import Link from 'next/link'

type CardProps = {
    investigatorData: Investigator
    enterLink?: boolean
}

const InvestigatorCard = ({
    investigatorData,
    enterLink = true,
}: CardProps) => {
    return (
        <Card key={investigatorData.name} className="w-[350px]">
            <CardHeader>
                <CardTitle>{investigatorData.name}</CardTitle>
                <CardDescription>{investigatorData.class}</CardDescription>
            </CardHeader>

            <CardContent>
                {investigatorData.cards.map((card: FlipCard, index: number) => {
                    return (
                        <FlipCard
                            key={index}
                            url={'player/investigator'}
                            name={investigatorData.name}
                            card={card}
                        />
                    )
                })}
            </CardContent>

            <CardFooter className="gap-2">
                {enterLink && (
                    <Button asChild variant="outline">
                        <Link href={`/investigator/${investigatorData.url}`}>
                            Enter
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

export default InvestigatorCard
