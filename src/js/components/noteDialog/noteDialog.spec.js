describe('noteDialog tests', function() {
    var scope;
    var rootScope;
    var timeout;
    var sce;

    beforeEach(module('App'));

    beforeEach(inject(function($rootScope, $componentController, $timeout, $sce) {
        rootScope = $rootScope;
        timeout = $timeout;
        sce = $sce;

        scope = $rootScope.$new();
        controller = $componentController('noteDialog', {
            $scope: scope
        }, {});
    }));

    it('initial state - there should be no notes', function() {
        expect(scope.notes).toBeDefined();
        expect(scope.notes.length).toBe(0);
    });

    it('storeNote()', function(done) {
        scope.storeNote('first note');

        timeout(function () {
                expect(scope.notes.length).toBe(1);
                expect(sce.getTrustedHtml(scope.notes[0])).toBe('first note');

                done();
            },
            1000
        );

        timeout.flush();
    });

    it('storeNote() - empty note', function(done) {
        scope.storeNote('');

        timeout(function () {
                expect(scope.notes.length).toBe(0);

                done();
            },
            1000
        );

        timeout.flush();
    });
});
