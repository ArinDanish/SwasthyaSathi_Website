import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export const runtime = "nodejs";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST ?? "localhost",
  port: Number(process.env.MYSQL_PORT ?? 3306),
  user: process.env.MYSQL_USER ?? "root",
  password: process.env.MYSQL_PASSWORD ?? "",
  database: process.env.MYSQL_DATABASE ?? "swasthyasathi",
  waitForConnections: true,
  connectionLimit: 10,
});

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || null;
    const company = body.company?.trim() || null;
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    await pool.execute(
      `INSERT INTO contact (name, email, phone, company, subject, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone, company, subject, message]
    );

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form insert failed:", error);

    return NextResponse.json(
      { error: "Unable to save contact message." },
      { status: 500 }
    );
  }
}
