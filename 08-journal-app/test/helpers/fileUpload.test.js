import { fileUpload } from "../../src/helpers";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "dcorclkxo",
  api_key: "697451158498452",
  api_secret: "Lj2X9le34EfRvWC87Y2LX12Vk5M",
  secure: true,
});

describe("Pruebas fileUpload", () => {
  test("debe subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://th.bing.com/th/id/R.8096c27044664883c89b835c5846e79f?rik=aV2twV7S%2fspzhg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ftwWLZwW.jpg&ehk=5MD9O%2bslp8nkl2UobRFYjY97UihVWu1nLoRFVZy9OYA%3d&risl=&pid=ImgRaw&r=0";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    console.log(url);
    expect(typeof url).toBe("string");
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    await cloudinary.api.delete_resources(["journal-app/" + imageId], {
      resource_type: "image",
    });

  });

  test("debe de retornar null", async () => {
    const file = new File([], "foto.jpg");

    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
