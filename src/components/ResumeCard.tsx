import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

export function ResumeCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Resumo de Valores</CardTitle>
      </CardHeader>
      <CardContent className="text-lg">
        <div>Valor em Falta: €</div>
        <div className="my-4 flex items-center gap-2">
          Valor Banco: 500.00 €
          <Button size="sm" variant="default" onClick={() => {}}>
            Editar
          </Button>
        </div>
        <div className="my-4 flex items-center gap-2">
          Valor Casa: €250.00
          <Button size="sm" variant="default" onClick={() => {}}>
            Editar
          </Button>
        </div>
        <div className="mt-4 border-t-2">
          <div className=" mt-4 font-medium text-xl">Valor Total: €</div>
        </div>
      </CardContent>
    </Card>
  );
}
