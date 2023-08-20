import { NextRequest, NextResponse } from "next/server";
import { cartColumns, db } from "../../../lib/drizzle";
import { cookies } from "next/headers";
import { v4 } from "uuid";
import { and, eq } from "drizzle-orm";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const setCookies = cookies();
  const uid = v4();
  const user_id = setCookies.get("user_id")?.value as string;
  if (!user_id) {
    setCookies.set("user_id", uid);
  }
  try {
    const res = await db
      .insert(cartColumns)
      .values({
        user_id: user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        image_url: req.image_url,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
      })
      .onConflictDoUpdate({
        target: [cartColumns.product_title,cartColumns.user_id],
        set: {
          product_quantity: req.product_quantity,
          product_price: req.product_price,
        },
      })
      .returning();
    console.log("Data Posted To Database");
    return NextResponse.json({ res });
  } catch (error) {
    console.log("Error While Posting Data To Database");
    console.log("error", error);
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};

export const GET = async (request: NextRequest) => {
  const uid = request.nextUrl.searchParams.get("user_id") as string;
  try {
    const res = await db
      .select()
      .from(cartColumns)
      .where(eq(cartColumns.user_id, uid));
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};

export async function DELETE(req: NextRequest) {
  let url = req.nextUrl.searchParams;

  try {
      if (url.has("product_id") && url.has("user_id")) {
          let response = await db.delete(cartColumns).
              where(
                  and(eq(cartColumns.product_id, (url.get("product_id") as string)), eq(cartColumns.user_id, (url.get("user_id") as string)))
              ).returning()
          return NextResponse.json({ response });
      }
  } catch (error) {
      console.log("error : ", (error as { message: string }).message)
      return NextResponse.json({ error })
  }
} 
