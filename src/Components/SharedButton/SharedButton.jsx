export default function SharedButton({ btnText }) {
  return (
    <>
      <button className="w-full px-4 py-2 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white font-semibold rounded-sm shadow-sm hover:opacity-90 transition-opacity">
        {btnText}
      </button>
    </>
  );
}
