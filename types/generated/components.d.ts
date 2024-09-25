import type { Schema, Attribute } from '@strapi/strapi';

export interface AtomsButtonLink extends Schema.Component {
  collectionName: 'components_atoms_button_links';
  info: {
    displayName: 'Button link';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    page: Attribute.Enumeration<['home', 'contacts']>;
    withIcon: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    iconRight: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    theme: Attribute.Enumeration<['default', 'primary', 'secondary', 'text']> &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
  };
}

export interface AtomsButton extends Schema.Component {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface MoleculesCountWithDescription extends Schema.Component {
  collectionName: 'components_molecules_count_with_descriptions';
  info: {
    displayName: 'Count with description';
    description: '';
  };
  attributes: {
    count: Attribute.Integer & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

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

export interface SectionsAdvantages extends Schema.Component {
  collectionName: 'components_sections_advantages';
  info: {
    displayName: 'Advantages';
    description: '';
  };
  attributes: {
    advantage: Attribute.RichText & Attribute.Required;
  };
}

export interface SectionsAnimatedHero extends Schema.Component {
  collectionName: 'components_sections_animated_heroes';
  info: {
    displayName: 'Animated hero';
  };
  attributes: {
    title: Attribute.RichText & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    hireNowBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    candidateBtn: Attribute.Component<'atoms.button'>;
  };
}

export interface SectionsExclusiveProcess extends Schema.Component {
  collectionName: 'components_sections_exclusive_processes';
  info: {
    displayName: 'Exclusive process';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    processes: Attribute.Component<'molecules.title-with-description', true>;
    findTalentBtn: Attribute.Component<'atoms.button'>;
  };
}

export interface SectionsHeroMain extends Schema.Component {
  collectionName: 'components_shared_hero_mains';
  info: {
    displayName: 'Hero main';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    hireNowBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    candidateBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    recordWord: Attribute.String;
    advantages: Attribute.Component<'sections.advantages', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
          max: 4;
        },
        number
      >;
  };
}

export interface SectionsMeetOurTeam extends Schema.Component {
  collectionName: 'components_sections_meet_our_teams';
  info: {
    displayName: 'Meet our team';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
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
    moreInfo: Attribute.Component<'atoms.button'> & Attribute.Required;
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
  };
}

export interface SectionsTreeSection extends Schema.Component {
  collectionName: 'components_sections_tree_sections';
  info: {
    displayName: 'Tree section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'molecules.title-with-description', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface SectionsTree extends Schema.Component {
  collectionName: 'components_sections_trees';
  info: {
    displayName: 'Tree';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'molecules.title-with-description', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
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
    reasons: Attribute.Component<'molecules.title-with-description', true> &
      Attribute.Required;
    findTalentBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atoms.button-link': AtomsButtonLink;
      'atoms.button': AtomsButton;
      'molecules.count-with-description': MoleculesCountWithDescription;
      'molecules.title-with-description': MoleculesTitleWithDescription;
      'organisms.customer-feedback': OrganismsCustomerFeedback;
      'sections.advantages': SectionsAdvantages;
      'sections.animated-hero': SectionsAnimatedHero;
      'sections.exclusive-process': SectionsExclusiveProcess;
      'sections.hero-main': SectionsHeroMain;
      'sections.meet-our-team': SectionsMeetOurTeam;
      'sections.section-with-industries-image': SectionsSectionWithIndustriesImage;
      'sections.start-conversation-form': SectionsStartConversationForm;
      'sections.tree-section': SectionsTreeSection;
      'sections.tree': SectionsTree;
      'sections.why-info-section': SectionsWhyInfoSection;
      'shared.contact-label-item': SharedContactLabelItem;
      'shared.footer': SharedFooter;
      'shared.media': SharedMedia;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
