const borderColors = {
  purple: "hover:border-purple-600",
  blue: "hover:border-blue-600",
  green: "hover:border-green-600",
  red: "hover:border-red-600",
  yellow: "hover:border-yellow-600"
};

export default function Profile({image_path, is_reverse, name, description, color}){
    return(
        <div
        className={`flex items-center gap-8 m-8 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
            is_reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
            <img 
                src={image_path}
                className={`rounded-full w-36 h-36 object-cover shadow-md hover:scale-105 hover:border-3 ${borderColors[color]} transition-transform duration-300`}
            />
            <div className="flex flex-col gap-2">
                <div className="text-2xl font-semibold text-gray-900">{name}</div>
                <div className="text-gray-600 leading-relaxed">{description}</div>
            </div>
        </div>
    );
}