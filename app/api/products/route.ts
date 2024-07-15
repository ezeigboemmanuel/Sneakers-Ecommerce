import axios from "axios";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products?organization_id=${process.env.NEXT_PUBLIC_ORGANIZATION_ID}&reverse_sort=false&page=1&size=30&Appid=${process.env.NEXT_PUBLIC_APP_ID}&Apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[PRODUCT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
