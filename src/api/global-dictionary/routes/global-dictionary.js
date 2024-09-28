'use strict';

/**
 * global-dictionary router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-dictionary.global-dictionary');
