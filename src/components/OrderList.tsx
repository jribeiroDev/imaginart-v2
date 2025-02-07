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

export function OrderList() {
  const [selected, setSelected] = useState();

  const selectedOption = opcoes.find((opcao) => opcao.value === selected);

  return (
    <Card>
      <CardContent className="mt-4">
        <Label className="text-2xl">Nome</Label>
        <div className="flex flex-col mb-4 mt-4 sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-2  text-muted-foreground">
            <Checkbox></Checkbox>
            <Label>Encomenda 1 - €500.00</Label>
          </div>
          <div className="flex gap-2">
            <Select value={selected} onValueChange={setSelected}>
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
              <Pencil className="w-4 h-4" />
            </Button>
            <Button variant="destructive" size="icon">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <Label className=" text-lg font-semibold">Total: €500.00</Label>
      </CardContent>
    </Card>
  );
}
