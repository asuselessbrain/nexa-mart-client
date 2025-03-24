"use server";

import { cookies } from "next/headers";

export const createShopAction = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("access token")!.value,
      },
      body: data,
    });
    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};
