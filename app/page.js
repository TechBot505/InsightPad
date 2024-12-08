import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <h2 className="text-xl font-bold">Insight Pad</h2>
            <Button>Click me</Button>
            <UserButton />
        </div>
    );
}
