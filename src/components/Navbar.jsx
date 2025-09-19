export default function Navbar(){
    return(
        <nav className="nav" class='bg-gray-700 text-white flex justify-between gap-[2rem] px-[1rem] items-stretch'>
            <div class='flex gap-[1rem] items-center'>
                <img src='../public/vite.svg'/>
                <a href="/" className="site-title" class='text-[2rem] '>[Company Name]</a>
            </div>
            <ul class='p-0 m-0 list-none flex gap-[1rem]'>
                <li>
                    <a href='/team' class='bg-gray-700 hover:bg-gray-400 active:bg-gray-400  h-full flex items-center p-[.25rem] '>Meet the Team</a>
                </li>
                <li>
                    <a href='/products' class='bg-gray-700 hover:bg-gray-400 active:bg-gray-400  h-full flex items-center p-[.25rem]' >Products</a>
                </li>
            </ul>

        </nav>
    );
}