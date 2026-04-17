export default function PublicPageLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white px-6 py-20">
      

      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {title}
        </h1>
      </div>


      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-lg border border-white/20">
        <div className="space-y-6 text-gray-200 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}