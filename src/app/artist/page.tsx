import { redirect } from "next/navigation";

/**
 * /artist redirects to the dedicated /about page.
 */
export default function ArtistPage() {
  redirect("/about");
}
