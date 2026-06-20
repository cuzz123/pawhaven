import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cat = req.nextUrl.searchParams.get("cat");
  const q = req.nextUrl.searchParams.get("q");
  const where: any = {};
  if (cat && cat !== "all") where.category = { slug: cat };
  if (q) where.OR = [{ name: { contains: q, mode: "insensitive" } }, { description: { contains: q, mode: "insensitive" } }];

  const products = await db.product.findMany({
    where,
    include: { category: { select: { name: true, slug: true } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(products);
}
