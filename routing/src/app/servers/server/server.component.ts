import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // Implicit casting to number if you include a starting '+'
    // const id: number = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   );
    // The above is useless as we now have a resolver

    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );
  }

  onEdit(): void {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
