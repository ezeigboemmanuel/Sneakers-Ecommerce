import axios from "axios";
import { NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: { productId: string } }) {
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products/${params.productId}?organization_id=${process.env.NEXT_PUBLIC_ORGANIZATION_ID}&Appid=${process.env.NEXT_PUBLIC_APP_ID}&Apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[PRODUCTID_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
