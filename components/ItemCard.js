import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import ItemChart from "./ItemChart";

export default function ItemCard({ item, itemGraph }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <img src={item.icon_large} alt={item.description} width={175} />
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>{item.current.price}</CardContent>
      <CardFooter>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Price History</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Price History</DrawerTitle>
                <DrawerDescription>Historical price data.</DrawerDescription>
              </DrawerHeader>
              <div>{itemGraph && <ItemChart data={itemGraph} />}</div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
        <Badge>{item.members === "true" ? "Members" : "Free"}</Badge>
      </CardFooter>
    </Card>
  );
}
