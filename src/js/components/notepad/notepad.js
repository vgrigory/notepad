import noteDialog from '../../components/noteDialog/noteDialog';
import notesList from '../../components/notesList/notesList';
import notepadTemplate from './notepad.html';
import aboutDialogTemplate from './aboutDialog.html';

import './notepad.scss';

let notepad = () => {
    return {
        templateUrl: notepadTemplate,
        controller: ($scope, $http, $injector, $attrs, $uibModal) => {
            $scope.openDialog = () => {
                $scope.aboutDialog = $uibModal.open({
                    animation: true,
                    templateUrl: aboutDialogTemplate,
                    scope: $scope,
                    size: 'lg'
                });
            };
        }
    };
};

export {notepad, noteDialog, notesList};