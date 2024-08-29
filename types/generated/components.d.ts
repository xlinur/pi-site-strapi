import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedHeroSection extends Schema.Component {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedTestShared extends Schema.Component {
  collectionName: 'components_shared_test_shareds';
  info: {
    displayName: 'test shared';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SharedWhyPersonalInvestItem extends Schema.Component {
  collectionName: 'components_shared_why_personal_invest_items';
  info: {
    displayName: 'Why Personal Invest Item';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
  };
}

export interface SharedWhyPersonalInvest extends Schema.Component {
  collectionName: 'components_shared_why_personal_invests';
  info: {
    displayName: 'Why Personal Invest';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.hero-section': SharedHeroSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.test-shared': SharedTestShared;
      'shared.why-personal-invest-item': SharedWhyPersonalInvestItem;
      'shared.why-personal-invest': SharedWhyPersonalInvest;
    }
  }
}
