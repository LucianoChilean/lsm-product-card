import React from "react";
import renderer from "react-test-renderer";
import { product2 } from "../data/products";
import { ProductCard } from "../../src/components/ProductCard";
import { ProductImage } from "../../src/components/ProductImage";



describe('ProductImage', () => {
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductImage img="hola.jpg" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con el nombre del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });
});
