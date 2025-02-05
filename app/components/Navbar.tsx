export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between px-10 py-4 z-50">
            <nav className="hidden md:flex gap-8">
                <a href="#home" className="text-lg text-darkGreen font-nunito hover:text-blue-500 transition">Home</a>
                <a href="#projects" className="text-lg text-darkGreen font-nunito hover:text-blue-500 transition">Projects</a>
                <a href="#research" className="text-lg text-darkGreen font-nunito hover:text-blue-500 transition">Research</a>
                <a href="#about" className="text-lg text-darkGreen font-nunito hover:text-blue-500 transition">About</a>
            </nav>
        </header>
    );
}
