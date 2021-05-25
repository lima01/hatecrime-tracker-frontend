/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'News', href: '#' },
    { name: 'Map', href: '#' },
    { name: 'About', href: '#' },
]


export default function Nav() {
    return (
        <header className="bg-red-600">
            <nav className="max-w-full  px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="hidden lg:block w-full py-6 flex items-center justify-between lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <img
                                className=" h-22 w-auto"
                                src="/asiangirl.png"
                                alt=""
                            />
                        </a>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-red-50">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-red-50">
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}
