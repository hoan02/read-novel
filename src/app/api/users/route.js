"use server";

import { getUsers } from "@/lib/actions/user.action";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.error("Error GET users", err);
    return NextResponse.json("Error occurred", { status: 500 });
  }
}
