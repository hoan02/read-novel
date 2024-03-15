import { NextResponse } from "next/server";
import { currentUser, auth, clerkClient } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.action";

export async function GET() {
  const { userId } = auth();
  const user = await getUserById(userId);
  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  return NextResponse.json({ user: user }, { status: 200 });
}

// export async function GET() {
//   const users = await clerkClient.users.getUserList();
//   return NextResponse.json({ users }, { status: 200 });
// }
