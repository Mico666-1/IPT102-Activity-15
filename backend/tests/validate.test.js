import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app.js";
import { isValidTitle, formatPrice } from "../utils/validate.js";

describe("Backend Unit Tests", () => {
  it("B-T1 accepts a normal title", () => {
    expect(isValidTitle("Bulalo Special")).toBe(true);
  });

  it("B-T2 rejects a title that is only spaces", () => {
    expect(isValidTitle("   ")).toBe(false);
  });

  it("B-T3 health route answers ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  it("B-T4 formats price correctly", () => {
    expect(formatPrice(150)).toBe("PHP 150.00");
  });

  it("B-T5 handles zero or negative price edge case", () => {
    expect(formatPrice(0)).toBe("PHP 0.00");
  });
});