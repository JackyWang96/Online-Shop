import React from "react";
import { render, fireEvent } from '@testing-library/react';
import { CartContext } from '../src/contexts/cart.context';
import ProductCard from '../src/components/product-card/product-card.component';
import sinon from 'sinon';
import { expect } from 'chai';
import CartDropdown from "../src/components/cart-dropdown/cart-dropdown.component";
import { MemoryRouter } from 'react-router-dom';
import chaiDom from "chai-dom";


const { JSDOM } = require('jsdom');
const dom = new JSDOM();
global.window = dom.window;
global.document = dom.window.document;
describe('ProductCard', () => {
    let addItemToCartMock;
    let defaultProps;

    beforeEach(() => {
        addItemToCartMock = sinon.fake();
        defaultProps = {
            product: {
                name: 'Test Product',
                price: 100,
                imageUrl: 'https://test.com/test.jpg'
            }
        };
    });

    const renderWithContext = (props = {}) => {
        return render(
            <CartContext.Provider value={{ addItemToCart: addItemToCartMock }}>
                <ProductCard {...defaultProps} {...props} />
            </CartContext.Provider>
        );
    };

    it('renders product details correctly', () => {
        const { getByText, getByAltText } = renderWithContext();

        expect(getByText(defaultProps.product.name)).to.exist;
        expect(getByText(`$${defaultProps.product.price}`)).to.exist;
        expect(getByAltText(defaultProps.product.name).getAttribute('src')).to.equal(defaultProps.product.imageUrl);
    });

    it('calls addItemToCart when add to cart button is clicked', () => {
        const { getByText } = renderWithContext();

        fireEvent.click(getByText('Add to card'));

        expect(addItemToCartMock.calledOnce).to.be.true;
        expect(addItemToCartMock.calledWith(defaultProps.product)).to.be.true;
    });
});

describe("CartDropdown", () => {
    it("renders cart items correctly", () => {
        const cartItems = [
            { id: "1", name: "Item 1", price: 100, quantity: 2 },
            { id: "2", name: "Item 2", price: 200, quantity: 1 }
        ];

        const { getByText } = render(
            <MemoryRouter>
                <CartContext.Provider value={{ cartItems }}>
                    <CartDropdown />
                </CartContext.Provider>
            </MemoryRouter>
        );

        cartItems.forEach((item) => {
            expect(getByText(item.name)).to.exist;
        });
    });
});
