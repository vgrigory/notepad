import './noteDialog.scss';
import buttonTemplate from './noteDialogButton.html';
import dialogTemplate from './noteDialog.html';

export default () => {
    return {
        templateUrl: buttonTemplate,
        controller: ($scope, $http, $injector, $rootScope, $timeout, $sce, $location, $anchorScroll) => {
            $scope.notes = [];
            $scope.dialogTemplate = dialogTemplate;

            $scope.storeNote = (newNote) => {
                if (!newNote) {
                    return;
                }

                $scope.newNote = '';
                $timeout(
                    () => {
                        newNote = $sce.trustAsHtml(newNote.replace(/(?:\r\n|\r|\n)/g, '<br />'));

                        $scope.notes.push(newNote);
                        $location.hash('dialogNote' + ($scope.notes.length - 1));
                        $anchorScroll();

                        $rootScope.$broadcast('NoteDialog:storeNote', newNote);
                    },
                    1000
                );
            };
        }
    };
};