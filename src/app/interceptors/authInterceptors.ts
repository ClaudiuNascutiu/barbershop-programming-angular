import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../service/user-service/user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService: UserService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.userService.getUser();
        if(!!currentUser){
            const requestWithAuth = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    'Basic' + btoa(currentUser.email+ ":" + currentUser.password))
            })
            return next.handle(requestWithAuth);
        }else{
            const requestWithAuth = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    '')
            })
            return next.handle(requestWithAuth);
        }
    }

}