import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'

export default class FirebaseEngine {
    static instance = null
    static firestore = null

    static setInstance(firebaseConfig){
        if (this.instance == null) {
            this.instance = firebase.initializeApp(firebaseConfig)
            this.firestore = this.instance.firestore()
        }
    }

    static getExampleDocs = () => {
        return this.firestore
        .collection('example_article')
        .orderBy('updatedAt', 'desc')
        .limit(5)
        .get()
        .then((snapshot) => {
            const res = []
            snapshot.forEach((doc) => {
                res.push(Object.assign({'id': doc.id}, doc.data()))
            })
            return res
        })
    }

    static countDocument = () => {
        return this.firestore
        .collection('count')
        .doc('count')
        .get()
        .then((snapshot) => {
            return snapshot.data().article
        })
    }

    static getDocumentByPage = (total, page, limit) => {
        return this.firestore
        .collection('example_article')
        .orderBy('number', 'desc')
        .startAt(total - ((page-1) * limit))
        .limit(limit)
        .get()
        .then((snapshot) => {
            const res = []
            snapshot.forEach((doc) => {
                res.push(Object.assign({'id': doc.id}, doc.data()))
            })
            return res
        })
    }

    static getDocument = (id) => {
        return this.firestore
        .collection('blog')
        .doc(id)
        .get()
        .then((snapshot) => {
            return snapshot.data()
        })
        
    }

}
