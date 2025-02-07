import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { OrderList } from "./OrderList";

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
          <OrderList />
        </TabsContent>
        <TabsContent value="stock">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
}
