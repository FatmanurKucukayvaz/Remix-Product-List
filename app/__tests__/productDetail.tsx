import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductDetailPage from "../routes/productDetail.$productId";
import useProductDetail from "../vievModel/useProductDetail";
import { useParams } from "@remix-run/react";

jest.mock("@remix-run/react", () => ({
  ...jest.requireActual("@remix-run/react"),
  useParams: jest.fn(),
}));

jest.mock("../vievModel/useProductDetail", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("ProductDetailPage", () => {
  it("renders product detail page", () => {
    const mockParams = { productId: "123" };
    (useParams as jest.Mock).mockReturnValue(mockParams);

    const mockProductDetail = {
      badge: "En Popüler Cep Telefonu",
      lastUpdate: "now",
      imageUrl: "https://cdn.akakce.com/x/apple/iphone-13.jpg",
      productName: "Iphone 13 128 GB",
      mkName: "Apple",
      countOfPrices: 96,
      price: 20567,
      freeShipping: true,
    };
    (useProductDetail as jest.Mock).mockReturnValue({
      productDetail: mockProductDetail,
    });

    render(
      <MemoryRouter>
        <ProductDetailPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/En Popüler Cep Telefonu/i)).toBeDefined();
    expect(screen.getByText(/Şimdi/i)).toBeDefined();
    expect(screen.getByAltText(/Iphone 13 128 GB/i)).toHaveAttribute(
      "src",
      "https://cdn.akakce.com/x/apple/iphone-13.jpg"
    );
    expect(screen.getByText(/Iphone 13 128 GB/i)).toBeDefined();
    expect(screen.getByText(/Apple/i)).toBeDefined();
    expect(screen.getByText(/96 satıcı/i)).toBeDefined();
    expect(screen.getByText(/20.567,00/i)).toBeDefined();
    expect(screen.getByText(/Ücretsiz Kargo/i)).toBeDefined();
  });
});
