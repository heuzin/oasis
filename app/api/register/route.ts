import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "@/app/libs/db";

export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();

    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    console.log(existingUser);
    if (existingUser) {
      return new NextResponse("Email taken", { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await db.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("[REGISTER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
