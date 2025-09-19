export default function Product(){
    return(
        <div className="bg-gray-500 h-150 w-1/6 m-10 flex flex-col items-center rounded-2xl">
            <div className="flex justify-center m-4 bg-gray-300 w-2/3 rounded-2xl ">
                <img src="../../public/vite.svg"/>
                <h1>Ummah Connect</h1>
            </div>
            <img 
                src="/uc_proto.png"
                className="rounded-2xl h-2/3 w-2/3 object-cover" 
            />
            <div className="m-4">
                This is a brief description of this product/service. Still in production.
            </div>
            <div className="bg-blue-500 rounded-2xl w-1/2 flex justify-center m-4 hover:bg-blue-300">
                <button>Learn More</button>
            </div>
        </div>
    );
}