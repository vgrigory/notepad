import './notesList.scss';
import template from './notesList.html';

export default () => {
    return {
        templateUrl: template,
        controller: ($scope, $http, $injector, $timeout, $location, $anchorScroll) => {
            $scope.notes = [];

            $scope.$on('NoteDialog:storeNote', (event, newNote) => {
                // we're slowing things down by a second (not 2) here,
                // because "noteDialog" component fires "NoteDialog:storeNote" event
                // a second after user clicks "Add note" button
                $timeout(
                    () => {
                        $scope.notes.push(newNote);
                        $location.hash('note' + ($scope.notes.length - 1));
                        $anchorScroll();
                    },
                    1000
                );
            });
        }
    };
};