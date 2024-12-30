import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductList from "../routes/productList";
import useHorizontalProduct from "../vievModel/useHorizontalProduct";
import useProduct from "../vievModel/useProduct";

const mockProducts = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
}));

const mockHorizontalProducts = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: `Horizontal Product ${i + 1}`,
}));

jest.mock("../vievModel/useProduct", () => jest.fn());
jest.mock("../vievModel/useHorizontalProduct", () => jest.fn());

describe("ProductList Component", () => {
  beforeEach(() => {
    (useProduct as jest.Mock).mockReturnValue({ products: mockProducts });
    (useHorizontalProduct as jest.Mock).mockReturnValue({
      horizontalProducts: mockHorizontalProducts,
    });
  });

  test("renders product cards", () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    mockProducts.slice(0, 6).forEach((product) => {
      expect(screen.getByText(product.name)).toBeDefined();
    });

    mockHorizontalProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeDefined();
    });
  });

  test("renders pagination buttons", () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    const totalPages = Math.ceil(mockProducts.length / 6);
    for (let i = 1; i <= totalPages; i++) {
      expect(screen.getByText(`${i}`)).toBeDefined();
    }
  });

  test("changes page when pagination button is clicked", () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    const pageTwoButton = screen.getByText("2");
    fireEvent.click(pageTwoButton);

    mockProducts.slice(6, 12).forEach((product) => {
      expect(screen.getByText(product.name)).toBeDefined();
    });
  });

  test("renders no products message", () => {
    (useProduct as jest.Mock).mockReturnValue({ products: [] });
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    expect(screen.getByText(/Listelenecek ürün yok/i)).toBeDefined();
  });

  test("renders no horizontal products message", () => {
    (useHorizontalProduct as jest.Mock).mockReturnValue({
      horizontalProducts: [],
    });
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    expect(screen.getByText(/Listelenecek ürün yok/i)).toBeDefined();
  });
});
