import axios from "axios";
import { NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: { productId: string } }) {
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products/${params.productId}?organization_id=330723b0f89f442ab5fe4dd78c83ebf8&Appid=QXMISZB5CYBHXSA&Apikey=f856062ed8004cb481c29de69a88f59b20240712141043442125`
    );
    

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[PRODUCTID_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
