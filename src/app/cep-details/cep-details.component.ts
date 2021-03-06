import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cep, ceps } from '../ceps';
import { ViacepService } from '../viacep.service';


@Component({
  selector: 'app-cep-details',
  templateUrl: './cep-details.component.html',
  styleUrls: ['./cep-details.component.css']
})
export class CepDetailsComponent implements OnInit {

  cep: Cep | undefined;

  constructor(private route: ActivatedRoute, private  viacepService: ViacepService) {}

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const numeroCepFromRoute = String(routeParams.get('numeroCep'));


    this.cep = ceps.find((cep) => cep.cep === numeroCepFromRoute);
    this.viacepService.getCep(numeroCepFromRoute).subscribe(
      cep => this.cep = cep
    );

}
}
