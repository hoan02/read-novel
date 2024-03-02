import { NextResponse } from "next/server";
import { currentUser, auth, clerkClient } from "@clerk/nextjs";

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const user = await currentUser();
  return NextResponse.json({ user: user }, { status: 200 });
}
// export async function GET() {
//   const users = await clerkClient.users.getUserList();
//   return NextResponse.json({ users }, { status: 200 });
// }
