describe('notesList tests', function() {
    var scope;
    var rootScope;
    var timeout;

    beforeEach(module('App'));

    beforeEach(inject(function($rootScope, $componentController, $timeout) {
        rootScope = $rootScope;
        timeout = $timeout;

        scope = $rootScope.$new();
        controller = $componentController('notesList', {
            $scope: scope
        }, {});
    }));

    it('initial state - there should be no notes', function() {
        expect(scope.notes).toBeDefined();
        expect(scope.notes.length).toBe(0);
    });

    it('add a note', function(done) {
        rootScope.$broadcast('NoteDialog:storeNote', 'first note');

        // we wait a second (not 2) here, because "notesList" component
        // handles event a second after it has been triggered
        timeout(function () {
                expect(scope.notes.length).toBe(1);
                expect(scope.notes[0]).toBe('first note');

                done();
            },
            1000
        );

        timeout.flush();
    });
});
