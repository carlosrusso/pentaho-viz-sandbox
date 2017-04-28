/*!
 * Copyright 2010 - 2017 Pentaho Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
  "module",
  "pentaho/i18n!../i18n/model"
], function(module, bundle) {

  "use strict";

  return function(context) {

    var Refinement = context.get("pentaho/type/refinement");

    return Refinement.extend({

      type:  {
        id: module.id,
        of: "string",
        facets: "DiscreteDomain",
        domain: ["none", "linear"]
      }
    })
    .implement({type: bundle.structured.trendType});
  };
});
