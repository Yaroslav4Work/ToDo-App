let app = new Vue({
    el: '#app',
    data: {
        list: [],
        itemTitle: '',
        itemContent: '',
        itemRare: 'list-group-item-danger',
        settings: {}
    },
    methods: {
        addToList() {
            this.list.push({
                id: this.list.length,
                title: this.itemTitle,
                content: this.itemContent,
                rare: this.itemRare
            });
        },
        removeFromList(id) {
            this.list.splice(id, 1);
        }
    }
});