import placeholder from './assets/video-placeholder.jpg'


const products = [
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 1,
        name: 'Introduction to React.js',
        href: 'https://youtu.be/dQw4w9WgXcQ',
        imageSrc: './assets/video-placeholder.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },

    

]

export default function Example() {
return (
<div>
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-200"></h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
            <div key={product.id} className="group relative" title={product.name}>
                <div
                    className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img src={placeholder} alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-200">
                            <a href={product.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-200">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-200">{product.price}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
</div>
)
}