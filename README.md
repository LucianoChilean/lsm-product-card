# LSM-Product-Card

Este es un paquete de pruebas de despliegue de NPM

### Luciano Saavedra

## Ejemplo

```
import { ProductCard. ProductImage, ProductTitle, ProductButtons } from 'lsm-product-card';
```

```
<ProductCard
                            product={product}

                            initialValues={{
                                count: 4,
                                // maxCount: 10
                            }}
                        >
                            {
                                ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
                                    <>
                                        <ProductImage />
                                        <ProductTitle />
                                        <ProductButtons />

                                    </>
                                )
                            }


                        </ProductCard>

```