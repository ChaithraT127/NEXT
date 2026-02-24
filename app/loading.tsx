export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
      <div className="w-10 h-10 border-4 border-[#808000] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}