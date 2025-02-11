import { Checkbox } from "./ui/checkbox";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { cn } from "@/lib/utils";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const opcoes = [
  { value: "pendente", label: "Pendente", color: "text-yellow-600" },
  { value: "iniciada", label: "Iniciada", color: "text-blue-600" },
  { value: "faltapagamento", label: "Falta Pagamento", color: "text-red-600" },
  { value: "concluida", label: "Concluída", color: "text-green-600" },
];

const data = [
  {
    id: 1,
    name: "nome",
    products: "encomenda",
    price: "25.00",
    total: "25.00",
  },
  {
    id: 2,
    name: "nome2",
    products: "encomenda2",
    price: "30.00",
    total: "30.00",
  },
  {
    id: 3,
    name: "nome2",
    products: "encomenda2",
    price: "30.00",
    total: "30.00",
  },
];

export function OrderList() {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const handleStatusChange = (orderId: number, value: string) => {
    setSelected((prev) => ({
      ...prev,
      [orderId]: value,
    }));
  };

  // order.status ou order completed
  const isCompleted = true;

  return (
    <>
      {data.map((data) => {
        const selectedOption = opcoes.find(
          (opcao) => opcao.value === selected[data.id]
        );

        return (
          <Card key={data.id} className="mb-4">
            <CardContent className="mt-4">
              <Label className="text-2xl">{data.name}</Label>
              <div className="flex flex-col mb-1 mt-2 sm:flex-row justify-between gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  {/* ToDo: onCheckChanged  */}
                  <Checkbox checked={isCompleted}></Checkbox>
                  <Label
                    className={cn(
                      isCompleted && "line-through text-muted-foreground"
                    )}
                  >
                    {data.products} - €{data.price}
                  </Label>
                </div>
                <div className="flex gap-2">
                  <Select
                    value={selected[data.id]}
                    onValueChange={(value) =>
                      handleStatusChange(data.id, value)
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Selecione o estado">
                        <span
                          className={cn(
                            selectedOption?.color,
                            "whitespace-nowrap font-semibold"
                          )}
                        >
                          {selectedOption?.label || "Selecione o estado"}
                        </span>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {opcoes.map((opcao) => (
                        <SelectItem key={opcao.value} value={opcao.value}>
                          {opcao.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button variant="outline" size="icon">
                    <Pencil className="w-5 h-5" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <Label className=" text-lg font-semibold">
                Total: €{data.total}
              </Label>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
