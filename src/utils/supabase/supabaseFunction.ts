import { supabase } from "./supabase";

// データベースのusersテーブルに対応する型を定義
interface User {
  id: number;
  created_at: Date;
  email: string;
  user_name: string;
  time: number;
}

export const getRanking = async (): Promise<User[] | null> => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .order("time", { ascending: true });

  if (error) {
    console.error("Error fetching ranking:", error);
    return null;
  }

  return data as User[]; // dataの型をUser[]として扱う
};

export const addResult = async (
  email: string,
  result: number,
  name: string
): Promise<void> => {
  const { error } = await supabase
    .from("users")
    .insert({ time: result, email: email, user_name: name });
  console.log(email, result, name);

  if (error) {
    console.error("Error adding item:", error);
  }
};

export const getUserRecord = async (
  email: string,
  name: string
): Promise<any> => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("user_name", name)
    .single();

  if (error) {
    console.error("Error fetching user record:", error);
    return null;
  }
  return data;
};

export const updateTimeIfSmaller = async (
  name: string,
  email: string,
  newTime: number
): Promise<void> => {
  // 既存のデータを取得する
  const { data, error: selectError } = await supabase
    .from("users")
    .select("time")
    .eq("user_name", name)
    .eq("email", email)
    .single();

  if (selectError) {
    console.error("Error fetching item:", selectError);
    return;
  }

  if (data && data.time > newTime) {
    // time が新しい time よりも大きい場合、更新する
    const { error: updateError } = await supabase
      .from("users")
      .update({ time: newTime })
      .eq("user_name", name)
      .eq("email", email);

    if (updateError) {
      console.error("Error updating item:", updateError);
    } else {
      console.log(`Time updated to ${newTime} for user ${name} (${email})`);
    }
  } else {
    console.log(`No update needed. Existing time is ${data.time}`);
  }
};
