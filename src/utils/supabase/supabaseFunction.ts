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
  email: string | null,
  result: number,
  name: string | null
): Promise<void> => {
  const { error } = await supabase
    .from("users")
    .insert({ time: result, email: email, user_name: name });

  if (error) {
    console.error("Error adding item:", error);
  }
};

export const deleteItem = async (id: number): Promise<void> => {
  const { error } = await supabase.from("users").delete().eq("id", id);

  if (error) {
    console.error("Error deleting item:", error);
  }
};
