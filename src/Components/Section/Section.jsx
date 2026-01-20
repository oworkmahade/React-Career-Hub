export default function Section({ title, para = "" }) {
  return (
    <section className="text-center">
      <p className="title text-4xl font-bold"> {title}</p>
      <p className="text-gray-600 my-2">{para}</p>
    </section>
  );
}
