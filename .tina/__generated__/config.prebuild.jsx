// .tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: null,
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // УСЛУГИ на испанском
      {
        name: "services_es",
        label: "\u{1F4CB} Servicios (ES)",
        path: "src/content/services/es",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "T\xEDtulo del servicio",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "price",
            label: "Precio"
          },
          {
            type: "image",
            name: "image",
            label: "Imagen del servicio"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Descripci\xF3n",
            isBody: true
          }
        ]
      },
      // УСЛУГИ на русском
      {
        name: "services_ru",
        label: "\u{1F4CB} \u0423\u0441\u043B\u0443\u0433\u0438 (RU)",
        path: "src/content/services/ru",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "price",
            label: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"
          },
          {
            type: "image",
            name: "image",
            label: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438"
          },
          {
            type: "rich-text",
            name: "body",
            label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
            isBody: true
          }
        ]
      },
      // УСЛУГИ на английском
      {
        name: "services_en",
        label: "\u{1F4CB} Services (EN)",
        path: "src/content/services/en",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Service Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "price",
            label: "Price"
          },
          {
            type: "image",
            name: "image",
            label: "Service Image"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Description",
            isBody: true
          }
        ]
      },
      // КОМАНДА на испанском
      {
        name: "team_es",
        label: "\u{1F465} Equipo (ES)",
        path: "src/content/team/es",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nombre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "position",
            label: "Cargo"
          },
          {
            type: "image",
            name: "photo",
            label: "Foto"
          },
          {
            type: "string",
            name: "bio",
            label: "Biograf\xEDa",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "email",
            label: "Correo electr\xF3nico"
          },
          {
            type: "string",
            name: "phone",
            label: "Tel\xE9fono"
          }
        ]
      },
      // КОМАНДА на русском
      {
        name: "team_ru",
        label: "\u{1F465} \u041A\u043E\u043C\u0430\u043D\u0434\u0430 (RU)",
        path: "src/content/team/ru",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "\u0418\u043C\u044F",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "position",
            label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"
          },
          {
            type: "image",
            name: "photo",
            label: "\u0424\u043E\u0442\u043E"
          },
          {
            type: "string",
            name: "bio",
            label: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "email",
            label: "Email"
          },
          {
            type: "string",
            name: "phone",
            label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
          }
        ]
      },
      // КОМАНДА на английском
      {
        name: "team_en",
        label: "\u{1F465} Team (EN)",
        path: "src/content/team/en",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "position",
            label: "Position"
          },
          {
            type: "image",
            name: "photo",
            label: "Photo"
          },
          {
            type: "string",
            name: "bio",
            label: "Biography",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "email",
            label: "Email"
          },
          {
            type: "string",
            name: "phone",
            label: "Phone"
          }
        ]
      },
      // СТРАНИЦЫ (для дополнительного контента)
      {
        name: "pages",
        label: "\u{1F4C4} \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B / Pages",
        path: "src/content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A / Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "language",
            label: "\u042F\u0437\u044B\u043A / Language",
            options: ["es", "ru", "en"],
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "URL slug (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: about, privacy)",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 / Content",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
