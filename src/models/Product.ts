import * as Yup from 'yup';

export type Product = {
  id: string,
  name: string,
  manufacture: string,
  qubits: number,
  price: number,
};

export const ProductSchema = Yup.object().shape({
  name: Yup.string().required(),
  manufacture: Yup.string(),
  price: Yup.number().required(),
});
