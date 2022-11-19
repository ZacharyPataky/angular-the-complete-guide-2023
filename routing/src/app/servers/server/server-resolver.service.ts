import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface Server { 
    id: number, 
    name: string, 
    status: string 
};

@Injectable({
    providedIn: 'root'
})
export class ServerResolver implements Resolve<{ id: number, name: string, status: string }> {
    
    constructor(
        private serversService: ServersService
    ) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id']);
    };
}