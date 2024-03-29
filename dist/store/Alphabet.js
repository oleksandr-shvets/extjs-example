/** */
Ext.define('store.Alphabet', {
    extend: 'Ext.data.Store',
    model: 'model.Letter',
    proxy: 'memory',

    /** */
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

    /** @ignore */
    constructor: function constructor() {
        this.callParent();
        var objects = this.letters.split('').map(function (letter) {
            return { letter: letter };
        });
        this.loadRawData(objects);
    },


    /** get and remove all records */
    popAll: function popAll() {
        var allRecords = this.getRange();
        this.removeAll();
        return allRecords;
    }
});
//# sourceMappingURL=Alphabet.js.map