import {products} from "../route.js";

export async function GET(request, {params}) {
    const {id} = await params;
    const product = products.find(p => p.id === parseInt(id));
    if (!product) {
        return Response.json(
            {message: `Product with id ${id} not found`},
            {status: 404}
        );
    }
    
    return Response.json(product);
}
