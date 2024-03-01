import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs";

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const user = await currentUser();
  return NextResponse.json({ user: user }, { status: 200 });
}
