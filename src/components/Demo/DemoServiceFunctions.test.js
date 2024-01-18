import { handleDownloadCleanedFile } from "./DemoServiceFunctions";

// Setup the environment variable for the tests
process.env.PURIFYSHIELD_SERVES = "http://127.0.0.1:5000";

// Mock global properties and functions
global.URL.createObjectURL = jest.fn();
global.URL.revokeObjectURL = jest.fn();
global.fetch = jest.fn();
global.document.createElement = jest.fn();
global.document.body.appendChild = jest.fn();
global.document.body.removeChild = jest.fn();

beforeEach(() => {
  // Clear all mocks before each test
  jest.clearAllMocks();

  // Mock implementations
  global.URL.createObjectURL.mockReturnValue("blob-url");
  global.document.createElement.mockImplementation((tagName) => {
    if (tagName === "a") {
      return {
        href: "",
        download: "",
        click: jest.fn(),
        style: {},
      };
    }
    return null;
  });
});

describe("handleDownloadCleanedFile", () => {
  it("should not download if there is no cleaned file", () => {
    handleDownloadCleanedFile(null);

    const linkElement = global.document.createElement("a");
    expect(linkElement.click).not.toHaveBeenCalled();
    expect(global.URL.createObjectURL).not.toHaveBeenCalled();
  });
});
