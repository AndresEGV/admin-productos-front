import { Product } from "../types"
import { formatCurrency } from "../utils"


type ProductDetailsProps = {
    product: Product
}
const ProductDetails = ({ product }: ProductDetailsProps) => {
    const isAvaliable = product.availability;

  return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvaliable ? 'Disponible': 'No Disponible'}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
              <div className="flex gap-2 items-center">
                  <button>
                      Editar
                  </button>
                </div>
            </td>
    </tr> 
  )
}

export default ProductDetails