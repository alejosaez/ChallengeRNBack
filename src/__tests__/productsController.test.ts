import request from "supertest";
import app from "../app";
import * as productService from "../service/productService";

jest.mock("../service/productService");

describe("POST /api/products - createProduct controller", () => {
  const mockProduct = {
    product_id: "6861341a-2eb3-4e3b-b468-5c1f2ed6ceb1",
    name: "Expreso",
    unit_price: 15,
    description: "Aa smooth and rich cappuccino with cinnamon .",
    sizes: [
      "bc53c01e-9b82-40e0-966f-aae89151ec68",
      "34f518a2-46b4-4f19-85ce-4c7ce135ca0e",
      "b0abd5f5-261e-4fd9-a841-faff3879e2e6",
    ],
    image_url: "https://encrypted-tbn0.gstatic.com/images?",
    category_id: "b90ead14-23d9-489c-ad48-7417cc8229e6",
    combinations: ["fa7f48d7-4627-4570-bbb3-843dc78dc646"],
  };

  beforeAll(() => {
    (productService.createProduct as jest.Mock).mockResolvedValue(mockProduct);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new product and return 201 status code", async () => {
    const newProduct = {
      name: "Expreso",
      unit_price: 15,
      description: "Aa smooth and rich cappuccino with cinnamon .",
      image_url: "https://encrypted-tbn0.gstatic.com/images?",
      category_id: "b90ead14-23d9-489c-ad48-7417cc8229e6",
      sizes: [
        "bc53c01e-9b82-40e0-966f-aae89151ec68",
        "34f518a2-46b4-4f19-85ce-4c7ce135ca0e",
        "b0abd5f5-261e-4fd9-a841-faff3879e2e6",
      ],
      combinations: ["fa7f48d7-4627-4570-bbb3-843dc78dc646"],
    };

    const response = await request(app).post("/api/products").send(newProduct);

    expect(response.statusCode).toBe(201);

    expect(response.body).toEqual(mockProduct);

    expect(productService.createProduct).toHaveBeenCalledWith(newProduct);
  });

  // Test para verificar un error de validación (400)
  it("should return an error if validation fails", async () => {
    const invalidProduct = {
      description: "Invalid product without a name",
      unit_price: -100,
      category_id: "invalid-uuid",
      image_url: "invalid-url",
    };

    const response = await request(app)
      .post("/api/products")
      .send(invalidProduct);

    expect(response.statusCode).toBe(400);

    expect(response.body.errors).toBeDefined();
  });

  it("should handle errors and call the next middleware", async () => {
    (productService.createProduct as jest.Mock).mockRejectedValue(
      new Error("Service Error")
    );

    const newProduct = {
      name: "Expreso",
      unit_price: 15,
      description: "Aa smooth and rich cappuccino with cinnamon .",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=t",
      category_id: "b90ead14-23d9-489c-ad48-7417cc8229e6",
      sizes: [
        "bc53c01e-9b82-40e0-966f-aae89151ec68",
        "34f518a2-46b4-4f19-85ce-4c7ce135ca0e",
        "b0abd5f5-261e-4fd9-a841-faff3879e2e6",
      ],
      combinations: ["fa7f48d7-4627-4570-bbb3-843dc78dc646"],
    };

    const response = await request(app).post("/api/products").send(newProduct);

    expect(response.statusCode).toBe(500);

    expect(response.body.error).toBe("Internal Server Error");
  });
});
