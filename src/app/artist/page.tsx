import { redirect } from "next/navigation";

/**
 * /artist - Redirects to the About section on the main page.
 * When Shivangi's photo is ready, this page can be expanded into
 * a full artist profile page instead of redirecting.
 */
export default function ArtistPage() {
  redirect("/#about");
}
