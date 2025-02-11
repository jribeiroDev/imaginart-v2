import { Label } from "@radix-ui/react-dropdown-menu";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const data = [
  {
    id: 1,
    name: "Garrafa 750ml",
    price: "14.00",
    stock: 20,
  },
  {
    id: 2,
    name: "Garrafa 500ml",
    price: "10.00",
    stock: 10,
  },
];

export function Stock() {
  return (
    <>
      {data.map((data) => {
        return (
          <Card key={data.id} className="mb-4 flex flex-col justify-center">
            <CardContent className="mt-5">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <Label className="text-2xl">{data.name}</Label>
                  <Label className="text-lg">
                    €{data.price} - <span className="font-bold">Stock:</span>{" "}
                    {data.stock}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Pencil className="w-5 h-5" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
