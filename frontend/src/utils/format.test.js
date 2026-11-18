import { describe, it, expect } from "vitest";
import { formatStatus } from "./format.js";

describe("Frontend Unit Tests", () => {
  it("F-T1 formats ok status correctly", () => {
    expect(formatStatus("ok")).toBe("System Online");
  });

  it("F-T2 handles offline status", () => {
    expect(formatStatus("down")).toBe("System Offline");
  });
});