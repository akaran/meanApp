import { Component, OnInit } from '@angular/core';
//import { FilterPipe } from '../filter.pipe';
import { LoggingService} from '../_services/index';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService]
})
export class DirectoryComponent implements OnInit {
  ninjas = [];
  constructor(private logger: LoggingService ) { }



  ngOnInit() {
    this.logger.getData().subscribe( (responsData) => this.ninjas=responsData);
  }

}
