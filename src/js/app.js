import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import angularElasticTextarea from 'angular-elastic';
import angularSanitize from 'angular-sanitize';

import {notepad, noteDialog, notesList} from './components/notepad/notepad';

import '../styles/app.scss';

const MODULE_NAME = 'App';

angular.module(MODULE_NAME, [
    uiBootstrap,
    angularSanitize,
    angularElasticTextarea
])
.component('notepad', notepad())
.component('noteDialog', noteDialog())
.component('notesList', notesList())
;

angular.bootstrap(document, [MODULE_NAME]);