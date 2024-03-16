import type { NextApiRequest, NextApiResponse } from "next";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  try {
    // Lakukan permintaan ke endpoint eksternal
    const apiUrl = "https://backend-tokopedia.vercel.app/api/products";
    const response = await fetch(apiUrl);

    // Periksa apakah permintaan berhasil
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    // Ambil data JSON dari respons
    const data: Product[] = await response.json();

    // Tampilkan hasil respons ke konsol
    console.log("Response from", apiUrl);
    console.log("Data:", data);

    // Kirimkan data sebagai respons
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
