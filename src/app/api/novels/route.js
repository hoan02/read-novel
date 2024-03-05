import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    return NextResponse.json({ message: user }, { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching novels" + error, {
      status: 500,
    });
  }
};
