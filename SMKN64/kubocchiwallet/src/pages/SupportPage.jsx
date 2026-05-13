export default function SupportPage() {
  return (
    <div className="bg-[#f5ebf8] min-h-screen flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center text-[#4b2c66] mb-8">
          Support Center
        </h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <button className="w-full bg-purple-500 text-white py-4 rounded-2xl">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
