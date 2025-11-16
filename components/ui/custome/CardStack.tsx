import Image from "next/image";

export default function CardStack() {
  return (
      <div className="relative w-full h-full">
        {/* Back card - smallest and furthest */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg translate-x-16 scale-75 z-10  overflow-hidden" >
           <Image
            src="https://i.pinimg.com/736x/3e/28/b4/3e28b4497416c5b67cabddf6f9769583.jpg"
            alt="Spider-Man Homecoming"
            className="w-full h-full object-cover"
            height={200}
            width={200}
          />
        </div>

        {/* Middle card */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl shadow-xl translate-x-8 scale-90 z-20  overflow-hidden" >
           <Image
            src="https://i.pinimg.com/1200x/8f/7f/b3/8f7fb3ea4f1ba6cba6eeb9a7864f1926.jpg"
            alt="Spider-Man Homecoming"
            className="w-full h-full object-cover"
            height={200}
            width={200}
          />
        </div>

        {/* Front card - largest */}
        <div className="absolute inset-0 bg-gray-900 rounded-xl overflow-hidden shadow-2xl z-30">
          <Image
            src="https://i.pinimg.com/1200x/78/48/79/784879090129ad49a28805087ea5ca59.jpg"
            alt="Spider-Man Homecoming"
            className="w-full h-full object-cover"
            height={200}
            width={200}
          />
        </div>
      </div>
  );
}