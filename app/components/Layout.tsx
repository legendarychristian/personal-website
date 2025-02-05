import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-[#f5f9fc] text-gray-800">
            <div className="flex flex-col">
                <Navbar />
                {children}
            </div>
        </div>
    );
}