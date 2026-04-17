// src/i18n/index.ts
export const defaultLocale = 'es';
export const locales = ['es', 'ru', 'en'] as const;
export type Locale = typeof locales[number];

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      team: 'Equipo',
      contacts: 'Contacto'
    },
    home: {
      title: 'Servicios Contables Profesionales',
      subtitle: 'Soluciones contables para tu negocio',
      welcome: 'Bienvenido a nuestra empresa de contabilidad',
      services: 'Nuestros Servicios',
      advantages: 'Ventajas',
      advantagesList: [
        'Más de 10 años de experiencia',
        'Enfoque personalizado',
        'Acompañamiento completo del negocio',
        'Informes oportunos'
      ],
      contacts: 'Contacto'
    },
    footer: {
      rights: 'Todos los derechos reservados',
      address: 'Calle Principal 123, Madrid',
      phone: '+34 XXX XXX XXX',
      email: 'info@contabilidad.es'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      team: 'Команда',
      contacts: 'Контакты'
    },
    home: {
      title: 'Профессиональные бухгалтерские услуги',
      subtitle: 'Бухгалтерские решения для вашего бизнеса',
      welcome: 'Добро пожаловать в нашу бухгалтерскую компанию',
      services: 'Наши услуги',
      advantages: 'Преимущества',
      advantagesList: [
        'Опыт работы более 10 лет',
        'Индивидуальный подход',
        'Полное сопровождение бизнеса',
        'Оперативная отчетность'
      ],
      contacts: 'Контакты'
    },
    footer: {
      rights: 'Все права защищены',
      address: 'ул. Главная 123, Мадрид',
      phone: '+34 XXX XXX XXX',
      email: 'info@contabilidad.es'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      team: 'Team',
      contacts: 'Contacts'
    },
    home: {
      title: 'Professional Accounting Services',
      subtitle: 'Accounting solutions for your business',
      welcome: 'Welcome to our accounting company',
      services: 'Our Services',
      advantages: 'Advantages',
      advantagesList: [
        'More than 10 years of experience',
        'Personalized approach',
        'Complete business support',
        'Timely reporting'
      ],
      contacts: 'Contact'
    },
    footer: {
      rights: 'All rights reserved',
      address: '123 Main Street, Madrid',
      phone: '+34 XXX XXX XXX',
      email: 'info@contabilidad.es'
    }
  }
} as const;

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let result: any = translations[locale];
  
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      return key;
    }
  }
  
  return result;
}