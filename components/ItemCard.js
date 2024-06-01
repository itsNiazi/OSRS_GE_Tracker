import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function ItemCard({ item }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <img src={item.icon_large} alt={item.description} width={175} />
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>{item.current.price}</CardContent>
      <CardFooter>
        <Button>Price History</Button>
        <Badge>{item.members === "true" ? "Members" : "Free"}</Badge>
      </CardFooter>
    </Card>
  );
}
