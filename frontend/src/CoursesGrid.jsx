import { Link } from 'react-router-dom'
import image1 from './assets/video-placeholder.jpg'
import { useNavigate } from "react-router-dom";
import MyContext from "./MyContext"
import { useContext } from 'react';

const products = [
    {
        id: 1,
        name: 'Introduction to React.js',
        href: '/course-info',
        imageSrc: './assets/search-icon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 2,
        name: 'Introduction to React.js',
        href: '/course-info',
        imageSrc: './assets/search-icon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 3,
        name: 'Introduction to React.js',
        href: '/course-info',
        imageSrc: './assets/search-icon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 4,
        name: 'Introduction to React.js',
        href: '/course-info',
        imageSrc: './assets/search-icon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 5,
        name: 'Introduction to React.js',
        href: '/course-info',
        imageSrc: './assets/search-icon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 6,
        name: 'Introduction to React.js',
        href: '/course-info',
        imageSrc: './assets/search-icon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 7,
        name: 'Introduction to React.js',
        href: '/course-info',
        imageSrc: './assets/search-icon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 8,
        name: 'Introduction to React.js',
        href: '/course-info',
        imageSrc: './assets/search-icon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 9,
        name: 'Introduction to React.js',
        // href: {link },
        imageSrc: './assets/search-icon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
    {
        id: 10,
        name: 'Introduction to React.js',
        href: '/course-info',
        imageSrc: './assets/search-icon.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Dr Sarah Kapay',
    },
]

export default function Example() {
    const navigate = useNavigate();
    const {user} = useContext(MyContext);
    // console.log(user)

  const handleClick = (href) => {
    navigate(href);
  };
return (
<div>
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (

                
            <div key={product.id} className="group relative" title={product.name}
            >
                <div
                    className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
                    onClick={() => handleClick(product.href)}>
                    <img src={image1} alt={product.imageAlt}
                    
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-200">
                            <Link to ="/course-info" >
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                                </Link>
                            
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