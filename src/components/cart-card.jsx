import {CiCircleRemove} from "react-icons/ci";

export default function CartCard({product}) {
    return (
        <>
            <div>
                <div className="bg-white rounded-lg p-4 shadow-sm relative">
                    <div className="flex items-center gap-4">
                        <div
                            className="w-24 h-24 relative rounded-md overflow-hidden bg-gray-100 shrink-0">
                            <img
                                src={product.product_image}
                                alt={product.product_title}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="text-base font-medium text-gray-900 truncate">
                                        {product.product_title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                                        {product.description}
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-gray-900">
                                        Price: ${product.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <CiCircleRemove className="w-6 h-6 cursor-pointer absolute top-2 right-2" fill={"red"}/>
                    </div>
                </div>
            </div>
        </>
    )
}