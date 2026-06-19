import PostEditor from "@/components/admin/PostEditor";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditIngredientPage({ params }: Props) {
  const { id } = await params;
  return <PostEditor postId={id} contentType="ingredient" />;
}
