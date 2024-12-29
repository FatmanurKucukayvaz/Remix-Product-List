import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/productList");
}

export default function Index() {
  return null;
}
