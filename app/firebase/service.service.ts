import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,
         Auth,UserCredential,signInWithEmailAndPassword,signOut,onAuthStateChanged, User, updateProfile  } from "firebase/auth";
import { getDatabase,get, ref, set,update  } from 'firebase/database';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private auth: Auth;
  private db;


  constructor() { 
    
  const firebaseConfig = {
    apiKey: "AIzaSyC474bpbZn4Am51OSHMZhCtKAAWdyB94qY",
    authDomain: "pag-reg.firebaseapp.com",
    databaseURL: "https://pag-reg-default-rtdb.firebaseio.com",
    projectId: "pag-reg",
    storageBucket: "pag-reg.appspot.com",
    messagingSenderId: "88678471975",
    appId: "1:88678471975:web:ae0312c5eff9c4e3147102"
  };

  const app = initializeApp(firebaseConfig);

  this.auth = getAuth(app);
  this.db = getDatabase(app);

  }

  registerUser(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async signOut() {
    try {
      await signOut(this.auth);
      // Limpiar credenciales en caché
      this.auth = getAuth();
    } catch (error) {

    }
  }

  async saveFormData(fullName: string, phoneNumber: string, email: string, gender:string, becas:string, birthdate:string, sostenedorName:string, puebloOriginario: string): Promise<void> {
    const user = this.auth.currentUser;
    if (user) {
      const userUid = user.uid;
      const registro = {
        fullName,
        phoneNumber,
        email,
        gender,
        becas,
        birthdate,
        sostenedorName,
        puebloOriginario
      };

      const formDataRef = ref(this.db, `alumno/${userUid}/registro`);
      await set(formDataRef, registro);
    } else {
      throw new Error('User not authenticated');
    }
  }


  async getUserData(): Promise<any> {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, async (user: User | null) => {
        if (user) {
          const userRef = ref(this.db, `alumno/${user.uid}/registro`);
          const snapshot = await get(userRef);
          const userData = snapshot.val();
          resolve(userData);
        } else {
          reject('Usuario no autenticado');
        }
      });
    });
  }

  async updateSpecificUserData(newData: any): Promise<void> {
    const user: User | null = this.auth.currentUser;

    if (user) {
      const userRef = ref(this.db, `alumno/${user.uid}/registro`);
      
      // Actualizar campos específicos en Realtime Database
      await update(userRef, newData);
    } else {
      console.error('Usuario no autenticado');
      throw new Error('Usuario no autenticado');
    }
  }
  
}



