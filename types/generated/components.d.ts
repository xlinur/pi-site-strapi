import type { Schema, Attribute } from '@strapi/strapi';

export interface MoleculesTitleWithDescription extends Schema.Component {
  collectionName: 'components_molecules_title_with_descriptions';
  info: {
    displayName: 'Title with description';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface OrganismsCustomerFeedback extends Schema.Component {
  collectionName: 'components_organisms_customer_feedbacks';
  info: {
    displayName: 'Customer feedback';
  };
  attributes: {
    essence: Attribute.Text & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
    company: Attribute.String;
    authorName: Attribute.String;
    authorPosition: Attribute.String;
  };
}

export interface SectionsSectionWithIndustriesImage extends Schema.Component {
  collectionName: 'components_sections_section_with_industries_images';
  info: {
    displayName: 'Section with industries image';
    description: '';
  };
  attributes: {
    title: Attribute.RichText & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    moreInfo: Attribute.Component<'shared.button-link'>;
    reversedDirection: Attribute.Boolean;
  };
}

export interface SectionsStartConversationForm extends Schema.Component {
  collectionName: 'components_shared_start_conversation_forms';
  info: {
    displayName: 'Start conversation form';
    description: '';
  };
  attributes: {
    servicesLabel: Attribute.String;
    subTitle: Attribute.String;
    info: Attribute.String;
    nameLabel: Attribute.String;
    companyLabel: Attribute.String;
    contacts: Attribute.Component<'shared.contact-label-item', true>;
    descriptionLabel: Attribute.String;
    legalCheckboxText: Attribute.String;
    submitBtn: Attribute.Component<'shared.button'>;
  };
}

export interface SectionsTrustedMap extends Schema.Component {
  collectionName: 'components_shared_trusted_maps';
  info: {
    displayName: 'Trusted map';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    variant: Attribute.Enumeration<['bigMap', 'smallMap']>;
    connectBtn: Attribute.Component<'shared.button-link'>;
  };
}

export interface SectionsWhyInfoSection extends Schema.Component {
  collectionName: 'components_sections_why_info_sections';
  info: {
    displayName: 'Why info section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    withBackground: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    buttonLink: Attribute.Component<'shared.button-link'>;
    reasons: Attribute.Component<'molecules.title-with-description', true> &
      Attribute.Required;
  };
}

export interface SharedAdvantage extends Schema.Component {
  collectionName: 'components_shared_advantages';
  info: {
    displayName: 'advantage';
  };
  attributes: {
    text: Attribute.RichText;
  };
}

export interface SharedButtonLink extends Schema.Component {
  collectionName: 'components_shared_button_links';
  info: {
    displayName: 'ButtonLink';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    withIcon: Attribute.Boolean & Attribute.DefaultTo<false>;
    iconRight: Attribute.Boolean & Attribute.DefaultTo<false>;
    theme: Attribute.Enumeration<['primary', 'secondary', 'default', 'text']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedContactLabelItem extends Schema.Component {
  collectionName: 'components_shared_contact_label_items';
  info: {
    displayName: 'contactLabelItem';
  };
  attributes: {
    typeLabel: Attribute.String;
    valueLabel: Attribute.String;
  };
}

export interface SharedFooter extends Schema.Component {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    socialMediaTitle: Attribute.RichText;
    supportTitle: Attribute.String;
    ContactsTitle: Attribute.String;
    copywritig: Attribute.String;
    privacyAndPolicy: Attribute.String;
  };
}

export interface SharedHeroMain extends Schema.Component {
  collectionName: 'components_shared_hero_mains';
  info: {
    displayName: 'HeroMain';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    hereNowBtn: Attribute.Component<'shared.button-link'>;
    candidateBtn: Attribute.Component<'shared.button-link'>;
    recorWord: Attribute.String;
    advantages: Attribute.Component<'shared.advantage', true>;
  };
}

export interface SharedHeroSection extends Schema.Component {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    subTitle: Attribute.RichText;
    title: Attribute.RichText & Attribute.Required;
    actions: Attribute.Component<'shared.button-link', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
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
      'molecules.title-with-description': MoleculesTitleWithDescription;
      'organisms.customer-feedback': OrganismsCustomerFeedback;
      'sections.section-with-industries-image': SectionsSectionWithIndustriesImage;
      'sections.start-conversation-form': SectionsStartConversationForm;
      'sections.trusted-map': SectionsTrustedMap;
      'sections.why-info-section': SectionsWhyInfoSection;
      'shared.advantage': SharedAdvantage;
      'shared.button-link': SharedButtonLink;
      'shared.button': SharedButton;
      'shared.contact-label-item': SharedContactLabelItem;
      'shared.footer': SharedFooter;
      'shared.hero-main': SharedHeroMain;
      'shared.hero-section': SharedHeroSection;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.test-shared': SharedTestShared;
      'shared.why-personal-invest-item': SharedWhyPersonalInvestItem;
      'shared.why-personal-invest': SharedWhyPersonalInvest;
    }
  }
}
