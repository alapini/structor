/*
 * Copyright 2015 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as actions from './actions.js';

const initialState = {
};

export default (state = initialState, action = {}) => {

    const {type, payload} = action;

    //if(type === actions.GET_PROJECT_INFO_DONE){
    //
    //    let { model, componentsTree} = payload.projectData;
    //
    //    // force to have at least one page
    //    if (!model.pages || model.pages.length <= 0) {
    //        let pageModel = utilStore.getTemplatePageModel();
    //        model.pages = [pageModel];
    //    }
    //    componentsTree['Html'] = HtmlComponents.getSortedHtmlComponents();
    //
    //    return Object.assign({}, state, {
    //        packageConfig: payload.packageConfig,
    //        projectDirectoryStatus: payload.projectDirectoryStatus,
    //        projectData: payload.projectData
    //    });
    //}

    return state;
}

