import firebase from 'firebase'

class Api {
  init (apiKey, authDomain, dbName) {
    this.apiKey = apiKey
    this.authDomain = authDomain
    this.url = `https://${dbName}.firebaseio.com/`
    this.dbName = dbName
    this.user = undefined
    return this.initFirebase()
  }

  initFirebase () {
    return new Promise((resolve, reject) => {
      firebase.initializeApp({
        apiKey: this.apiKey,
        authDomain: this.authDomain,
        databaseURL: this.url
      })

      this.db = firebase.database()

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user
        } else {
          this.user = undefined
        }

        resolve()
      })
    })
  }

  saveContribution (value) {
    return new Promise((resolve, reject) => {
      if (!this.user) {
        reject()
        return
      }

      value.slug = this.generateSlug(value)
      let newContrib = this.db.ref(`${value.year}/contributions`).push()
      newContrib.set(value)
      resolve()
    })
  }

  generateSlug (value) {
    let slug = ''
    let strDay = value.day
    if (value.day < 10) {
      strDay = `0${value.day}`
    }
    slug += `${value.year} ${strDay} ${value.title} ${value.author}`
    slug = slug.replace(/\s/g, '-').toLowerCase()

    return slug
  }

  getContributionsOfDay (year, day) {
    return new Promise((resolve, reject) => {
      this.db.ref(`${year}/contributions`).orderByChild('day').equalTo(day).once('value').then((snapshot) => {
        let contribs = []
        snapshot.forEach((data) => {
          contribs.push(data.val())
        })
        resolve(contribs)
      })
    })
  }

  getCurrentUser () {
    if (this.user) {
      return this.user
    }

    return firebase.auth().currentUser
  }

  signin (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  signout () {
    return firebase.auth().signOut()
  }
}

export default new Api()
