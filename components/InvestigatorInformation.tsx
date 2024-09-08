import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

type InfotmationProps = {
    health: number
    sanity: number
    skills: number[]
}

const InvestigatorInformation = ({
    health,
    sanity,
    skills,
}: InfotmationProps) => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Informations</CardTitle>
            </CardHeader>

            <CardContent>
                <p>Willpower</p>
                <Progress
                    className="bg-blue-400"
                    value={(skills[0] * 100) / 5}
                />
                <p>Intellect</p>
                <Progress
                    className="bg-purple-400"
                    value={(skills[1] * 100) / 5}
                />
                <p>Combat</p>
                <Progress
                    className="bg-red-400"
                    value={(skills[2] * 100) / 5}
                />
                <p>Agility</p>
                <Progress
                    className="bg-green-400"
                    value={(skills[3] * 100) / 5}
                />

                <div className="mt-6">
                    <p>Health</p>
                    <Progress
                        className="bg-red-400"
                        value={(health * 100) / 9}
                    />

                    <p>Sanity</p>
                    <Progress
                        className="bg-blue-400"
                        value={(sanity * 100) / 9}
                    />
                </div>
            </CardContent>
        </Card>
    )
}

export default InvestigatorInformation
