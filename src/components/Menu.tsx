import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { OrderList } from "./OrderList";
import { Stock } from "./Stock";
import { Button } from "./ui/button";

export function Menu() {
  return (
    <>
      <Tabs defaultValue="encomendas" className="">
        <TabsList className="h-auto">
          <TabsTrigger className="text-xl" value="encomendas">
            Encomendas
          </TabsTrigger>
          <TabsTrigger className="text-xl" value="stock">
            Stock
          </TabsTrigger>
          <TabsTrigger className="text-xl" value="encomendasconcluidas">
            Encomendas Concluídas
          </TabsTrigger>
        </TabsList>
        <TabsContent value="encomendas">
          <div className="mt-4 flex flex-col">
            <div className="flex justify-end mb-2">
              <Button className="w-auto">Nova Encomenda</Button>
            </div>
            <OrderList />
          </div>
        </TabsContent>
        <TabsContent value="stock">
          <div className="mt-4 flex flex-col">
            <div className="flex justify-end mb-2">
              <Button className="w-auto">Novo Produto</Button>
            </div>
            <Stock />
          </div>
        </TabsContent>
        <TabsContent value="encomendasconcluidas">
          {/* <Stock /> */}
        </TabsContent>
      </Tabs>
    </>
  );
}
