
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
};

export default Layout;
