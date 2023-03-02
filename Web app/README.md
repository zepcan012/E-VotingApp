## Opis projekta

Nakon klika na Login otvara se Login forma. Ako postoji user u bazi moguće se logirati, a ako ne postoji potrebna je registracija. Lozinka mora sadržavati najmanje 6 znakova. Nakon toga, otvara se home page koji prikazuje notifikacije (null ako nema poruke).

Poruke se šalju preko Postmana. U Headeru u Key potrebno je dodati Authorization te Content-Type. U Value kod Authorization upiše se key=kopirani_server_ključ_sa_firebasea koji se nalazi u Firebaseu u Project Settings/Cloud Messaging, a Value kod Content Typea upiše se application/json. 
u Body potrebno je dodati raw te JSON. U ponuđeno polje za tekst potebno je upisati željenu poruku u formatu kao što je prikazano u primjeru:

{
 "notification": {
 "title": "Notification", 
 "body": "Never gonna give you up, Never gonna let you down"
 },
 "to" : "YOUR-GENERATED-TOKEN-FROM-BROWSER"
}

Potrebno je dodati lik za slanje: 

https://fcm.googleapis.com/fcm/send

te odabrati POST prije slanja push notifikacije.

Linkovi tutorijala koje sam pratila:

https://medium.com/mighty-ghost-hack/angular-8-firebase-cloud-messaging-push-notifications-cc80d9b36f82

https://www.youtube.com/watch?v=ODE9l1c3ujY