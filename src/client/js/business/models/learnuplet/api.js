/**
 * Copyright Morpheo Org. 2017
 *
 * contact@morpheo.co
 *
 * This software is part of the Morpheo project, an open-source machine
 * learning platform.
 *
 * This software is governed by the CeCILL license, compatible with the
 * GNU GPL, under French law and abiding by the rules of distribution of
 * free software. You can  use, modify and/ or redistribute the software
 * under the terms of the CeCILL license as circulated by CEA, CNRS and
 * INRIA at the following URL "http://www.cecill.info".
 *
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 *
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 *
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 */

/*
   globals btoa fetch
   ORCHESTRATOR_API_URL ORCHESTRATOR_USER ORCHESTRATOR_PASSWORD
*/

import queryString from 'query-string';
import {isEmpty} from 'lodash';
import {handleResponse} from '../../../utils/entities/fetchEntities';


export const getHeaders = jwt => ({
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Basic ${jwt}`,
});

export const fetchList = (url) => {
    // will be overrided by server on the fly (no authentication needed for dev servers)
    const headers = getHeaders(btoa(`${ORCHESTRATOR_USER}:${ORCHESTRATOR_PASSWORD}`));
    return fetch(url, {
        headers,
        // Allows API to set http-only cookies with AJAX calls
        // @see http://www.redotheweb.com/2015/11/09/api-security.html
        // credentials: 'include',
        mode: 'cors',
    })
        .then(response => handleResponse(response))
        .then(json => ({list: json}), error => ({error}));
};


export const fetchLearnupletByAlgo = (get_parameters) => {
    const url = `${ORCHESTRATOR_API_URL}/learnuplet${!isEmpty(get_parameters) ? `?${queryString.stringify(get_parameters)}` : ''}`;
    return fetchList(url);
};
