import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/user";

@Injectable()
export class LoginService {
    constructor (
        private router: Router
    ) {}

    login(username, password) {
        console.log("Passe dans le service")
        if (username == "Roms" && password == "Roms") {
            localStorage.setItem("passed", "good")
            this.router.navigateByUrl('login-component')
        } else {
            console.log(
                "%cStop!",
                "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
              );
        }
        /* return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                 store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            })); */
    }

    logout() {
        // remove user from local storage and set current user to null
        /* localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']); */
    }

    register(user: User) {
        /* return this.http.post(`${environment.apiUrl}/users/register`, user); */
    }
}