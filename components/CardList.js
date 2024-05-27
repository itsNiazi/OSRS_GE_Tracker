import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export default function CardList({ items }) {
  console.log(items);
  return (
    <>
      {items.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <img src={item.icon_large} alt={item.description} width={100} />
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
