import {  deleteProduct } from "../services/ProductService"
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { useNavigate, Form, ActionFunctionArgs, redirect, useFetcher} from 'react-router-dom'

type ProductDetailsProps = {
    product: Product
}

export const action = async ({ params }: ActionFunctionArgs) => {
    if (params.id !== undefined) { 

       await  deleteProduct(+params.id)
       return redirect('/')
    }
    
 }



const ProductDetails = ({ product }: ProductDetailsProps) => {
    const fetcher = useFetcher()
    const navigate = useNavigate();
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
              
               <fetcher.Form method="POST">
                    <button type="submit" name="id" value={product.id} className={`${isAvaliable ? 'text-black' : 'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}>
                        {isAvaliable ? 'Disponible' : 'No disponible'}
                </button>
        </fetcher.Form>
                
            </td>
            <td className="p-3 text-lg text-gray-800 ">
              <div className="flex gap-2 items-center">
                  {/* <Link
                      to={`/productos/${product.id}/editar`}
                      className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                  >
                      Editar
                  </Link> */}
                  <button
                      onClick={() => navigate(`/productos/${product.id}/editar`)}
                      className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                  >
                      Editar
                  </button>
                  <Form
                      className="w-full"
                      method="POST"
                      action={`productos/${product.id}/eliminar`}
                      onSubmit={(e) => {
                          if (!confirm("Eliminar")) {
                             e.preventDefault()
                         } 
                      }}
                  >
                      <input
                          type="submit"
                          value="Eliminar"
                          className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                      />
                  </Form>
                </div>
            </td>
    </tr> 
  )
}

export default ProductDetails