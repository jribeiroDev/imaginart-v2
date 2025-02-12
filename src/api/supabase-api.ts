import supabase from "../supabase-client";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  max_quantity: number;
}

export const supabaseApi = {
  // Fetch all products
  async getProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("name", { ascending: true });

    if (error) throw error;
    return data as Product[];
  },

  // Add new product
  async addProduct(product: Omit<Product, "id" | "created_at">) {
    const { data, error } = await supabase
      .from("products")
      .insert(product)
      .select()
      .single();

    if (error) throw error;
    return data as Product;
  },

  // Update product
  async updateProduct(id: number, updates: Partial<Product>) {
    const { data, error } = await supabase
      .from("products")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Product;
  },

  // Delete product
  async deleteProduct(id: number) {
    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) throw error;
    return true;
  },
};
