export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center gap-3 text-sm text-gray-700">
        Loading <div className="animate-spin rounded-full h-8 w-8 border-4 border-slate-300 border-r-transparent"></div>
      </div>
    </div>
  );
}