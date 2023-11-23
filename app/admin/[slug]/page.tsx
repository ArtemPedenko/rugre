export default function AdminSlug({ params }: { params: { slug: string } }) {
	return <div>{params.slug}</div>;
}
