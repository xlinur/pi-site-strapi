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

export interface OrganismsBestPracticeItem extends Schema.Component {
  collectionName: 'components_organisms_best_practice_items';
  info: {
    displayName: 'Best practice item';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'molecules.title-with-description', true> &
      Attribute.Required;
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

export interface OrganismsConsultingServiceItem extends Schema.Component {
  collectionName: 'components_organisms_consulting_service_items';
  info: {
    displayName: 'Consulting service item';
  };
  attributes: {
    details: Attribute.RichText & Attribute.Required;
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

export interface OrganismsHeroOurCasesSectionItem extends Schema.Component {
  collectionName: 'components_organisms_hero_our_cases_section_items';
  info: {
    displayName: 'Hero Our Cases Section Item';
  };
  attributes: {
    text: Attribute.Text;
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
    displayName: 'Features section item';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface OrganismsSectionCompleteTaskItem extends Schema.Component {
  collectionName: 'components_organisms_section_complete_task_items';
  info: {
    displayName: 'Section Complete Task Item';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface OrganismsSectionRecruitmentSummaryItem
  extends Schema.Component {
  collectionName: 'components_organisms_section_recruitment_summary_items';
  info: {
    displayName: 'Section Recruitment Summary Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface OrganismsSectionTalentMatchItem extends Schema.Component {
  collectionName: 'components_organisms_section_talent_match_items';
  info: {
    displayName: 'Section Talent Match Item';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
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

export interface SectionsConsultingServices extends Schema.Component {
  collectionName: 'components_sections_consulting_services';
  info: {
    displayName: 'Consulting services';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    services: Attribute.Component<'organisms.consulting-service-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 6;
          max: 6;
        },
        number
      >;
    otherConsultationBtn: Attribute.Component<'atoms.button'> &
      Attribute.Required;
  };
}

export interface SectionsExamplesOfBestPractices extends Schema.Component {
  collectionName: 'components_sections_examples_of_best_practices';
  info: {
    displayName: 'Examples of best practices';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'organisms.best-practice-item', true>;
    contactBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
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

export interface SectionsHeroOurCasesSection extends Schema.Component {
  collectionName: 'components_sections_hero_our_cases_sections';
  info: {
    displayName: 'Hero Our Cases Section';
  };
  attributes: {
    title: Attribute.RichText;
    subtitle: Attribute.RichText;
    items: Attribute.Component<'organisms.hero-our-cases-section-item', true>;
    description: Attribute.RichText;
    hireNowBtn: Attribute.Component<'atoms.button'>;
    candidateBtn: Attribute.Component<'atoms.button'>;
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
    displayName: 'Section with features';
    description: '';
  };
  attributes: {
    title: Attribute.RichText & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    items: Attribute.Component<'organisms.relocation-help-item', true> &
      Attribute.Required &
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

export interface SectionsSectionCaseHero extends Schema.Component {
  collectionName: 'components_sections_section_case_heroes';
  info: {
    displayName: 'Section Case Hero';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    subtitle: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface SectionsSectionCompleteTask extends Schema.Component {
  collectionName: 'components_sections_section_complete_tasks';
  info: {
    displayName: 'Section Complete Task';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    items: Attribute.Component<'organisms.section-complete-task-item', true>;
  };
}

export interface SectionsSectionRecruitmentSummary extends Schema.Component {
  collectionName: 'components_sections_section_recruitment_summaries';
  info: {
    displayName: 'Section Recruitment Summary';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    subtitle: Attribute.String;
    companyOffered: Attribute.Text;
    companyOfferedText: Attribute.Text;
    items: Attribute.Component<
      'organisms.section-recruitment-summary-item',
      true
    >;
  };
}

export interface SectionsSectionTalentMatch extends Schema.Component {
  collectionName: 'components_sections_section_talent_matches';
  info: {
    displayName: 'Section Talent Match';
    description: '';
  };
  attributes: {
    hireNowBtn: Attribute.Component<'atoms.button'>;
    content: Attribute.RichText;
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

export interface SharedContacts extends Schema.Component {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contacts';
    description: '';
  };
  attributes: {
    phone: Attribute.String & Attribute.Required;
    linkedin: Attribute.String & Attribute.Required;
    instagram: Attribute.String & Attribute.Required;
    facebook: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    telegram: Attribute.String & Attribute.Required;
    whatsapp: Attribute.String & Attribute.Required;
  };
}

export interface SharedMenu extends Schema.Component {
  collectionName: 'components_sections_menus';
  info: {
    displayName: 'Menu';
    description: '';
  };
  attributes: {
    aboutUs: Attribute.String & Attribute.Required;
    services: Attribute.String & Attribute.Required;
    industries: Attribute.String & Attribute.Required;
    vacancies: Attribute.String & Attribute.Required;
    earnWithUs: Attribute.String & Attribute.Required;
    contacts: Attribute.String & Attribute.Required;
    reviews: Attribute.String & Attribute.Required;
    splitRecruitment: Attribute.String & Attribute.Required;
    cases: Attribute.String & Attribute.Required;
    recruitment: Attribute.String & Attribute.Required;
    executiveSearch: Attribute.String & Attribute.Required;
    consulting: Attribute.String & Attribute.Required;
    analytics: Attribute.String & Attribute.Required;
    relocation: Attribute.String & Attribute.Required;
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
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
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
      'organisms.best-practice-item': OrganismsBestPracticeItem;
      'organisms.block-step': OrganismsBlockStep;
      'organisms.consulting-service-item': OrganismsConsultingServiceItem;
      'organisms.customer-feedback': OrganismsCustomerFeedback;
      'organisms.hero-our-cases-section-item': OrganismsHeroOurCasesSectionItem;
      'organisms.pricing-item': OrganismsPricingItem;
      'organisms.recruitment-type': OrganismsRecruitmentType;
      'organisms.relocation-help-item': OrganismsRelocationHelpItem;
      'organisms.section-complete-task-item': OrganismsSectionCompleteTaskItem;
      'organisms.section-recruitment-summary-item': OrganismsSectionRecruitmentSummaryItem;
      'organisms.section-talent-match-item': OrganismsSectionTalentMatchItem;
      'organisms.sectors-grid-item': OrganismsSectorsGridItem;
      'organisms.team-member': OrganismsTeamMember;
      'sections.advantages': SectionsAdvantages;
      'sections.analytics-services': SectionsAnalyticsServices;
      'sections.animated-hero': SectionsAnimatedHero;
      'sections.block-steps-plan': SectionsBlockStepsPlan;
      'sections.consulting-services': SectionsConsultingServices;
      'sections.examples-of-best-practices': SectionsExamplesOfBestPractices;
      'sections.exclusive-process': SectionsExclusiveProcess;
      'sections.hero-main': SectionsHeroMain;
      'sections.hero-our-cases-section': SectionsHeroOurCasesSection;
      'sections.info-with-cards': SectionsInfoWithCards;
      'sections.meet-our-team': SectionsMeetOurTeam;
      'sections.need-help': SectionsNeedHelp;
      'sections.our-founder': SectionsOurFounder;
      'sections.our-process-of-interaction': SectionsOurProcessOfInteraction;
      'sections.our-team': SectionsOurTeam;
      'sections.pricing': SectionsPricing;
      'sections.proposal': SectionsProposal;
      'sections.relocation-help-hero': SectionsRelocationHelpHero;
      'sections.section-case-hero': SectionsSectionCaseHero;
      'sections.section-complete-task': SectionsSectionCompleteTask;
      'sections.section-recruitment-summary': SectionsSectionRecruitmentSummary;
      'sections.section-talent-match': SectionsSectionTalentMatch;
      'sections.section-with-industries-image': SectionsSectionWithIndustriesImage;
      'sections.sectors-grid': SectionsSectorsGrid;
      'sections.tree': SectionsTree;
      'sections.types-of-recruitment': SectionsTypesOfRecruitment;
      'sections.why-info-section': SectionsWhyInfoSection;
      'shared.contacts': SharedContacts;
      'shared.menu': SharedMenu;
      'shared.seo': SharedSeo;
    }
  }
}
