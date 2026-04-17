// .tina/config.ts
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: null,
  token: null,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      // УСЛУГИ на испанском
      {
        name: "services_es",
        label: "📋 Servicios (ES)",
        path: "src/content/services/es",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título del servicio",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "price",
            label: "Precio",
          },
          {
            type: "image",
            name: "image",
            label: "Imagen del servicio",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Descripción",
            isBody: true,
          },
        ],
      },
      // УСЛУГИ на русском
      {
        name: "services_ru",
        label: "📋 Услуги (RU)",
        path: "src/content/services/ru",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Название услуги",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "price",
            label: "Стоимость",
          },
          {
            type: "image",
            name: "image",
            label: "Изображение услуги",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Описание",
            isBody: true,
          },
        ],
      },
      // УСЛУГИ на английском
      {
        name: "services_en",
        label: "📋 Services (EN)",
        path: "src/content/services/en",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Service Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "price",
            label: "Price",
          },
          {
            type: "image",
            name: "image",
            label: "Service Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Description",
            isBody: true,
          },
        ],
      },
      // КОМАНДА на испанском
      {
        name: "team_es",
        label: "👥 Equipo (ES)",
        path: "src/content/team/es",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nombre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Cargo",
          },
          {
            type: "image",
            name: "photo",
            label: "Foto",
          },
          {
            type: "string",
            name: "bio",
            label: "Biografía",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "email",
            label: "Correo electrónico",
          },
          {
            type: "string",
            name: "phone",
            label: "Teléfono",
          },
        ],
      },
      // КОМАНДА на русском
      {
        name: "team_ru",
        label: "👥 Команда (RU)",
        path: "src/content/team/ru",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Имя",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Должность",
          },
          {
            type: "image",
            name: "photo",
            label: "Фото",
          },
          {
            type: "string",
            name: "bio",
            label: "Информация",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "string",
            name: "phone",
            label: "Телефон",
          },
        ],
      },
      // КОМАНДА на английском
      {
        name: "team_en",
        label: "👥 Team (EN)",
        path: "src/content/team/en",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Position",
          },
          {
            type: "image",
            name: "photo",
            label: "Photo",
          },
          {
            type: "string",
            name: "bio",
            label: "Biography",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "string",
            name: "phone",
            label: "Phone",
          },
        ],
      },
      // СТРАНИЦЫ (для дополнительного контента)
      {
        name: "pages",
        label: "📄 Страницы / Pages",
        path: "src/content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Заголовок / Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "language",
            label: "Язык / Language",
            options: ["es", "ru", "en"],
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL slug (например: about, privacy)",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Содержание / Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});