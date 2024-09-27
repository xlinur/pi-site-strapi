import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCaseCase extends Schema.CollectionType {
  collectionName: 'cases';
  info: {
    singularName: 'case';
    pluralName: 'cases';
    displayName: 'Case';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::case.case', 'title'> & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    sphere: Attribute.Relation<
      'api::case.case',
      'manyToOne',
      'api::sphere.sphere'
    >;
    SectionCaseHero: Attribute.Component<'sections.section-case-hero'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::case.case', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::case.case', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCompaniesLogoSectionCompaniesLogoSection
  extends Schema.SingleType {
  collectionName: 'companies_logo_sections';
  info: {
    singularName: 'companies-logo-section';
    pluralName: 'companies-logo-sections';
    displayName: '[Section] Companies logo section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logos: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    addLogoBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::companies-logo-section.companies-logo-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::companies-logo-section.companies-logo-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFeedbackFeedback extends Schema.CollectionType {
  collectionName: 'feedbacks';
  info: {
    singularName: 'feedback';
    pluralName: 'feedbacks';
    displayName: 'Feedback';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    essence: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
    company: Attribute.String;
    authorName: Attribute.String & Attribute.Required;
    authorPosition: Attribute.String & Attribute.Required;
    tags: Attribute.Relation<
      'api::feedback.feedback',
      'manyToMany',
      'api::sphere.sphere'
    >;
    title: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::feedback.feedback',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::feedback.feedback',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: '[Global] Settings';
    description: 'Define global settings';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    address: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageAboutUsPageAboutUs extends Schema.SingleType {
  collectionName: 'page_about_uses';
  info: {
    singularName: 'page-about-us';
    pluralName: 'page-about-uses';
    displayName: '[Page] About us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnimatedHero: Attribute.Component<'sections.animated-hero'> &
      Attribute.Required;
    TreeSection: Attribute.Component<'sections.tree'> & Attribute.Required;
    OurFounder: Attribute.Component<'sections.our-founder'> &
      Attribute.Required;
    OurTeam: Attribute.Component<'sections.our-team'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-about-us.page-about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-about-us.page-about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageAnalyticsPageAnalytics extends Schema.SingleType {
  collectionName: 'page_analyticss';
  info: {
    singularName: 'page-analytics';
    pluralName: 'page-analyticss';
    displayName: '[Page] Analytics';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnimatedHero: Attribute.Component<'sections.animated-hero'> &
      Attribute.Required;
    AnalyticsServices: Attribute.Component<'sections.analytics-services'> &
      Attribute.Required;
    WhyInfoSection: Attribute.Component<'sections.why-info-section'> &
      Attribute.Required;
    Pricing: Attribute.Component<'sections.pricing'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-analytics.page-analytics',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-analytics.page-analytics',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageConsultingPageConsulting extends Schema.SingleType {
  collectionName: 'page_consultings';
  info: {
    singularName: 'page-consulting';
    pluralName: 'page-consultings';
    displayName: '[Page] Consulting';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnimatedHero: Attribute.Component<'sections.animated-hero'> &
      Attribute.Required;
    ConsultingServices: Attribute.Component<'sections.consulting-services'> &
      Attribute.Required;
    WhyInfoSection: Attribute.Component<'sections.why-info-section'> &
      Attribute.Required;
    ExamplesOfBestPractices: Attribute.Component<'sections.examples-of-best-practices'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-consulting.page-consulting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-consulting.page-consulting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageContactUsPageContactUs extends Schema.SingleType {
  collectionName: 'page_contact_uses';
  info: {
    singularName: 'page-contact-us';
    pluralName: 'page-contact-uses';
    displayName: '[Page] Contact us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-contact-us.page-contact-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-contact-us.page-contact-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageEarnWithUsPageEarnWithUs extends Schema.SingleType {
  collectionName: 'page_earn_with_uses';
  info: {
    singularName: 'page-earn-with-us';
    pluralName: 'page-earn-with-uses';
    displayName: '[Page] Earn with us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnimatedHero: Attribute.Component<'sections.animated-hero'> &
      Attribute.Required;
    Advantages: Attribute.Component<'sections.advantages'> & Attribute.Required;
    OurProcessOfInteraction: Attribute.Component<'sections.our-process-of-interaction'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-earn-with-us.page-earn-with-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-earn-with-us.page-earn-with-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageExecutiveSearchPageExecutiveSearch
  extends Schema.SingleType {
  collectionName: 'page_executive_searches';
  info: {
    singularName: 'page-executive-search';
    pluralName: 'page-executive-searches';
    displayName: '[Page] Executive search';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnimatedHero: Attribute.Component<'sections.animated-hero'> &
      Attribute.Required;
    InfoWithCards: Attribute.Component<'sections.info-with-cards'> &
      Attribute.Required;
    TreeSection: Attribute.Component<'sections.tree'> & Attribute.Required;
    TypesOfRecruitment: Attribute.Component<'sections.types-of-recruitment'> &
      Attribute.Required;
    NeedHelpSection: Attribute.Component<'sections.need-help'> &
      Attribute.Required;
    SectionWithIndustriesImage: Attribute.Component<'sections.section-with-industries-image'> &
      Attribute.Required;
    Pricing: Attribute.Component<'sections.pricing'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-executive-search.page-executive-search',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-executive-search.page-executive-search',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageFeedbacksPageFeedbacks extends Schema.SingleType {
  collectionName: 'page_feedbackss';
  info: {
    singularName: 'page-feedbacks';
    pluralName: 'page-feedbackss';
    displayName: '[Page] Feedbacks';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    moreReviewsBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-feedbacks.page-feedbacks',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-feedbacks.page-feedbacks',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageHomePageHome extends Schema.SingleType {
  collectionName: 'page_homes';
  info: {
    singularName: 'page-home';
    pluralName: 'page-homes';
    displayName: '[Page] Home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    HeroSection: Attribute.Component<'sections.hero-main'> & Attribute.Required;
    SectionWithIndustriesImage: Attribute.Component<'sections.section-with-industries-image'> &
      Attribute.Required;
    WhyInfoSection: Attribute.Component<'sections.why-info-section'> &
      Attribute.Required;
    ExclusiveProcess: Attribute.Component<'sections.exclusive-process'> &
      Attribute.Required;
    MeetOurTeam: Attribute.Component<'sections.meet-our-team'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-home.page-home',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-home.page-home',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageIndustriesPageIndustries extends Schema.SingleType {
  collectionName: 'page_industriess';
  info: {
    singularName: 'page-industries';
    pluralName: 'page-industriess';
    displayName: '[Page] Industries';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnimatedHero: Attribute.Component<'sections.animated-hero'> &
      Attribute.Required;
    SectorsGrid: Attribute.Component<'sections.sectors-grid'> &
      Attribute.Required;
    TreeSection: Attribute.Component<'sections.tree'> & Attribute.Required;
    SectionWithIndustriesImage: Attribute.Component<'sections.section-with-industries-image'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-industries.page-industries',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-industries.page-industries',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageRecruitmentPageRecruitment extends Schema.SingleType {
  collectionName: 'page_recruitments';
  info: {
    singularName: 'page-recruitment';
    pluralName: 'page-recruitments';
    displayName: '[Page] Recruitment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnimatedHero: Attribute.Component<'sections.animated-hero'> &
      Attribute.Required;
    InfoWithCards: Attribute.Component<'sections.info-with-cards'> &
      Attribute.Required;
    TreeSection: Attribute.Component<'sections.tree'> & Attribute.Required;
    TypesOfRecruitment: Attribute.Component<'sections.types-of-recruitment'> &
      Attribute.Required;
    NeedHelpSection: Attribute.Component<'sections.need-help'> &
      Attribute.Required;
    Pricing: Attribute.Component<'sections.pricing'> & Attribute.Required;
    SectionWithIndustriesImage: Attribute.Component<'sections.section-with-industries-image'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-recruitment.page-recruitment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-recruitment.page-recruitment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageRelocationHelpPageRelocationHelp
  extends Schema.SingleType {
  collectionName: 'page_relocation_helps';
  info: {
    singularName: 'page-relocation-help';
    pluralName: 'page-relocation-helps';
    displayName: '[Page] Relocation help';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SectionWithFeatures: Attribute.Component<'sections.relocation-help-hero'>;
    BlockStepsPlan: Attribute.Component<'sections.block-steps-plan'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-relocation-help.page-relocation-help',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-relocation-help.page-relocation-help',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageSplitRecruitmentPageSplitRecruitment
  extends Schema.SingleType {
  collectionName: 'page_split_recruitments';
  info: {
    singularName: 'page-split-recruitment';
    pluralName: 'page-split-recruitments';
    displayName: '[Page] Split recruitment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnimatedHero: Attribute.Component<'sections.animated-hero'> &
      Attribute.Required;
    Proposal: Attribute.Component<'sections.proposal'> & Attribute.Required;
    TreeSection: Attribute.Component<'sections.tree'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-split-recruitment.page-split-recruitment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-split-recruitment.page-split-recruitment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSectionAboutPersonalinvestSectionAboutPersonalinvest
  extends Schema.SingleType {
  collectionName: 'section_about_personalinvests';
  info: {
    singularName: 'section-about-personalinvest';
    pluralName: 'section-about-personalinvests';
    displayName: '[Section] About Personalinvest';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    info: Attribute.Component<'molecules.title-with-description', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
          max: 4;
        },
        number
      >;
    numbers: Attribute.Component<'molecules.count-with-description', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::section-about-personalinvest.section-about-personalinvest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::section-about-personalinvest.section-about-personalinvest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSectionPaymentTermsSectionPaymentTerms
  extends Schema.SingleType {
  collectionName: 'section_payment_termss';
  info: {
    singularName: 'section-payment-terms';
    pluralName: 'section-payment-termss';
    displayName: '[Section] Payment terms';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'molecules.title-with-description', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
    contactBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::section-payment-terms.section-payment-terms',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::section-payment-terms.section-payment-terms',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSectionSuccessStoriesSectionSuccessStories
  extends Schema.SingleType {
  collectionName: 'section_success_storiess';
  info: {
    singularName: 'section-success-stories';
    pluralName: 'section-success-storiess';
    displayName: '[Section] Success stories';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    viewAllCasesBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    contactBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::section-success-stories.section-success-stories',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::section-success-stories.section-success-stories',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSectionTrustedMapSectionTrustedMap
  extends Schema.SingleType {
  collectionName: 'section_trusted_maps';
  info: {
    singularName: 'section-trusted-map';
    pluralName: 'section-trusted-maps';
    displayName: '[Section] Trusted map';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    contactUsBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::section-trusted-map.section-trusted-map',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::section-trusted-map.section-trusted-map',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSectionWhatOurCliensSaySectionWhatOurCliensSay
  extends Schema.SingleType {
  collectionName: 'section_what_our_cliens_says';
  info: {
    singularName: 'section-what-our-cliens-say';
    pluralName: 'section-what-our-cliens-says';
    displayName: '[Section] What our cliens say';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    readMoreBtn: Attribute.Component<'atoms.button'> & Attribute.Required;
    readAllBtn: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::section-what-our-cliens-say.section-what-our-cliens-say',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::section-what-our-cliens-say.section-what-our-cliens-say',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSharedWeCanHelpYouWithSharedWeCanHelpYouWith
  extends Schema.SingleType {
  collectionName: 'shared_we_can_help_you_withs';
  info: {
    singularName: 'shared-we-can-help-you-with';
    pluralName: 'shared-we-can-help-you-withs';
    displayName: '[Section] We can help you with';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    or: Attribute.String & Attribute.Required;
    recruitment: Attribute.String & Attribute.Required;
    buisnessConsulting: Attribute.String & Attribute.Required;
    executiveSearch: Attribute.String & Attribute.Required;
    marketResearchAndAnalytics: Attribute.String & Attribute.Required;
    relocation: Attribute.String & Attribute.Required;
    earnWithUs: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shared-we-can-help-you-with.shared-we-can-help-you-with',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shared-we-can-help-you-with.shared-we-can-help-you-with',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSphereSphere extends Schema.CollectionType {
  collectionName: 'spheres';
  info: {
    singularName: 'sphere';
    pluralName: 'spheres';
    displayName: 'Sphere';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.UID<'api::sphere.sphere', 'name'> & Attribute.Required;
    feedbacks: Attribute.Relation<
      'api::sphere.sphere',
      'manyToMany',
      'api::feedback.feedback'
    >;
    name: Attribute.String & Attribute.Required;
    AnimatedHero: Attribute.Component<'sections.animated-hero'> &
      Attribute.Required;
    InfoWithCards: Attribute.Component<'sections.info-with-cards'> &
      Attribute.Required;
    SectorsGrid: Attribute.Component<'sections.sectors-grid'> &
      Attribute.Required;
    SectionWithIndustriesImage: Attribute.Component<'sections.section-with-industries-image'> &
      Attribute.Required;
    Seo: Attribute.Component<'shared.seo'>;
    cases: Attribute.Relation<
      'api::sphere.sphere',
      'oneToMany',
      'api::case.case'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sphere.sphere',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sphere.sphere',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::case.case': ApiCaseCase;
      'api::companies-logo-section.companies-logo-section': ApiCompaniesLogoSectionCompaniesLogoSection;
      'api::feedback.feedback': ApiFeedbackFeedback;
      'api::global.global': ApiGlobalGlobal;
      'api::page-about-us.page-about-us': ApiPageAboutUsPageAboutUs;
      'api::page-analytics.page-analytics': ApiPageAnalyticsPageAnalytics;
      'api::page-consulting.page-consulting': ApiPageConsultingPageConsulting;
      'api::page-contact-us.page-contact-us': ApiPageContactUsPageContactUs;
      'api::page-earn-with-us.page-earn-with-us': ApiPageEarnWithUsPageEarnWithUs;
      'api::page-executive-search.page-executive-search': ApiPageExecutiveSearchPageExecutiveSearch;
      'api::page-feedbacks.page-feedbacks': ApiPageFeedbacksPageFeedbacks;
      'api::page-home.page-home': ApiPageHomePageHome;
      'api::page-industries.page-industries': ApiPageIndustriesPageIndustries;
      'api::page-recruitment.page-recruitment': ApiPageRecruitmentPageRecruitment;
      'api::page-relocation-help.page-relocation-help': ApiPageRelocationHelpPageRelocationHelp;
      'api::page-split-recruitment.page-split-recruitment': ApiPageSplitRecruitmentPageSplitRecruitment;
      'api::section-about-personalinvest.section-about-personalinvest': ApiSectionAboutPersonalinvestSectionAboutPersonalinvest;
      'api::section-payment-terms.section-payment-terms': ApiSectionPaymentTermsSectionPaymentTerms;
      'api::section-success-stories.section-success-stories': ApiSectionSuccessStoriesSectionSuccessStories;
      'api::section-trusted-map.section-trusted-map': ApiSectionTrustedMapSectionTrustedMap;
      'api::section-what-our-cliens-say.section-what-our-cliens-say': ApiSectionWhatOurCliensSaySectionWhatOurCliensSay;
      'api::shared-we-can-help-you-with.shared-we-can-help-you-with': ApiSharedWeCanHelpYouWithSharedWeCanHelpYouWith;
      'api::sphere.sphere': ApiSphereSphere;
    }
  }
}
