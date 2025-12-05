export const products = [
    {
        id: 1,
        title: "Chandrika Soap",
        price: 120,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnFpPZZqgUtOlKVvT2trNdnVXfKlJMqyUTNCHNjd2kd4zPUM5rFdKKIFWpKU3o8PbqutGeYnfMAxyjf3Kf1jbRDjdvFCDpDxTBezBtwuvHS7VDKCoUvLTmnyE",
        description: "A natural handmade organic soap."
    },
    {
    id: 2,
    title: "Lux Soap",
    price: 150,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlCuUwyk-hgpb8UsCmaB8JMbxqwaSAJaBLLH-HO1mQ3I0WvYx-WR7LS3P1VdVjo2zP03__MGddc9OGa1EoXrFqUg9gYScwI-l0t8kIZAGRp4XFtKI-HaFL5g",
    description: "Soap with a luxurious fragrance."
  },
  {
    id: 3,
    title: "Pears Soap”",
    price: 110,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS44Tz9pAtrLeE_7xfsKDEzCYIQykBv8L8IcvmiYxiUISR4dCgf2nLT_Z3DtETLoFkudrvoFOS0O_OoyLz0j45rh7wEh18Nr38duJnwTgSFigifPLe3il77NQ",
    description: "A gentle soap for sensitive skin."
  }
];

export async function GET() {
    return Response.json(products);
}

