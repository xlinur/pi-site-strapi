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
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface OrganismsAdvantage extends Schema.Component {
  collectionName: 'components_organisms_advantages';
  info: {
    displayName: 'Advantage';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface OrganismsAnalyticsService extends Schema.Component {
  collectionName: 'components_organisms_analytics_services';
  info: {
    displayName: 'Analytics service item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    details: Attribute.RichText & Attribute.Required;
    sendRequest: Attribute.Component<'atoms.button'> & Attribute.Required;
  };
}

export interface OrganismsBlockStep extends Schema.Component {
  collectionName: 'components_organisms_block_steps';
  info: {
    displayName: 'Block step';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
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

export interface OrganismsPricingItem extends Schema.Component {
  collectionName: 'components_organisms_pricing_items';
  info: {
    displayName: 'Pricing item';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    btnName: Attribute.String & Attribute.Required;
  };
}

export interface OrganismsRecruitmentType extends Schema.Component {
  collectionName: 'components_organisms_recruitment_types';
  info: {
    displayName: 'Recruitment type';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    hireNowBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
  };
}

export interface OrganismsRelocationHelpItem extends Schema.Component {
  collectionName: 'components_organisms_relocation_help_items';
  info: {
    displayName: 'Relocation help item';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface OrganismsSectorsGridItem extends Schema.Component {
  collectionName: 'components_organisms_sectors_grid_items';
  info: {
    displayName: 'Sectors grid item';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface OrganismsTeamMember extends Schema.Component {
  collectionName: 'components_organisms_team_members';
  info: {
    displayName: 'Team member';
  };
  attributes: {
    photo: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    position: Attribute.String & Attribute.Required;
  };
}

export interface SectionsAdvantages extends Schema.Component {
  collectionName: 'components_sections_advantages';
  info: {
    displayName: 'Advantages';
    description: '';
  };
  attributes: {
    advantage: Attribute.Component<'organisms.advantage', true> &
      Attribute.SetMinMax<
        {
          min: 4;
          max: 4;
        },
        number
      >;
  };
}

export interface SectionsAnalyticsServices extends Schema.Component {
  collectionName: 'components_sections_analytics_services';
  info: {
    displayName: 'Analytics services';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    services: Attribute.Component<'organisms.analytics-service', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
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

export interface SectionsBlockStepsPlan extends Schema.Component {
  collectionName: 'components_sections_block_steps_plans';
  info: {
    displayName: 'Block steps plan';
  };
  attributes: {
    title: Attribute.String;
    steps: Attribute.Component<'organisms.block-step', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 5;
          max: 5;
        },
        number
      >;
    contactBtn: Attribute.Component<'atoms.button'>;
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
    advantages: Attribute.Component<'sections.advantages'> & Attribute.Required;
    recordWord: Attribute.String;
  };
}

export interface SectionsInfoWithCards extends Schema.Component {
  collectionName: 'components_sections_info_with_cards';
  info: {
    displayName: 'Info with cards';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
    contactRecrutmentBtn: Attribute.Component<'atoms.button'> &
      Attribute.Required;
    achivements: Attribute.Component<'molecules.title-with-description', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
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

export interface SectionsNeedHelp extends Schema.Component {
  collectionName: 'components_sections_need_helps';
  info: {
    displayName: 'Need help';
  };
  attributes: {
    helpText: Attribute.Text & Attribute.Required;
    helpBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
  };
}

export interface SectionsOurFounder extends Schema.Component {
  collectionName: 'components_sections_our_founders';
  info: {
    displayName: 'Our founder';
  };
  attributes: {
    photo: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    position: Attribute.String & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    li: Attribute.String & Attribute.Required;
    fb: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    titile: Attribute.String & Attribute.Required;
  };
}

export interface SectionsOurProcessOfInteraction extends Schema.Component {
  collectionName: 'components_sections_our_process_of_interactions';
  info: {
    displayName: 'Our process of interaction';
  };
  attributes: {
    treeSection: Attribute.Component<'sections.tree'> & Attribute.Required;
    applyNowBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
  };
}

export interface SectionsOurTeam extends Schema.Component {
  collectionName: 'components_sections_our_teams';
  info: {
    displayName: 'Our team';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    members: Attribute.Component<'organisms.team-member', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 6;
          max: 6;
        },
        number
      >;
  };
}

export interface SectionsPricing extends Schema.Component {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    feeSection: Attribute.Component<'organisms.pricing-item'> &
      Attribute.Required;
    splitRecruitment: Attribute.Component<'organisms.pricing-item'> &
      Attribute.Required;
    subscriptionModel: Attribute.Component<'organisms.pricing-item'> &
      Attribute.Required;
  };
}

export interface SectionsProposal extends Schema.Component {
  collectionName: 'components_sections_proposals';
  info: {
    displayName: 'Proposal';
  };
  attributes: {
    title: Attribute.RichText & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    consultationBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    twoDirectionsTitle: Attribute.String & Attribute.Required;
    firstDirection: Attribute.RichText & Attribute.Required;
    secondDirection: Attribute.RichText & Attribute.Required;
  };
}

export interface SectionsRelocationHelpHero extends Schema.Component {
  collectionName: 'components_sections_relocation_help_heroes';
  info: {
    displayName: 'Relocation help hero';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    items: Attribute.Component<'organisms.relocation-help-item', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
    bottomText: Attribute.String;
    contactUsBtn: Attribute.Component<'atoms.button'>;
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

export interface SectionsSectorsGrid extends Schema.Component {
  collectionName: 'components_sections_sectors_grids';
  info: {
    displayName: 'Sectors grid';
  };
  attributes: {
    title: Attribute.RichText & Attribute.Required;
    sectors: Attribute.Component<'organisms.sectors-grid-item', true> &
      Attribute.SetMinMax<
        {
          min: 6;
          max: 6;
        },
        number
      >;
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

export interface SectionsTypesOfRecruitment extends Schema.Component {
  collectionName: 'components_sections_types_of_recruitments';
  info: {
    displayName: 'Types of recruitment';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    types: Attribute.Component<'organisms.recruitment-type', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 2;
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
      'organisms.advantage': OrganismsAdvantage;
      'organisms.analytics-service': OrganismsAnalyticsService;
      'organisms.block-step': OrganismsBlockStep;
      'organisms.customer-feedback': OrganismsCustomerFeedback;
      'organisms.pricing-item': OrganismsPricingItem;
      'organisms.recruitment-type': OrganismsRecruitmentType;
      'organisms.relocation-help-item': OrganismsRelocationHelpItem;
      'organisms.sectors-grid-item': OrganismsSectorsGridItem;
      'organisms.team-member': OrganismsTeamMember;
      'sections.advantages': SectionsAdvantages;
      'sections.analytics-services': SectionsAnalyticsServices;
      'sections.animated-hero': SectionsAnimatedHero;
      'sections.block-steps-plan': SectionsBlockStepsPlan;
      'sections.exclusive-process': SectionsExclusiveProcess;
      'sections.hero-main': SectionsHeroMain;
      'sections.info-with-cards': SectionsInfoWithCards;
      'sections.meet-our-team': SectionsMeetOurTeam;
      'sections.need-help': SectionsNeedHelp;
      'sections.our-founder': SectionsOurFounder;
      'sections.our-process-of-interaction': SectionsOurProcessOfInteraction;
      'sections.our-team': SectionsOurTeam;
      'sections.pricing': SectionsPricing;
      'sections.proposal': SectionsProposal;
      'sections.relocation-help-hero': SectionsRelocationHelpHero;
      'sections.section-with-industries-image': SectionsSectionWithIndustriesImage;
      'sections.sectors-grid': SectionsSectorsGrid;
      'sections.start-conversation-form': SectionsStartConversationForm;
      'sections.tree': SectionsTree;
      'sections.types-of-recruitment': SectionsTypesOfRecruitment;
      'sections.why-info-section': SectionsWhyInfoSection;
      'shared.contact-label-item': SharedContactLabelItem;
      'shared.footer': SharedFooter;
      'shared.media': SharedMedia;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
