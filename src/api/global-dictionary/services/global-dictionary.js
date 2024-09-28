'use strict';

/**
 * global-dictionary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-dictionary.global-dictionary');
