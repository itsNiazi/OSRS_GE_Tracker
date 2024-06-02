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
    <Card className="w-[300px] text-center">
      <CardHeader>
        <img
          className="mx-auto"
          src={item.icon_large}
          alt={item.description}
          width={175}
        />
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-semibold text-gray-400">
          Price:
          <span
            className={` font-semibold ml-2 ${
              item.today.trend === "negative"
                ? "text-red-500"
                : item.today.trend === "neutral"
                ? "text-yellow-500"
                : item.today.trend === "positive"
                ? "text-green-500"
                : "text-gray-500"
            }
      `}
          >
            {item.current.price}
          </span>
        </p>
      </CardContent>
      <CardFooter className="flex-col-reverse">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary">Price History</Button>
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
        <Badge className="mb-3">
          {item.members === "true" ? "Members" : "Free"}
        </Badge>
      </CardFooter>
    </Card>
  );
}
