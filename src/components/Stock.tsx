import { Label } from "./ui/label";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { supabaseApi } from "@/api/supabase-api";
import { useEffect, useState } from "react";
import type { Product } from "@/api/supabase-api";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { toast } from "sonner";

export function Stock() {
  //STATES
  const [products, setProducts] = useState<Product[]>([]);

  //GET PRODUCTS
  const fetchProducts = async () => {
    try {
      const data = await supabaseApi.getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addProduct = async (product: Omit<Product, "id" | "created_at">) => {
    try {
      await supabaseApi.addProduct(product);
      toast.success("Produto criado com sucesso!");
      fetchProducts();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      await supabaseApi.deleteProduct(id);
      toast.success("Produto removido com sucesso!");
      fetchProducts();
    } catch (error) {
      toast.error(error.message);
    }
  };

  //UPDATE DATA
  useEffect(() => {
    fetchProducts();
  }, []);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    max_quantity: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const productToAdd = {
        name: newProduct.name,
        price: Number(newProduct.price),
        quantity: Number(newProduct.quantity),
        max_quantity: Number(newProduct.max_quantity),
      };
      await addProduct(productToAdd);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <div className="mt-4 flex justify-end mb-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-auto">Novo Produto</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] w-[95vw] p-4 ">
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-xl sm:text-2xl">
                Novo Produto
              </DialogTitle>
              {/* <DialogDescription>
                Preencha os dados do produto para adicionar ao stock
              </DialogDescription> */}
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                <Label className="sm:text-right text-left">Nome</Label>
                <Input
                  id="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="sm:col-span-3"
                  placeholder="Nome do produto"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                <Label className="sm:text-right text-left">Preço</Label>
                <Input
                  id="price"
                  type="number"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className="sm:col-span-3"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                <Label className="sm:text-right text-left">Quantidade</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={newProduct.quantity}
                  onChange={handleInputChange}
                  className="sm:col-span-3"
                  placeholder="0"
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-end justify-center">
              <Button
                type="submit"
                onClick={handleSubmit}
                className="w-full sm:w-auto"
              >
                Adicionar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      {/* //LIST OF PRODUCTS */}
      {products.map((data) => {
        return (
          <Card key={data.id} className="mb-4 flex flex-col justify-center">
            <CardContent className="mt-5">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <Label className="text-2xl">{data.name}</Label>
                  <Label className="text-lg">
                    €{data.price} - <span className="font-bold">Stock:</span>{" "}
                    {data.quantity}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Pencil className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={() => deleteProduct(data.id)}
                    variant="destructive"
                    size="icon"
                  >
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
