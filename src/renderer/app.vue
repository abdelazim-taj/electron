<template>
    <div>
        <div v-for="book in books" v-bind:key="book.name">{{book.name}} <button v-on:click="removeBook(book)">delete</button></div>
        <input type="text" v-model="newBook.name">
        <input type="text" v-model="newBook.auther">
        <input type="text" v-model="newBook.website">
        <button v-on:click="addBook">add</button>
    </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCYh9A-s91jqMPzMJWsOUE5aaNn2_EQG0w",
    authDomain: "test-app-azeem.firebaseapp.com",
    databaseURL: "https://test-app-azeem.firebaseio.com",
    projectId: "test-app-azeem",
    storageBucket: "test-app-azeem.appspot.com",
    messagingSenderId: "744290907174"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let booksRef = db.ref('books');

export default {
    firebase: {
        books: booksRef
    },
    data(){
        return{
            newBook: {
                name: '',
                auther: '',
                website: ''
            }
        }
    },
    methods:{
        addBook: function(){
            booksRef.push(this.newBook);
            this.newBook.name = '';
            this.newBook.auther = '';
            this.newBook.website = '';
        },
        removeBook: function(book){
            booksRef.child(book['.key']).remove();
        }
    }
}
</script>

<style>

</style>

