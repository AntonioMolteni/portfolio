import { BlogPostsGrid } from "app/components/posts";

export const metadata = {
  title: "Projects",
  description:
    "Explore the diverse projects and innovative solutions by Antonio Molteni. Discover a range of creative and technical works that showcase skills and expertise.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <div className="my-8">
        <BlogPostsGrid />
      </div>
    </section>
  );
}
